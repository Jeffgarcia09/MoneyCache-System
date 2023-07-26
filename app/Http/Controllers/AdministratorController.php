<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Mail\RegisterAdminMail;
use App\Models\Administrator;
use App\Models\Agent;
use App\Models\Lead;
use App\Models\Schedule;
use App\Models\UserActivityLog;
use Database\Factories\AdminFactory;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

use function bcrypt;
use function response;

class AdministratorController extends Controller
{
    public function index(): Response
    {
        $administrator = Administrator::all();
        return response($administrator);
    }

    public function create(): Response
    {
        $administrator = Administrator::all();
        return response($administrator);
    }

    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();

        try {
            $administrator = Administrator::create([
                "first_name"  => $request->first_name,
                "last_name"   => $request->last_name,
                "middle_name" => $request->middle_name,
                "email"       => $request->email,
            ]);

            $administrator->profile()->create([
                'email'      => $request->email,
                'password'   => bcrypt($request->password),
                'profile_id' => '1',
            ]);

            if(auth()->user()){
                $adminlog = UserActivityLog::create([
                    // 'user_id'       => auth()->user()->id,
                    'user_id'       => '1',
                    'loggable_type' => 'admin',
                    'loggable_id'   => $administrator->id,
                    'description'   => 'created',
                ]);
            }

            DB::commit();

            $mail = Mail::to('logicbaseojt.baranggan@gmail.com')
                ->send(new RegisterAdminMail('https://localhost:8000/login', $request->email, $request->password));

            return response()->json([
                'data' => [
                    'email'       => $administrator->email,
                    'first_name'  => $administrator->first_name,
                    'middle_name' => $administrator->middle_name,
                    'last_name'   => $administrator->last_name,
                ],
            ], 201);
        } catch (Exception $exception) {
            Log::error($exception->getMessage());
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Error creating administrator',
                'error'   => $exception->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $this->validate($request, [
            'email'       => 'required',
            'first_name'  => 'required',
            'last_name'   => 'required',
            'middle_name' => 'nullable',
            'role_id'     => 'required',
            'username'    => 'required',
            'password'    => 'required',
        ]);

        $administrator = Administrator::create($request->all());

        return response()->json([
            'data' => [
                'email'       => $administrator->email,
                'role_id'     => $administrator->role_id,
                'first_name'  => $administrator->first_name,
                'middle_name' => $administrator->middle_name,
                'last_name'   => $administrator->last_name,
                'username'    => $administrator->username,
                'password'    => $administrator->password,
            ],
        ], 201);
    }

    public function destroy(int $id): Response
    {
        $customer = Administrator::findOrFail($id);
        $customer->delete();

        return response()->noContent();
    }

    public function showData()
    {

        $leads = Lead::all();
        $leadCount = 0;
        $qualifiedCount = 0;
        $closedCount = 0;
        $notInterestedCount = 0;

        foreach ($leads as $lead) {
            if ($lead->status == 'leads') {
                $leadCount++;
            }
            if ($lead->status == 'qualified leads') {
                $qualifiedCount++;
            }
            if ($lead->status == 'closed leads') {
                $closedCount++;
            }
            if ($lead->status == 'not interested') {
                $notInterestedCount++;
            }
        }

        $totalLeads = Lead::count();
        $agents = Agent::all();
        $schedules = Schedule::all();

        return response()->json([
            $leadCount,
            $qualifiedCount,
            $closedCount,
            $notInterestedCount,
            $totalLeads,
            $agents,
            $schedules,
        ]);
    }


    // public function changePass(Request $request){
    //     $this->validate($request, [
    //         'password'    => 'required',
    //         'cpassword'   => 'required|same:password'
    //     ]);
    // }

    public function adminProfile($id){
        $admin = Administrator::find($id);

        return response()->json($admin);
    }
}

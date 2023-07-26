<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Events\AgentHasBeenAdded;
use App\Http\Requests\CreateAgentAccountRequest;
// use App\Events\AgentHasBeenUpdated;
use App\Mail\AgentMail;
use App\Mail\RegisterAgent;
use App\Mail\RegisterAgentMail;
use App\Models\Agent;
use App\Models\AgentActivityLog;
use Exception;
use Illuminate\Database\DBAL\TimestampType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use function compact;
use function event;
use function redirect;
use function request;
use function response;
use function view;

class AgentController extends Controller
{
    public function index()
    {
        $agents = Agent::all();
        //        return view('agent.index', compact('data'));
        return response()->json($agents);
    }
    public function create()
    {
        $agent = Agent::pluck('name', 'name')->all();
        return view('agent.create', compact('agent'));
    }
    public function store(CreateAgentAccountRequest $request): JsonResponse
    {
        // dd($request);
        $data = [
            'email'       => $request->email,
            'images'      => $request->images,
            'first_name'  => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name'   => $request->last_name,
            'suffix'      => $request->suffix,
            'phone'       => $request->phone,
            'city'        => $request->city,
            'province'    => $request->province,
            'zipcode'     => $request->zipcode,
            'date_hired'  => $request->date_hired ?? date('Y-m-d H:i:s'),
            'start_date'  => $request->start_date ?? date('Y-m-d H:i:s'),
            'contract'    => $request->contract,
            'clearance'   => $request->clearance,
            'password'    => $request->password,
            // 'created_at'  => date('Y/m/d H:i:s'),
            // 'updated_at'  => date('Y-m-d H:i:s')
        ];

        // $check = Agent::where([
        //     'email'       => $request->email,
            
        // ])->first();
        DB::beginTransaction();
        try {
            //refactor
            $agent = new Agent();
            $agent->email = $request->email;
            $agent->images = $request->images;
            $agent->first_name = $request->first_name;
            $agent->middle_name = $request->middle_name;
            $agent->last_name = $request->last_name;
            $agent->suffix = $request->suffix;
            $agent->phone = $request->phone;
            $agent->city = $request->city;
            $agent->province = $request->province;
            $agent->zipcode = $request->zipcode;
            $agent->date_hired = $data['date_hired'];
            $agent->start_date = $data['start_date'];
            $agent->contract = $request->contract;
            $agent->clearance = $request->clearance;
            $agent->password = $request->password;
            $agent->save();
            //create Logs if a user is authenticated
            if (auth()->user()) {
                $agentLog = AgentActivityLog::create([
                    'user_id'       => auth()->user()->id,
                    'loggable_type' => 'agent',
                    'loggable_id'   => $agent->id,
                    'description'   => 'created',
                ]);
            }
            DB::commit();

            Mail::to('logicbaseojt.baranggan@gmail.com')
                ->send(new RegisterAgentMail('https://localhost:3000/agentslogin', $request->email, $request->password));


            event(new AgentHasBeenAdded($agent, $data));
            return response()->json([
                'data' => [
                    'email'       => $agent->email,
                    'images'      => $agent->images,
                    'first_name'  => $agent->first_name,
                    'middle_name' => $agent->middle_name,
                    'last_name'   => $agent->last_name,
                    'suffix'      => $agent->suffix,
                    'phone'       => $agent->phone,
                    'city'        => $agent->city,
                    'province'    => $agent->province,
                    'zipcode'     => $agent->zipcode,
                    'date_hired'  => $agent->date_hired,
                    'start_date'  => $agent->start_date,
                    'contract'    => $agent->contract,
                    'clearance'   => $agent->clearance,
                    'password'    => $agent->password,
                    // 'created_at'  => $agent->created_at,
                    // 'updated_at'  => $agent->updated_at,
                ],
            ], 201);
        } catch (Exception $exception) {
            Log::error($exception->getMessage());
            DB::rollBack();
            return response()->json(['error' => true, "message" => "something is wrong"], 417);
        }
    }
    public function update(Request $request, string $id)
    {
        dd($request->post());
        $this->validate($request, [
            // 'id',
            'email'       => 'required',
            'images'      => 'required',
            'first_name'  => 'required',
            'last_name'   => 'required',
            'middle_name' => 'nullable',
            'suffix'      => 'nullable',
            'phone'       => 'required',
            'province'    => 'required',
            'city'        => 'required',
            'zipcode'     => 'required',
            'date_hired'  => 'required',
            'start_date'  => 'required',
            'contract'    => 'required',
            'clearance'   => 'required',
            'password'   => 'required',
            
        ]);
        $agent = Agent::create($request->all());
        $agentLog = AgentActivityLog::create([
            'user_id'       => auth()->user()->id,
            'loggable_type' => 'agent',
            'loggable_id'   => $agent->id,
            'description'   => 'updated',
        ]);
        Mail::to($agent->email)
            ->send(
                new AgentMail(
                    request('first_name'),
                    request('last_name'),
                    request('middle_name')
                )
            );
        return response()->json([
            'data' => [
                // 'id' => $agent->id,
                'email'       => $agent->email,
                'images'      => $agent->images,
                'first_name'  => $agent->first_name,
                'middle_name' => $agent->middle_name,
                'last_name'   => $agent->last_name,
                'suffix'      => $agent->suffix,
                'phone'       => $agent->phone,
                'city'        => $agent->city,
                'province'    => $agent->province,
                'zipcode'     => $agent->zipcode,
                'date_hired'  => $agent->date_hired,
                'start_date'  => $agent->start_date,
                'contract'    => $agent->contract,
                'clearance'   => $agent->clearance,
                'password'   => $agent->password,
        ], 201]);
    }
    public function destroy($id)
    {
        $agent = Agent::findOrFail($id);
        $agent->delete();
        //agent delete logs
        $agentLog = AgentActivityLog::create([
            'user_id'       => auth()->user()->id,
            'loggable_type' => 'agent',
            'loggable_id'   => $agent->id,
            'description'   => 'deleted',
        ]);
        return response()->noContent();
        return redirect('agent')->with('flash_message', 'Agent deleted!');
    }
}

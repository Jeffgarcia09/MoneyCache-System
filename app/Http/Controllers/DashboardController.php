<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\Agent;
use App\Models\Lead;
use App\Models\Schedule;
use Illuminate\Support\Facades\Auth;

use function response;

class DashboardController extends Controller
{
    public function index(LoginRequest $request)
    {
        if (Auth::check()) {
            $profile_id = Auth::user()->profile_id;

            if ($profile_id == 1) {
                // return response()->json(['url' => '/admin-dashboard']);

                return response()->json('go to admin dashboard');
            } elseif ($profile_id == 2) {
                // return response()->json(['url' => '/customer-dashboard']);
                return response()->json('go to agent dashboard');
            }
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function show()
    {
        $leads    = Lead::all();
        $agent    = Agent::all();
        $schedule = Schedule::all();

        return response()->json([
            $leads,
            $agent,
            $schedule,
        ]);
    }
}

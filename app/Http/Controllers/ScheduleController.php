<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Agent;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use function response;

class ScheduleController extends Controller
{
    public function index()
    {
        return response()->json(Schedule::all());
    }

    public function getAgent()
    {
        $agents = Agent::all();

        return response()->json($agents);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'agent_id' => 'nullable',
            'client_name' => 'required|string',
            // 'name' => 'required|string',
            'date'   => 'required|date',
            'time'   => 'required',
            'status' => 'required|in:For Demo,Done Demo,Rescheduled,Cancelled',
            'reason' => 'nullable|string',
            'contact' => 'required',
            'email' => 'required',
            'agent_name' => 'nullable',
        ]);

        $schedule = Schedule::create($validatedData);

        return response()->json(['message' => 'Schedule created successfully', 'schedule' => $schedule], Response::HTTP_CREATED);
    }

    public function edit($id)
    {
        $schedule = Schedule::find($id);
        return response()->json([$schedule]);
    }

    public function update(Request $request, $id)
    {
        $schedule = Schedule::find($id);

        if (!$schedule) {
            return response()->json(['message' => 'Schedule not found'], 404);
        }

        $schedule->agent_id    = $request->input('agent_id');
        $schedule->client_name = $request->input('client_name');
        $schedule->date        = $request->input('date');
        $schedule->time        = $request->input('time');
        $schedule->status      = $request->input('status');
        $schedule->reason      = $request->input('reason');
        $schedule->contact      = $request->input('contact');
        $schedule->email      = $request->input('email');
        $schedule->agent_name      = $request->input('agent_name');
        $schedule->save();

        return response()->json($schedule);
    }

    public function destroy($id)
    {
        $schedule = Schedule::findOrFail($id);
        $schedule->delete();

        return response()->json(['message' => 'Schedule deleted successfully'], Response::HTTP_OK);
    }
}

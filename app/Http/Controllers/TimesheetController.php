<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Timesheet;
use DateTime;
use Illuminate\Http\Request;

use function date;
use function response;

// Import Carbon library for working with time

class TimesheetController extends Controller
{
    public function index()
    {
        $timesheets = Timesheet::all();

        return response()->json($timesheets);
    }

    public function store(Request $request)
    {
        $start_time = new DateTime($request->input('start_time'));
        $end_time   = new DateTime($request->input('end_time'));

        $interval    = $end_time->diff($start_time);
        $total_hours = $interval->h + ($interval->i / 60);

        $timesheet                    = new Timesheet();
        $timesheet->date              = $request->input('date');
        $timesheet->agent_id          = $request->input('agent_id');
        $timesheet->agent_name        = $request->input('agent_name');
        $timesheet->task_description  = $request->input('task_description');
        $timesheet->start_time        = $request->input('start_time');
        $timesheet->end_time          = $request->input('end_time');
        $timesheet->total_hours_spent = $total_hours;

        $timesheet->save();

        // return response()->json($timesheet);
        return response()->json([
            'data' => [
                // 'id' => $agent->id,
                'date'       => $timesheet->date,
                'agent_id'      => $timesheet->agent_id,
                'agent_name'  => $timesheet->agent_name,
                'task_description' => $timesheet->task_description,
                'start_time'   => $timesheet->start_time,
                'end_time'      => $timesheet->end_time,
                'total_hours_spent'       => $timesheet->total_hours,
            ],
        ], 201);
    }

    public function show($id)
    {
        $timesheet = Timesheet::find($id);

        if (! $timesheet) {
            return response()->json(['message' => 'Timesheet not found'], 404);
        }

        return response()->json($timesheet);
    }

    public function update(Request $request, $id)
    {
        $timesheet = Timesheet::find($id);

        if (! $timesheet) {
            return response()->json(['message' => 'Timesheet not found'], 404);
        }
        $start_time = new DateTime($request->input('start_time'));
        $end_time   = new DateTime($request->input('end_time'));

        $interval    = $end_time->diff($start_time);
        $total_hours = $interval->h + ($interval->i / 60);

        $timesheet->date              = $request->input('date') ?? date('Y-m-d');
        $timesheet->agent_id          = $request->input('agent_id');
        $timesheet->agent_name        = $request->input('agent_name');
        $timesheet->task_description  = $request->input('task_description');
        $timesheet->start_time        = $request->input('start_time');
        $timesheet->end_time          = $request->input('end_time');
        $timesheet->total_hours_spent = $request->input('total_hours_spent');
        $timesheet->save();

        return response()->json($timesheet);
    }

    public function destroy($id)
    {
        $timesheet = Timesheet::find($id);

        if (! $timesheet) {
            return response()->json(['message' => 'Timesheet not found'], 404);
        }

        $timesheet->delete();

        return response()->json(['message' => 'Timesheet deleted']);
    }
}

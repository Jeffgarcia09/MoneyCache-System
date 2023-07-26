<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\TimeEntry;
use Illuminate\Http\Request;

use function now;
use function response;

class TimeTracker extends Controller
{
    public function startTimer(Request $request)
    {
        $userId = $request->user()->id;

        $timeEntry = TimeEntry::create([
            'user_id'    => $userId,
            'start_time' => now(),
            'status'     => 'in_progress',
        ]);

        // Log the action
        $this->logAction($userId, 'Timer started', $timeEntry->id);

        return response()->json(['status' => 'Timer started']);
    }

    public function pauseTimer(Request $request)
    {
        $userId = $request->user()->id;

        $timeEntry = TimeEntry::where('user_id', $userId)
            ->where('status', 'in_progress')
            ->latest()
            ->first();

        if (! $timeEntry) {
            return response()->json(['status' => 'No active timer found']);
        }

        $timeEntry->duration += now()->diffInSeconds($timeEntry->start_time);
        $timeEntry->status    = 'paused';
        $timeEntry->save();

        // Log the action
        $this->logAction($userId, 'Timer paused', $timeEntry->id);

        return response()->json(['status' => 'Timer paused']);
    }

    public function resumeTimer(Request $request)
    {
        $userId = $request->user()->id;

        $timeEntry = TimeEntry::where('user_id', $userId)
            ->where('status', 'paused')
            ->latest()
            ->first();

        if (! $timeEntry) {
            return response()->json(['status' => 'No paused timer found']);
        }

        $timeEntry->start_time = now();
        $timeEntry->status     = 'in_progress';
        $timeEntry->save();

        // Log the action
        $this->logAction($userId, 'Timer resumed', $timeEntry->id);

        return response()->json(['status' => 'Timer resumed']);
    }

    public function stopTimer(Request $request)
    {
        $userId = $request->user()->id;

        $timeEntry = TimeEntry::where('user_id', $userId)
            ->where('status', 'in_progress')
            ->latest()
            ->first();

        if (! $timeEntry) {
            return response()->json(['status' => 'No active timer found']);
        }

        $timeEntry->duration += now()->diffInSeconds($timeEntry->start_time);
        $timeEntry->end_time  = now();
        $timeEntry->status    = 'completed';
        $timeEntry->save();

        // Log the action
        $this->logAction($userId, 'Timer stopped', $timeEntry->id);

        return response()->json(['status' => 'Timer stopped']);
    }

    // Other methods for editing, saving, canceling, resetting, deleting, etc.

    protected function logAction($userId, $action, $timeEntryId)
    {
        // Log the action to your preferred logging system or database table
        // You can use Laravel's built-in logging mechanisms or create a separate log model/table

        // Example: logging to the database

        Log::create([
            'user_id'       => $userId,
            'action'        => $action,
            'time_entry_id' => $timeEntryId,
            'timestamp'     => now(),
        ]);
    }
}

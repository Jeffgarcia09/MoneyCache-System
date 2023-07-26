<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timesheet extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'agent_id',
        'agent_name',
        'task_description',
        'start_time',
        'end_time',
        'total_hours_spent',
    ];
}

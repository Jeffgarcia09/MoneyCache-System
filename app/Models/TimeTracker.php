<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeTracker extends Model
{
    protected $fillable = [
        'user_id',
        'start_time',
        'end_time',
        'duration',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Additional methods and relationships can be defined here
}

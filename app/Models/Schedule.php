<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = ['client_name', 'date', 'time', 'status', 'agent_id', 'reason', 'email', 'contact', 'agent_name'];

    public function user()
    {
        return $this->belongsTo(Agent::class);
    }
}

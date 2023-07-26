<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'business_Name',
        'contact_Number',
        'email_Address',
        'address',
        'status',
        'subscription',
        'agent_id',
        'started_Date',
    ];

    protected $primarykey = 'id';

    protected $hidden = [
        "created_at",
    ];

    public function agent(): HasMany
    {
        return $this->hasMany(Agent::class);
    }

    public function loggable()
    {
        return $this->morphOne(UserActivityLog::class, 'loggable');
    }
}

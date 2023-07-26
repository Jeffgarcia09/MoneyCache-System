<?php

declare(strict_types=1);

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{
    use HasFactory;

    public function getDateFormat()
    {
        return 'Y-m-d'; // Change the format here
    }

    protected $fillable = [
        'email',
        'images',
        'first_name',
        'middle_name',
        'last_name',
        'suffix',
        'phone',
        'city',
        'province',
        'zipcode',
        'date_hired',
        'start_date',
        'contract',
        'clearance',
    ];

    public function profile()
    {
        return $this->morphOne(User::class, 'profile');
    }
}

<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\AdminHasBeenAdded;
use Illuminate\Support\Str;

use function bcrypt;

class CreateAdminUserAccount
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     */
    public function handle(AdminHasBeenAdded $event): void
    {
        $admin = $event->administrator;

        $admin->profile()->create([
            "email"    => $admin->email,
            "password" => bcrypt(Str::random(8)),
        ]);
    }
}

<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\AdminHasBeenAdded;

use function activity;

class LogNewlyCreatedAdminUserAccout
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
        $data  = $event->data;
        $admin = $event->admin;
        activity('admin')->log("created {$admin->id}");
    }
}

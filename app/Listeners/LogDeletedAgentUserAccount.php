<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\AgentHasBeenDeleted;

class LogDeletedAgentUserAccount
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
    public function handle(AgentHasBeenDeleted $event): void
    {
    }
}

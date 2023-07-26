<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\AgentHasBeenAdded;

class LogNewlyCreatedAgentAccount
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
    public function handle(AgentHasBeenAdded $event): void
    {
        $data  = $event->data;
        $agent = $event->agent;
        // activity('agent')->log("created {$agent->id}");
    }
}

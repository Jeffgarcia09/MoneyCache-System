<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\AgentHasBeenUpdated;

class LogUpdatedAgentAccount
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
    public function handle(AgentHasBeenUpdated $event): void
    {
        $agent = $event->agent;
        $data  = $event->data;
        $agent = $event->agent;
        // activity('agent')->log("created {$agent->id}");
    }
}

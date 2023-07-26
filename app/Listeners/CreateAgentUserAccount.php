<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\AgentHasBeenAdded;

use function bcrypt;

class CreateAgentUserAccount
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
        $agent = $event->agent;

        $agent->profile()->create([
            "email"    => $agent->email,
            "password" => bcrypt($event->data['password']),
        ]);
    }
}

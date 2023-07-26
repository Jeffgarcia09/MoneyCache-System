<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\AgentHasBeenUpdated;

use function bcrypt;

class UpdateAgentUserAccount
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

        $agent->profile()->create([
            "email"    => $agent->email,
            "password" => bcrypt(Str::random(8)),
        ]);
    }
}

<?php

declare(strict_types=1);

namespace Tests\Feature\AccountManagement\Agent;

use App\Models\Agent;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DeleteAgentAccountTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_successfully_deleted_agent_account(): void
    {
        // $this->markTestIncomplete("This is not working. Please fix"); // delete this line once fixed.
        $administrator = User::factory()->asAdministrator()->create();;

        $agent    = Agent::factory()->create();
        $response = $this->actingAs($administrator)->delete('/agent/' . $agent->id);

        $response->assertStatus(204);
        $this->assertDatabaseMissing('agents', ['id' => $agent->id]);
    }
    public function test_successfully_deleted_agent_account_logs(): void
    {
        $user = User::factory()->create();

        $agent    = Agent::factory()->create();
        $response = $this->actingAs($user)->delete('/agent/' . $agent->id);

        $response->assertStatus(204);
        $this->assertDatabaseMissing('agents', ['id' => $agent->id]);
        $this->assertDatabaseHas('agent_activity_logs', [
            'user_id'       => $user->id,
            'loggable_type'  => 'agent',
            'loggable_id' => $user->id,
            'description'   => 'deleted',
        ]);
    }
}

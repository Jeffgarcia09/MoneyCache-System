<?php

use App\Models\Agent;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ScheduleControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateSchedule()
    {
        // Create a regular user
        $user = User::factory()->create();

        // Create an agent record
        $agent = Agent::factory()->create();

        $data = [
            // 'agent_id' => $agent->id, // Set the agent_id field with the agent's ID
            'client_name' => 'John Doe',
            'name' => 'John',
            'date' => '2023-06-01',
            'time' => '10:00 AM',
            'status' => 'FOR DEMO',
        ];

        $response = $this->actingAs($user)->postJson(route('schedule.store'), $data);

        $response->assertStatus(201)
            ->assertJson([
                'message' => 'Schedule created successfully',
            ]);

        $this->assertDatabaseHas('schedules', [
            // 'agent_id' => $data['agent_id'],
            'client_name' => $data['client_name'],
            'name' => $data['name'],
            'date' => $data['date'],
            'time' => $data['time'],
            'status' => $data['status'],
        ]);
    }
}

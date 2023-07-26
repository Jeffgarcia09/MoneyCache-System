<?php

namespace Tests\Feature;

use App\Models\Timesheet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\TimesheetController;
use Tests\TestCase;
use Faker\Factory as Faker;
use Carbon\Carbon;

class TimesheetTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_can_create_timesheet()
    {
        $data = [
            'date' => Carbon::now()->toDateString(),
            'agent_id' => $this->faker->randomNumber(),
            'agent_name' => $this->faker->name,
            'task_description' => $this->faker->sentence,
            'start_time' => '09:00:00',
            'end_time' => '17:00:00',
        ];

        $response = $this->postJson('/timesheets', $data);

        $response->assertStatus(201)
            ->assertJson(['data' => $data]);
    }

    public function test_can_get_all_timesheets()
{
    Timesheet::factory()->create([
        'date' => Carbon::now()->toDateString(),
        'agent_id' => 1, // Provide a valid agent ID
    ]);

    $response = $this->getJson('/timesheets');

    $response->assertStatus(200)
        ->assertJsonCount(1, 'data');
}


    public function test_can_get_timesheet_by_id()
    {
        $timesheet = Timesheet::factory()->create();

        $response = $this->getJson("/timesheets/{$timesheet->id}");

        $response->assertStatus(200)
            ->assertJson(['data' => $timesheet->toArray()]);
    }

    public function test_can_update_timesheet()
    {
        $timesheet = Timesheet::factory()->create([
            'date' => Carbon::now()->toDateString(),
            'agent_id' => $this->faker->randomNumber(),
            'agent_name' => $this->faker->name,
            'task_description' => $this->faker->sentence,
            'start_time' => '09:00:00',
            'end_time' => '17:00:00',
        ]);

        $updatedData = [
            'date' => Carbon::now()->toDateString(),
            'agent_id' => 3,
            'agent_name' => $this->faker->name,
            'task_description' => $this->faker->sentence,
            'start_time' => '09:00:00',
            'end_time' => '17:00:00',
        ];

        $response = $this->putJson('/timesheets/' . $timesheet->id, $updatedData);

        $response->assertStatus(200)
            ->assertJson($updatedData);
    }

    public function test_can_delete_timesheet()
    {
        $timesheet = Timesheet::factory()->create();

        $response = $this->deleteJson("/timesheets/{$timesheet->id}");

        $response->assertStatus(200)
            ->assertJson(['message' => 'Timesheet deleted']);
    }

}

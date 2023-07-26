<?php

namespace Tests\Feature\Meeting;

use App\Models\User;
use App\Traits\UserProfileTypes;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Testing\Fakes\Fake;

class CreateMeetingTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    use UserProfileTypes;
    /**
     * A basic feature test example.
     */
    public function test_create_meeting_successfully(): void
    {
        $administrator = User::factory()->asAdministrator()->create();

        $meeting = [
            'leads_name'       => $this->faker->firstname(),
            'date'  => $this->faker->firstName(),
            'time' => $this->faker->lastName(),
            'status'   => $this->faker->lastName(),
        ];

        $this->actingAs($administrator)
            ->postJson(route('meetings.store', $meeting))
            ->assertStatus(201)
            ->assertExactJson([
                'data' => $meeting,
            ]);

        $this->assertDatabaseHas('meetings', $meeting);

        
    }
}

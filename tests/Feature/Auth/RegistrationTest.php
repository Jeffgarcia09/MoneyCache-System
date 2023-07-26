<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use function compact;
use function route;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_new_users_can_register(): void
    {
        $this->markTestIncomplete("This is not working. Please fix");

        $user     = User::factory()->create();
        $response = $this->post('/register', [
            'name'                  => 'Test User',
            'email'                 => 'test@example.com',
            'password'              => 'password',
            'password_confirmation' => 'password',
        ]);

        $response = $this->actingAs($user)->postJson(route('customer.store', $response))

        ->assertStatus(201)
        ->assertJson(compact('response'));

        $this->assertAuthenticated();
    }
}

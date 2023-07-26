<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Models\Admin;
use App\Models\Administrator;
use App\Models\Agent;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use function bcrypt;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_agent_users_can_authenticate_using_the_login_screen(): void
    {
        // $this->markTestIncomplete("This is not working. Please fix");
        $agent    = Agent::factory()->create();
        $password = 'password';
        $user     = User::factory()->create([
            'profile_id'   => $agent->id,
            'profile_type' => 'admin',
            'email'        => $agent->email,
            'password'     => bcrypt($password),
        ]);

        $response = $this->postJson('/login', [
            'email'    => $user->email,
            'password' => $password,
        ]);

        $response->assertExactJson([
            'email'        => $user->email,
            'password'     => $password,
            'profile_type' => $user->profile_type,
        ]);

        $this->assertAuthenticated();
    }

    public function test_agent_users_does_not_exist()
    {
        // $this->markTestIncomplete("This is not working. Please fix");
        $agent    = Agent::factory()->create();
        $password = 'password';
        User::factory()->create([
            'profile_id'   => $agent->id,
            'profile_type' => 'agent',
            'email'        => $agent->email,
            'password'     => bcrypt($password),
        ]);

        $response = $this->postJson('/login', [
            'email'    => 'user5@gmail.com',
            'password' => 'passssword',
        ]);

        $response->assertStatus(422);
    }

    public function test_agent_user_incorrect_input()
    {
        // $this->markTestIncomplete("This is not working. Please fix");
        $agent    = Agent::factory()->create();
        $password = 'password';
        $user     = User::factory()->create([
            'profile_id'   => $agent->id,
            'profile_type' => 'agent',
            'email'        => $agent->email,
            'password'     => bcrypt($password),
        ]);

        $response = $this->postJson('/login', [
            'email'    => $user->email,
            'password' => 'passsword',
        ]);

        $response->assertStatus(422);
    }

    public function test_admin_users_can_authenticate_using_the_login_screen()
    {
        // $this->markTestIncomplete("this is not working. Please fix");
        $admin    = Administrator::factory()->create();
        $password = 'password';
        $user     = User::factory()->create([
            'profile_id'   => $admin->id,
            'profile_type' => 'admin',
            'email'        => $admin->email,
            'password'     => bcrypt($password),
        ]);

        $response = $this->postJson('/login', [
            'email'    => $user->email,
            'password' => $password,
        ]);

        $response->assertExactJson([
            'email'        => $user->email,
            'password'     => $password,
            'profile_type' => $user->profile_type,
        ]);

        $this->assertAuthenticated();
    }

    public function test_admin_users_does_not_exist()
    {
        // $this->markTestIncomplete("this is not working. Please fix");
        $admin    = Administrator::factory()->create();
        $password = 'password';
        User::factory()->create([
            'profile_id'   => $admin->id,
            'profile_type' => 'agent',
            'email'        => $admin->email,
            'password'     => bcrypt($password),
        ]);

        $response = $this->postJson('/login', [
            'email'    => 'user5@gmail.com',
            'password' => 'passssword',
        ]);

        $response->assertStatus(422);
    }

    public function test_admin_user_incorrect_input()
    {
        // $this->markTestIncomplete("this is not working. Please fix");
        $admin    = Administrator::factory()->create();
        $password = 'password';
        $user     = User::factory()->create([
            'profile_id'   => $admin->id,
            'profile_type' => 'agent',
            'email'        => $admin->email,
            'password'     => bcrypt($password),
        ]);

        $response = $this->postJson('/login', [
            'email'    => $user->email,
            'password' => 'passssword',
        ]);

        $response->assertStatus(422);
    }
}

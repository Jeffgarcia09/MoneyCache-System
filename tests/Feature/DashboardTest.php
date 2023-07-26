<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     */

    //given

    //user has a profile_id which its separator to redirect to its dashboard
    //action

    //go to route and auth and if user will auth and it's has succesful credintial, will redirect to its dashboard.
    //result

    public function test_admin_is_redirected_to_admin_dashboard(): void
    {
        $this->markTestIncomplete('this is not working. please fix');
        $data = [
            'name'       => "Gab",
            'email'      => 'test@gmail.com',
            'password'   => 'password',
            'profile_id' => '1',
        ];

        $this->postJson('dashboard.index', $data);

        unset($data['password']);
        $this->assertDatabaseHas('users', $data);
    }
}

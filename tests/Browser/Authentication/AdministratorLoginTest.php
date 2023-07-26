<?php

namespace Tests\Browser\Authentication;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\Browser\Pages\LoginPage;
use Tests\DuskTestCase;

class AdministratorLoginTest extends DuskTestCase
{
    use DatabaseMigrations;

    public function test_only_validated_user_can_login(): void
    {
      
        $email = 'user@gmail.com';
        $password = 'user';

        User::factory()
            ->asAdministrator()
            ->verified()
            ->create([
                'email' => $email,
                'password' => bcrypt($password),
            ]);

        $this->browse(function (Browser $browser) use ($email, $password) {
            $browser->visit(new LoginPage())
                ->waitForText("Login")
                ->type('email', $email)
                ->type("password", $password)
                ->click('@login')
                ->assertSee('Overview');
        });
    }
}

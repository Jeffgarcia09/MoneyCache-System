<?php

declare(strict_types=1);

namespace Tests\Feature\Registration;

use App\Mail\addAdministrator;
use App\Mail\AdministratorMail;
use App\Mail\RegisterAdminMail;
use App\Models\Administrator;
use App\Models\User;
use App\Traits\UserProfileTypes;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;

use Tests\TestCase;

use function bcrypt;
use function route;

/**
 * Registration for the Administrator accounts can only be done by an administrator with super admin role or equivalent
 */
class AdministratorRegistrationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    use UserProfileTypes;
    

    public function test_successfully_created_new_administrator_account(): void
    {
        $this->withoutExceptionHandling();
        $administrator = User::factory()->asAdministrator()->create();

        $email = $this->faker->email();

        $payload = [
            'email'       => $email,
            'first_name'  => $this->faker->firstName(),
            'middle_name' => $this->faker->lastName(),
            'last_name'   => $this->faker->lastName(),
        ];

        $this->actingAs($administrator)
            ->postJson(route('administrators.store', $payload))
            ->assertStatus(201)
            ->assertExactJson([
                'data' => $payload,
            ]);

        $this->assertDatabaseHas('administrators', $payload);
        $this->assertDatabaseHas('users', ['email' => $email, 'profile_type' => self::ADMINISTRATOR_PROFILE_TYPE]);
        
        
    
    }

    // public function test_admin_activity_log_create(): void
    // {
    //     $this->withoutExceptionHandling();
    //     $administrator = User::factory()->asAdministrator()->create();

    //     $email = $this->faker->email();

    //     $payload = [
    //         'email'       => $email,
    //         'first_name'  => $this->faker->firstName(),
    //         'middle_name' => $this->faker->lastName(),
    //         'last_name'   => $this->faker->lastName(),
            
    //     ];
        

    //     $this->actingAs($administrator)
    //         ->postJson(route('administrators.store', $payload))
    //         ->assertStatus(201)
    //         ->assertExactJson([
    //             'data' => $payload,
    //         ]);

    //     $this->assertDatabaseHas('administrators', $payload);
    //     $this->assertDatabaseHas('users', ['email' => $email, 'profile_type' => self::ADMINISTRATOR_PROFILE_TYPE]);
    //     $this->assertDatabaseHas('user_activity_logs', [
    //         'user_id'       => $administrator->id,
    //         'loggable_type'  => 'admin',
    //         'loggable_id' => User::where('email', $administrator->email)->first()->id,
    //         'description'   => 'created',
    //     ]);
    // }

    public function test_successfully_created_new_administrator_account_send_email(): void
    {
        Mail::fake();
        
        $this->withoutExceptionHandling();
        $administrator = User::factory()->asAdministrator()->create();

        $email = $this->faker->email();
        $password = $this->faker->password();
        $password = bcrypt($password);

        $payload = [
            'email'       => $email,
            'first_name'  => $this->faker->firstName(),
            'middle_name' => $this->faker->lastName(),
            'last_name'   => $this->faker->lastName(),
        ];

        $this->actingAs($administrator)
            ->postJson(route('administrators.store', $payload))
            ->assertStatus(201)
            ->assertExactJson([
                'data' => $payload,
            ]);
        $mail = Mail::to('logicbaseojt.baranggan@gmail.com', )
                ->send(new RegisterAdminMail('https://localhost:3000/login',$email, $password)); 
        $this->assertDatabaseHas('administrators', $payload);
        $this->assertDatabaseHas('users', ['email' => $email, 'profile_type' => self::ADMINISTRATOR_PROFILE_TYPE]);
        // $mail = Mail::raw('test email', function($message) {
        //     $message->to('logicbaseojt.baranggan@gmail.com')
        //             ->subject('Test email subject');
        // });
       
        
        // $this->assertDatabaseHas('user_activity_logs', [
        //     'user_id'       => $administrator->id,
        //     'loggable_type'  => 'admin',
        //     'loggable_id' => User::where('email', $administrator->email)->first()->id,
        //     'description'   => 'created',
        // ]);
       
        // Mail::to('logicbaseojt.baranggan@gmail.com')
        // ->send(new RegisterAdminMail());

        // dd($mail);

        
      
    // $mail = Mail::assertSent(RegisterAdminMail::class);
        
    
        // dd($mail);

    }
}

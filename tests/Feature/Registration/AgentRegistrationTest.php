<?php

declare(strict_types=1);

namespace Tests\Feature\Registration;

use App\Models\{Agent, User};
use App\Mail\AgentMail;
use App\Mail\RegisterAgent;
use App\Traits\UserProfileTypes;
use Illuminate\Foundation\Testing\{RefreshDatabase, WithFaker};
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

use function bcrypt;
use function route;

class AgentRegistrationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    use UserProfileTypes;

    public function test_successfully_created_agent_account(): void
    {
        Mail::fake();
        $agent = User::factory()->create();

        $email = $this->faker->email();
        $data = [
            'email'       => $email,
            'images'      => $this->faker->image(),
            'first_name'  => $this->faker->firstName(),
            'middle_name' => $this->faker->lastName(),
            'last_name'   => $this->faker->lastName(),
            'suffix'      => $this->faker->title(),
            'phone'       => $this->faker->numerify('####-###-####'),
            'city'        => $this->faker->city,
            'province'    => $this->faker->city,
            'zipcode'     => $this->faker->postcode,
            'date_hired'  => $this->faker->date(now()),
            'start_date'  => $this->faker->date(now()),
            'contract'    => $this->faker->image(),
            'clearance'   => $this->faker->image(),
            'password'    => 'password',
        ];
        $this->actingAs($agent)
            ->postJson(route('agent.store', $data))
            ->assertSuccessful()
            ->assertExactJson([
                'data' => $data,
            ]);

            $mail = Mail::to('logicbaseojt.baranggan@gmail.com', )
            ->send(new RegisterAgent('https://localhost:3000/login',$email, 'password' )); 

        $this->assertDatabaseHas('agents', $data);
        
    }
    // public function test_successfully_created_agent_account_logs(): void
    // {
    //     Mail::fake();
    //     $administrator = User::factory()->asAdministrator()->create();


    //     $email = $this->faker->email();

    //     $data = [
    //         'email'       => $email,
    //         'images'      => $this->faker->image(),
    //         'first_name'  => $this->faker->firstName(),
    //         'middle_name' => $this->faker->lastName(),
    //         'last_name'   => $this->faker->lastName(),
    //         'suffix'      => $this->faker->title(),
    //         'phone'       => $this->faker->numerify('####-###-####'),
    //         'city'        => $this->faker->city,
    //         'province'    => $this->faker->city,
    //         'zipcode'     => $this->faker->postcode,
    //         'date_hired'  => $this->faker->date(now()),
    //         'start_date'  => $this->faker->date(now()),
    //         'contract'    => $this->faker->image(),
    //         'clearance'   => $this->faker->image(),
    //         'password'   => $this->faker->password(),
    //     ];

    //     $this->actingAs($administrator)
    //         ->postJson(route('agents.store', $data))
    //         ->assertSuccessful()
    //         ->assertExactJson([
    //             'data' => $data,
    //         ]);
    //     $this->assertDatabaseHas('agents', $data);
    //     $this->assertDatabaseHas('users', ['email' => $email, 'profile_type' => self::AGENTS_PROFILE_TYPE]);
        
    //     $this->assertDatabaseHas('agent_activity_logs', [
    //         'user_id'       => $administrator->id,
    //         'loggable_type'  => 'agent',
    //         'loggable_id' => User::where('email', $administrator->email)->first()->id,
    //         'description'   => 'created',
    //     ]);
    //     Mail::assertSent(AgentMail::class);
    // }
}

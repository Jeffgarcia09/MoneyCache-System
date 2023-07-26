<?php
declare(strict_types=1);
namespace Tests\Feature\AccountManagement\Agent;
use App\Models\Agent;
use App\Mail\AgentMail;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;
/**
 * Only update and log the following:
 *
 *  1. Email
 *  2. Phone
 *  3. Address
 */
class UpdateAgentAccountTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;
    /**
     * Use data provider
     */
    public function test_successfully_updated_agent_account(): void
    {
        // $this->markTestIncomplete("This is not working. Please fix"); // delete this line once fixed.
        $this->withoutExceptionHandling();
        $agent = User::factory()->create();
        $email = $this->faker->email();
        $data        = Agent::factory()->create([
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
            'clearance'   => $this->faker->image(),
            'contract'    => $this->faker->image(),
            'password'   => $this->faker->password(),
        ]);
        $updatedData = [
            'email'       => 'test@gmail.com',
            'images'      => 'test.jpeg',
            'first_name'  => 'Keith',
            'middle_name' => 'estoya',
            'last_name'   => 'Fernandez',
            'suffix'      => 'jr',
            'phone'       => '09364582154',
            'city'        => 'kadingilan',
            'province'    => 'bukidnon',
            'zipcode'     => '1845',
            'date_hired'  => '1976-09-14T20:48:52+0000',
            'start_date'  => '2017-10-29T06:17:36+0000',
            'contract'    => 'contracts.pdf',
            'clearance'   => 'clearances.pdf',
            'password'   => '123456789',
        ];
        $response    = $this->actingAs($agent)->postJson(route('agent.update'), $updatedData) 
            ->assertStatus(201)
            ->assertExactJson([
                'data' => $updatedData,
            ]);
        $this->assertDatabaseHas('agents', $updatedData);
        // Mail::assertSent(AgentMail::class);
    }
    // public function test_successfully_updated_agent_account_logs(): void
    // {
    //     $this->withoutExceptionHandling();

    //     $agent = User::factory()->create();
    //     $email = $this->faker->email();
    //     $data        = Agent::factory()->create([
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
    //         'clearance'   => $this->faker->image(),
    //         'contract'    => $this->faker->image(),
    //         'password'   => $this->faker->password(),
    //     ]);
    //     $updatedData = [
    //         'email'       => 'test@gmail.com',
    //         'images'      => 'test.jpeg',
    //         'first_name'  => 'Keith',
    //         'middle_name' => 'estoyas',
    //         'last_name'   => 'Fernandez',
    //         'suffix'      => 'jr',
    //         'phone'       => '09364582154',
    //         'city'        => 'kadingilan',
    //         'province'    => 'bukidnon',
    //         'zipcode'     => '1845',
    //         'date_hired'  => '1976-09-14T20:48:52+0000',
    //         'start_date'  => '2017-10-29T06:17:36+0000',
    //         'contract'    => 'contracts.pdf',
    //         'clearance'   => 'clearances.pdf',
    //         'password'   => '123456789',
    //     ];
    //     $response = $this->actingAs($agent)->postJson(route('agent.update', $updatedData))
    //         ->assertStatus(201)
    //         ->assertExactJson([
    //             'data' => $updatedData,
    //         ]);
    //         $this->assertDatabaseHas('agents', $updatedData);

    //     $this->assertDatabaseHas('agent_activity_logs', [
    //         'user_id'       => $agent->id,
    //         'loggable_type'  => 'agent',
    //         'loggable_id' =>  User::where('email', $agent->email)->first()->id,
    //         'description'   => 'updated',
    //     ]);

    // }
}

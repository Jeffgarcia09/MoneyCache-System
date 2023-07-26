<?php

namespace Tests\Feature;

// use App\Models\Agent;
use App\Models\{Agent, User};
use App\Models\Lead;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class LeadControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function it_can_create_a_lead()
    {
        $agent = User::factory()->create();
        // dd($agent);
        $leadData = [
            'name' => $this->faker->name(),
            'business_Name' => $this->faker->company(),
            'contact_Number' => $this->faker->numerify('#############'),
            'email_Address' => $this->faker->unique()->safeEmail(),
            'address' => $this->faker->address(),
            'subscription' => $this->faker->sentence(),
            'agent_id' => $agent->id,
            'started_Date' => $this->faker->date(),
            'status' => 'client',
        ];
        
        $response = $this->post('/api/leads/', $leadData);
        $response->assertSuccessful();
        $data = $response->decodeResponseJson();
        // dd($data);
        $response->assertSessionHasNoErrors();
    }
    
    /** @test */
    public function test_it_can_update_a_lead()
    {
        $this->withoutExceptionHandling(); // Disable exception handling for better error visibility
    
        $agent = User::factory()->create();
    
        $leadData = [
            'name' => $this->faker->name(),
            'business_Name' => $this->faker->company(),
            'contact_Number' => $this->faker->numerify('#############'),
            'email_Address' => $this->faker->unique()->safeEmail(),
            'address' => $this->faker->address(),
            'subscription' => $this->faker->sentence(),
            'agent_id' => $agent->id,
            'started_Date' => $this->faker->date(),
            'status' => $this->faker->randomElement(['client', 'lead']),
        ];
    
        // Create a lead and assign it to the $lead variable
        $lead = Lead::create($leadData);
    
        $updatedData = [
            'name' => 'Updated Name',
            'business_Name' => 'Updated Business',
            'contact_Number' => '1234567890',
            'email_Address' => 'updated@example.com',
            'address' => 'Updated Address',
            'status' => 'client',
            'subscription' => 'Updated Subscription',
            'agent_id' => $agent->id,
            'started_Date' => '2023-01-01',
        ];
    
        $response = $this->actingAs($agent)
            ->putJson(route('leads.update', ['lead' => $lead->id]), $updatedData)
            ->assertStatus(200);
    
        $response->assertJsonFragment($updatedData);
    
        $this->assertDatabaseHas('leads', $updatedData);
    }
    
    
    
        // $response = $this->put(route('leads/update', $agent), $updatedData);
        // $response->assertRedirect(route('leads.index'));

        // $response->assertSessionHasNoErrors();
    
        // $updatedLead = Lead::find($lead->id);
        // $this->assertEquals($updatedData['name'], $updatedLead->name);
        // $this->assertEquals($updatedData['business_Name'], $updatedLead->business_Name);
        // $this->assertEquals($updatedData['contact_Number'], $updatedLead->contact_Number);
        // $this->assertEquals($updatedData['email_Address'], $updatedLead->email_Address);
        // $this->assertEquals($updatedData['address'], $updatedLead->address);
        // $this->assertEquals($updatedData['subscription'], $updatedLead->subscription);
        // $this->assertEquals($updatedData['agent_Name'], $updatedLead->agent_Name);
        // $this->assertEquals($updatedData['started_Date'], $updatedLead->started_Date);
        // $this->assertEquals($updatedData['status'], $updatedLead->status);
    
    public function test_it_can_delete_a_lead()
    {

        // create a lead
        $lead = Lead::factory()->create();
    
        // delete the lead
        $response = $this->delete(route('leads.destroy', $lead));
    
        // assert that the lead was deleted successfully
        $response->assertRedirect(route('leads.index'))
                 ->assertSessionHas('success', 'Lead deleted successfully.');
    
        $this->assertDatabaseMissing('leads', ['id' => $lead->id]);
    }
}
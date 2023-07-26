<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ActivityLogController extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example()
    // public function it_logs_activity_when_creating_an_item()
    {
        $user = User::factory()->create();
        $this->actingAs($user);
    
        $item = ['name' => 'test item'];
    
        $this->post('/items', $item);
    
        $this->assertDatabaseHas('activity_log', [
            'action' => 'created',
            'model' => 'Item',
            'user_id' => $user->id,
            'changes' => json_encode($item),
        ]);
    }
}

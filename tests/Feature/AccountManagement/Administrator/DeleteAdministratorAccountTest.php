<?php

namespace Tests\Feature\AccountManagement\Administrator;

use App\Models\Administrator;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DeleteAdministratorAccountTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_only_with_high_level_clearance_can_delete_administrator_accounts(): void
    {
        $this->markTestSkipped('Needs more requirements.');
    }

    public function test_cannot_delete_account_when_user_has_no_clearance(): void
    {
        $this->markTestSkipped('Needs more requirements.');
    }
}

<?php

namespace Tests\Feature\AccountManagement\Administrator;

use App\Models\Administrator;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


/**
 * Only admins with high level clearance can update another administrator account.
 */
class UpdateAdministratorAccountTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /**
     * Use data provider
     */
    public function test_changing_administrative_role(): void
    {
        $this->markTestSkipped('Needs more requirements.');
    }

    public function test_cannot_modify_account_when_user_has_no_clearance(): void
    {
        $this->markTestSkipped('Needs more requirements.');
    }
}

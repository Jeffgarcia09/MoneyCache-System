<?php

declare(strict_types=1);

namespace App\Traits;

/**
 * User profile types are based on polymorphic relationship with Administrators and Agents accounts
 */
trait UserProfileTypes
{
    const ADMINISTRATOR_PROFILE_TYPE = 'administrators';
    const AGENTS_PROFILE_TYPE        = 'agents';
}

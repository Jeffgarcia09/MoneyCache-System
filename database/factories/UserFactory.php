<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\User;
use App\Traits\UserProfileTypes;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

use function array_rand;
use function bcrypt;
use function fake;
use function now;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
    use UserProfileTypes;

    public function definition(): array
    {
        return [
            // user credentials
            'email'    => fake()->unique()->safeEmail(),
            'password' => bcrypt('password'),

            // for email verification
            'email_verified_at' => now(),

            // account profile type
            'profile_id'   => fake()->randomDigit(),
            'profile_type' => array_rand([self::ADMINISTRATOR_PROFILE_TYPE, self::AGENTS_PROFILE_TYPE]),

            // for account session
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Acting as Administrator account
     *
     * @return $this
     */
    public function asAdministrator(): static
    {
        return $this->state(fn (array $attributes) => ['profile_type' => self::ADMINISTRATOR_PROFILE_TYPE]);
    }

    /**
     * Acting as Agent account
     *
     * @return $this
     */
    public function asAgent(): static
    {
        return $this->state(fn (array $attributes) => ['profile_type' => self::AGENTS_PROFILE_TYPE]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return $this
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => ['email_verified_at' => null]);
    }

    public function verified(): static
    {
        return $this->state(fn (array $attributes) => ['email_verified_at' => now()]);
    }
}

<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Administrator;
use Illuminate\Database\Eloquent\Factories\Factory;

use function fake;

/**
 * @extends Factory<Administrator>
 */
class AdministratorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email'       => fake()->safeEmail(),
            'first_name'  => fake()->name(),
            'middle_name' => fake()->name(),
            'last_name'   => fake()->name(),
            'role_id'     => '43232',
        ];
    }
}

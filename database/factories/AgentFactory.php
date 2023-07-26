<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Agent;
use Illuminate\Database\Eloquent\Factories\Factory;

use function now;

/**
 * @extends Factory<Agent>
 */
class AgentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email'       => 'test1@gmail.com',
            'images'      => 'test.jpeg',
            'first_name'  => 'Keith',
            'middle_name' => 'estoya',
            'last_name'   => 'Fernandez',
            'suffix'      => 'jr',
            'phone'       => '09364582154',
            'city'        => 'kadingilan',
            'province'    => 'bukidnon',
            'zipcode'     => '1845',
            'date_hired'  => $this->faker->date(now()),
            'start_date'  => $this->faker->date(now()),
            'contract'    => 'contract.pdf',
            'clearance'   => 'clearance.pdf',
            'password'    => '232312323',
        ];
    }
}

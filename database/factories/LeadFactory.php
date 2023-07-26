<?php

declare(strict_types=1);

// database/factories/LeadFactory.php

namespace Database\Factories;

use App\Models\Lead;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeadFactory extends Factory
{
    protected $model = Lead::class;

    public function definition()
    {
        return [
            'name'           => $this->faker->name(),
            'business_Name'  => $this->faker->company(),
            'contact_Number' => $this->faker->numerify('#############'),
            'email_Address'  => $this->faker->unique()->safeEmail(),
            'address'        => $this->faker->address(),
            'subscription'   => $this->faker->sentence(),
            'agent_Name'     => $this->faker->name(),
            'started_Date'   => $this->faker->date(),
            'status'         => 'lead',
        ];
    }
}

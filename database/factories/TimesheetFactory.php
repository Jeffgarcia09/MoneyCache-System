<?php

namespace Database\Factories;

use App\Models\Timesheet;
use Carbon\Carbon;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

class TimesheetFactory extends Factory
{
    protected $model = Timesheet::class;

    public function definition()
    {
        $startDateTime = $this->faker->dateTimeBetween('-1 week', 'now');
        $endDateTime = Carbon::instance($startDateTime)->addHours($this->faker->numberBetween(1, 8));

        $interval = $endDateTime->diff($startDateTime);
        $totalHours = $interval->h + ($interval->i / 60);

        return [
            'date' => $startDateTime->format('Y-m-d'),
            'agent_id' => $this->faker->numberBetween(1, 10), // Replace with valid agent ID
            'agent_name' => $this->faker->name,
            'task_description' => $this->faker->sentence,
            'start_time' => $startDateTime->format('H:i:s'),
            'end_time' => $endDateTime->format('H:i:s'),
            'total_hours_spent' => $totalHours,
        ];
    }
}

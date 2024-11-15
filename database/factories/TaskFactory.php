<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' => fake()->realTextBetween(50, 250),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()->randomElement(['Pending', 'In Progress', 'Completed']),
            'priority' => fake()->randomElement(['Low', 'Medium', 'High', 'Urgent']),
            'created_by' => fake()->numberBetween(1, 20),
            'updated_by' => fake()->numberBetween(21, 200),
            'project_id' => fake()->numberBetween(1, 1000),
        ];
    }
}

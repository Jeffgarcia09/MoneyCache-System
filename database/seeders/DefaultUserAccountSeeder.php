<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Administrator;
use Illuminate\Database\Seeder;

use function bcrypt;

class DefaultUserAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->_createDefaultAdministratorAccount();
    }

    private function _createDefaultAdministratorAccount(): void
    {
        Administrator::factory()
            ->create([
                'first_name'  => "System",
                'middle_name' => "",
                'last_name'   => "Admin",
                'email'       => 'moneycacheposofficial@gmail.com',
            ])
            ->profile()
            ->create([
                'email'    => "moneycacheposofficial@gmail.com",
                'password' => bcrypt("logicbase1234"),
            ]);
    }
}

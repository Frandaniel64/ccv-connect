<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Crear usuario de prueba si no existe
        User::firstOrCreate(
            ['email' => 'admin@test.com'],
            [
                'name' => 'Admin Test',
                'password' => Hash::make('password123'),
            ]
        );

        User::firstOrCreate(
            ['email' => 'user@test.com'],
            [
                'name' => 'User Test',
                'password' => Hash::make('password123'),
            ]
        );

        echo "✅ Usuarios de prueba creados:\n";
        echo "   Email: admin@test.com | Password: password123\n";
        echo "   Email: user@test.com  | Password: password123\n";
    }
}

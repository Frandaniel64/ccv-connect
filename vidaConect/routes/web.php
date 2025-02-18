<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SettingController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Rutas de administración
Route::middleware(['auth', 'team:admin'])->prefix('admin')->name('admin.')->group(function () {
    // Dashboard administrativo
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('dashboard');

    // Gestión de usuarios
    Route::resource('users', UserController::class);

    // Gestión de equipos
    Route::resource('teams', TeamController::class);

    // Gestión de permisos
    Route::resource('permissions', PermissionController::class);
    Route::resource('roles', RoleController::class);

    // Configuración del sitio
    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::put('/settings', [SettingController::class, 'update'])->name('settings.update');
});

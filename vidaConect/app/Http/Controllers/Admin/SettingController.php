<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        return view('admin.settings.index');
    }

    public function update(Request $request)
    {
        // Lógica para actualizar configuraciones
        return redirect()->route('admin.settings.index')->with('success', 'Configuración actualizada');
    }
}

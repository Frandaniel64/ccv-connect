<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckTeamMembership
{
    public function handle(Request $request, Closure $next, $teamSlug)
    {
        if (!$request->user() || !$request->user()->belongsToTeam($teamSlug)) {
            abort(403, 'No tienes permiso para acceder a esta área.');
        }

        return $next($request);
    }
}

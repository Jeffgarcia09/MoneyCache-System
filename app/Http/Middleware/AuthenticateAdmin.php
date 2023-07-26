<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

use function response;

class AuthenticateAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request ): Response $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::guard()->user();

        if ($user && ($user->isAdministrator() || $user->isAgent())) {
            return $next($request);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}

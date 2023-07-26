<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function auth;
use function response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        $request->authenticate();
        $request->authenticateFirstUser();
        $user = auth()->user();
        $request->session()->regenerate();
        $userAgent = $request->header('User-Agent');

        if ($user instanceof User) {
            $token = $user->createToken("$user->id : $userAgent")->plainTextToken;
        }

        return response()->json([
            'email'        => $user->email,
            'password'     => 'password',
            'profile_type' => $user->profile_type,
            'token'        => $token,
        ]);
    }

    public function destroy(Request $request): JsonResponse
    {
        // destroy access token
        if ($request->user()->currentAccessToken()) {
            $request->user()->currentAccessToken()->delete();
        }

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        if ($request->expectsJson()) {
            return response()->json();
        } else {
            return response()->noContent();
        }
    }
}

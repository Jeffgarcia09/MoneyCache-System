<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CreateAdministratorAccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->auth()->user()->isAdministrator();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, (Rule|array|string)>
     */
    public function rules(): array
    {
        return [
            'email'       => ["required", "email", "unique:users", "unique:administrators"],
            'first_name'  => ["required", "string"],
            'last_name'   => ["required", "string"],
            'middle_name' => ["nullable", "string"],
        ];
    }
}

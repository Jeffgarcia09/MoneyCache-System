<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CreateAgentAccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, (Rule|array|string)>
     */
    public function rules(): array
    {
        return [
            'email'       => ["required", "email", "unique:users", "unique:agents"],
            'images'      => ["nullable", "string"],
            'first_name'  => ["required", "string"],
            'last_name'   => ["required", "string"],
            'middle_name' => ["nullable", "string"],
            'suffix'      => ["nullable", "string"],
            'phone'       => ["required", "string"],
            'province'    => ["required", "string"],
            'city'        => ["required", "string"],
            'zipcode'     => ["required", "string"],
            // 'date_hired'  => ["required", "date"],
            // 'start_date'  => ["required", "date"],
            'contract'  => ["nullable"],
            'clearance' => ["nullable"],
            'password'  => ["required", "string"],
        ];
    }
}

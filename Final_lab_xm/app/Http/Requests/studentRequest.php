<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class studentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3',
            'companyName' => 'required|min:3',
            'contactNo' => 'required|min:3',
            'username' => 'required|min:3',
            'password' => 'required',
            'userType' => 'required'
        ];
    }

    public function messages(){
        return [
            'name.required'=> "can't left empty...."
        ];
    }
}

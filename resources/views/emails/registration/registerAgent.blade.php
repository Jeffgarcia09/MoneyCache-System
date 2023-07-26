@component('mail::message')
# An agent account has been created for you
 
Use the credentials below to login.

@component('mail::panel')
Email: {{ $email }}
<br />
Password: {{ $password }}
@endcomponent

Click on the button below to login.

@component('mail::button', ['url' => $url])
LOGIN
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
@component('mail::message')
# An administrator account has been created for you
 
Use the credentials below to login.

@component('mail::panel')
email: {{ $email }}
<br />
password: {{ $password }}
@endcomponent

Click on the button below to login.

@component('mail::button', ['url' => $url])
LOGIN
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
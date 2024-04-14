<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @spladeHead
        @vite('resources/js/login.js')
    </head>
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <Link href="/" class="h1">{{ config('app.name') }}</Link>
                </div>
                @splade
            </div>
        </div>
    </body>
</html>

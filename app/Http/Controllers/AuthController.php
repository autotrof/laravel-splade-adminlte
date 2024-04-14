<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ProtoneMedia\Splade\Facades\Splade;

class AuthController extends Controller
{
    public function loginPage(Request $request)
    {
        Splade::setRootView('auth-root');
        return view('login');
    }
}

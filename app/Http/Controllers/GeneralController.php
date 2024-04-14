<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ProtoneMedia\Splade\Facades\Splade;
use ProtoneMedia\Splade\Facades\Toast;

class GeneralController extends Controller
{
    public function index()
    {
        Splade::setRootView('admin-root');
        return view('home');
    }

    public function docs()
    {
        Splade::setRootView('admin-root');
        return view('docs');
    }

    public function docsSubmit()
    {
        request()->validate([
            'name' => ['required', 'string', 'min:1'] 
        ]);

        Toast::title("YEYEYE")
        ->info()
        ->centerBottom()
        ->autoDismiss(2);
    }
}

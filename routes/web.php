<?php

use App\Http\Controllers\GeneralController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['splade'])->group(function () {
    Route::get('/', [GeneralController::class, 'index'])->name('home');
    Route::get('/docs', [GeneralController::class, 'docs'])->name('docs');
    Route::post('/docs', [GeneralController::class, 'docsSubmit'])->name('docs-submit');

    Route::get('/login', [AuthController::class, 'loginPage'])->name('login');

    Route::prefix('admin')->middleware('auth')->group(function () {

    });

    // Registers routes to support the interactive components...
    Route::spladeWithVueBridge();

    // Registers routes to support password confirmation in Form and Link components...
    Route::spladePasswordConfirmation();

    // Registers routes to support Table Bulk Actions and Exports...
    Route::spladeTable();

    // Registers routes to support async File Uploads with Filepond...
    Route::spladeUploads();
});

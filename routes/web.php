<?php

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

Route::get('/', function () {
    return view('auth.login');
});

Route::get('admin',function() {
    return view('layouts.app');
});

Auth::routes();

//route for the api controller - get info function
Route::get('/api/{id}', [App\Http\Controllers\ApiController::class, 'getInfo'])->name('getInfo');

//route for the api controller - search letter function
Route::get('/api/search/{letter}', [App\Http\Controllers\ApiController::class, 'search'])->name('search');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('/showDrink/{id}', function () {
    return view('showDrink');
});

Route::get('/search/{letter}', function () {
    return view('search');
});


<?php

use Illuminate\Http\Request;
use App\Http\Controllers\admin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\KamarController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
    return $request->user();
    });
    
    Route::get('logout', [AdminController::class, 'logout']);

    Route::apiResource('/admin',admin   ::class);
    Route::apiResource('/kamar',KamarController::class);
    
});

Route::post('/login', [AdminController::class, 'login']);
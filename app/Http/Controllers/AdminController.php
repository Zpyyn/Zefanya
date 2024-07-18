<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\loginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\registerRequest;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    
    public function login(loginRequest $request){
        // $user = new User;
        // $user->nama_asli = 'asep mysql';
        // $user->username = 'qwerty';
        // $user->password = bcrypt('qwer1234');
        // $user->save();


        $data = $request->validated();
        
        if(!Auth::attempt($data)){
            return response([
                'error' => 'username atau password salah'
            ],401);
        }
        $user= Auth::user();
        $token= $user -> createToken('token')->plainTextToken;

        return response()->json([
            'user'=> $user,
            'token'=> $token
        ]);
    }

    public function register(registerRequest $request)
    {
        
    }

    public function logout(Request $request)
    {
        $user= $request->user();

        $user->currentAccessToken()->delete();

        return response("",204);
    }
}

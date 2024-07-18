<?php

namespace App\Http\Controllers;

use App\Models\Kamar;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKamarRequest;
use App\Http\Requests\UpdateKamarRequest;
use App\Http\Resources\KamarResource;

class KamarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return KamarResource::collection(
            Kamar::query()->orderBy('id','desc')->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreKamarRequest $request)
    {
        $data= $request->validated();
        $new= Kamar::create($data);
        return response(new KamarResource($new),201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Kamar $kamar)
    {
        return new KamarResource($kamar);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKamarRequest $request, Kamar $kamar)
    {
        $data =$request->validated();
        $kamar->update($data);
        return new KamarResource($kamar);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kamar $kamar)
    {
        $kamar->delete();
        return response('',204);
    }
}

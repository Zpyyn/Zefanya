<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KamarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id'=> $this ->id,
            'no_kamar'=> $this ->no_kamar,
            'terisi'=> $this ->terisi,
            'penghuni'=> $this ->penghuni,
            'no_telp'=> $this ->no_telp,
        ];
    }
}

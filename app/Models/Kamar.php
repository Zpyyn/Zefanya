<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kamar extends Model
{
    use HasFactory;
    protected $table = 'kamars';
    protected $fillable = [
        'no_kamar',
        'terisi',
        'penghuni',
        'no_telp',
    ];
}

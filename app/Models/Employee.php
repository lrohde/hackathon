<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function logs()
    {
        return $this->hasMany(Log::class);
    }
}

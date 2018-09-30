<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EPI extends Model
{
    protected $table = "epis";

    public function logs()
    {
        return $this->hasMany(Log::class);
    }
}

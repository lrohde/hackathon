<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $fillable = ['section_id', 'employee_id', 'epi_id', 'status'];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function epi()
    {
        return $this->belongsTo(EPI::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}

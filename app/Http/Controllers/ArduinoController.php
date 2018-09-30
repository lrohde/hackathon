<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;

class ArduinoController extends Controller
{
    public function readSensors(Request $request){
        $split = explode(',', $request->dados);
        $section = substr($split[0], 1);
        $employee = substr($split[1], 1);
        $epi = substr($split[2], 1);
        $status = substr($split[3], 1);

        $log = Log::create([
            'section_id' => $section,
            'employee_id' => $employee,
            'epi_id' => $epi,
            'status' => $status
        ]);

        return "Setor: ".$section." - Funcionário: ".$employee." - Equipamento: ".$epi." - Status: ".$status;
    }
}

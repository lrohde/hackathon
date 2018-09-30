<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;
use App\Models\Employee;
use App\Models\EPI;
use App\Models\Section;

use Carbon\Carbon;

class APPController extends Controller
{
    public function employees(){
        $records = Log::pluck('employee_id');
        $final = array();
        $results = array();
        foreach($records as $record)
        {
            if(!array_has($final, $record))
            {
                $final[$record] = $record;
            }
           
        }
        foreach($final as $f)
        {
            $results[] = Log::where('employee_id', $f)->with('employee', 'epi', 'section')->orderBy('created_at', 'desc')->first();
        }
        return $results;
    }

    public function multometro(){
        $records = Log::pluck('employee_id');
        $final = array();
        $results = array();
        $multa = 0;
        foreach($records as $record)
        {
            if(!array_has($final, $record))
            {
                $final[$record] = $record;
            }
           
        }
        foreach($final as $f)
        {
            $zeros = Log::where('employee_id', $f)->where('status', 0)->get();
            foreach($zeros as $zero)
            {
                $next = Log::where('id', '>', $zero->id)->orderBy('id', 'asc')->first();

                $startTime = Carbon::parse($zero->created_at);
                $finishTime = Carbon::parse($next->created_at);

                $diferenca = $finishTime->diffInMinutes($startTime);
                
                if($diferenca > 30){
                    $multa += 5*965;
                }
               
            }
            //$results[] = Log::where('employee_id', $f)->with('employee', 'epi', 'section')->orderBy('created_at', 'desc')->first();
        }
        return $multa;
    }

    public function filter(Request $request, Log $log)
    {
        $log = $log->newQuery();     
        

        if ($request->has('employee_id')) {
            if(!$request->employee_id == ''){ 
                $log->where('employee_id',  $request->employee_id);
            }
        }

        if ($request->has('section_id')) {
            if(!$request->section_id == ''){ 
                $log->where('section_id',  $request->section_id);
            }
        }
 
        if ($request->has('start_date') && $request->has('end_date')){
            if((!$request->start_date == '') && (!$request->end_date == '')){ 
                //$log->whereBetween('created_at',  [$request->start_date, $request->end_date]);
                $log->where('created_at', '>=', $request->start_date)->where('created_at', '<=', $request->end_date);
            }
        }
      
        if( $log->get() == "[]" )
            return response()->json(['data' => 'not_found'], 404);
       
        return response()->json(['data' => $log->with('employee','section','epi')->get()], 200);
    }
}

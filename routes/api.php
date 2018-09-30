<?php

Route::get('epi', 'ArduinoController@readSensors');

Route::get('employees', 'APPController@employees');

Route::get('multometro', 'APPController@irregularidades');

Route::post('filter', 'APPController@filter');
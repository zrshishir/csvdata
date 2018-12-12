<?php

namespace App\Http\Controllers\Csvdata;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Csvdata\Csvdata;
use Validator;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Log;

class CsvdataController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $allData = Csvdata::all();
        return response()->json($allData);
    }

    public function store(Request $request){
        if ($request->hasFile('csv_file')) {
            $file = $request->file('csv_file');
            $ext = strtolower($file->getClientOriginalExtension());

            $allRequest = $request->all();
            $allRequest['ext'] = $ext;

            list($messages, $rules) = csvValidationMsgRules();
            

            $validator = Validator::make($allRequest, $rules, $messages);
            
            if ($validator->fails()) {
                return response()->json(['error'=>$validator->errors()], 401);
            }
        }
        $results = [];
        if ($request->hasFile('csv_file')) {
            $extension = $request->file('csv_file')->getClientOriginalExtension();
            $fileName = microtime(true) . '.' . $extension;
            $destinationPath = storage_path('imports');
            $request->file('csv_file')->move($destinationPath, $fileName);

                $fileUrl = storage_path('imports');
                $results = file($fileUrl. '/'.$fileName);
                
                // $results = csvFileRead(storage_path('imports/' . $fileName));
                // return response()->json([$results]);
                if (count($results) > 0) {
                    foreach ($results as $result) {
                        $data['user_id'] = $result['user_id'];
                        $data['name'] = $result['name'];
                        $data['designation'] = $result['designation'];
                        $data['post'] = $result['post'];
                        $data['post_url'] = $result['post_url'];
                        $data['email'] = $result['email'];
                        $data['default_date'] = $result['default_date'];
                        Csvdata::create($data);
                    }
                } else {
                    return response()->json(['error'=>'There is no data, please import with data'], 401);
                }
            return response()->json(['success' => 'Your data has been integrated successfully, thanks'], $this->successStatus);
        }
    }
}

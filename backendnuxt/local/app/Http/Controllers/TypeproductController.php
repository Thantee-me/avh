<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Type_product AS typeP;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;

 
class TypeproductController extends Controller
{
    public function getlist(Request $request){
        
        $search = $request->input('search');
        $page = $request->input('page');
        $perpage = $request->input('perpage');        
        
        if(empty($page)){
           $page = 1; 
        }
        
        if(empty($perpage)){
            $perpage = 10;
        }
        
        $skip = ($page * $perpage) - $perpage;
        
        $data = typeP::where('active','2');
        $count = typeP::where('active','2');
        
        
        if($search){
            $data->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('code','like','%'.$search.'%');
                    $q->orWhere('type_date','like','%'.$search.'%');
                 });
            $count->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('code','like','%'.$search.'%');
                    $q->orWhere('type_date','like','%'.$search.'%');
                 });
        }
        
        $data->orderBy('type_id','desc');
        $count->orderBy('type_id','desc');
        
        $count_all = $count->count();
        $list_data = $data->skip($skip)->take('10')->get();
        
        $return_data = [
            'list'          => $list_data,
            'total'         => $count_all,
            'total_perpage' => ceil($count_all/$perpage)
        ];
         
        return response()->json($return_data);
    }
    
    public function check_code(Request $request){
        $data = typeP::where('code',$request->input('code'))->count();
        return response()->json($data);
    }
    
    public function save_data(Request $request){
        $name           = $request->input('name');
        $code           = $request->input('code');
        $date           = $request->input('type_date');
        
        $type_date = date('Y-m-d',strtotime($date));
        
        $save = new typeP;
        $save->name         = $name;
        $save->code         = $code;
        $save->type_date    = $type_date;
        $save->save();

        if($save){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }
    
    
    public function edit_data(Request $request){
        $id             = $request->input('id');
        $name           = $request->input('name');
        $code           = $request->input('code');
        $date           = $request->input('type_date');
        
        $type_date = date('Y-m-d',strtotime($date));
        
        if($id){
            $save = typeP::find($id);
            $save->name         = $name;
            $save->code         = $code;
            $save->type_date    = $type_date;
            $save->save();

            if($save){
                return response()->json('success');
            }
            else{
                return response()->json('fail');
            }
        }
        else{
            return response()->json('fail');
        }
    }
    
    public function del_data(Request $request){
        $id         = $request->input('id');
        if($id){
            $save = typeP::find($id);
            $save->active = 1;
            $save->save();
            return 'success';
        }
        else{
            return 'fail';
        }
    }
}

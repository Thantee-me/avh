<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Supplier AS supplier;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;


class SupplierController extends Controller
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
        
        $data = supplier::where('active','2');
        $count = supplier::where('active','2');
        
        
        if($search){
            $data->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('tel','like','%'.$search.'%');
                    $q->orWhere('address','like','%'.$search.'%');
                    $q->orWhere('credit_term','like','%'.$search.'%');
                 });
            $count->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('tel','like','%'.$search.'%');
                    $q->orWhere('address','like','%'.$search.'%');
                    $q->orWhere('credit_term','like','%'.$search.'%');
                 });
        }
        
        $data->orderBy('supplier_id','desc');
        $count->orderBy('supplier_id','desc');
        
        $count_all = $count->count();
        $list_data = $data->skip($skip)->take('10')->get();
        
        $return_data = [
            'list'          => $list_data,
            'total'         => $count_all,
            'total_perpage' => ceil($count_all/$perpage) 
        ];
        return response()->json($return_data);
    }
    
    public function save_data(Request $request){
        $count_max = supplier::orderBy('active','asc')->count();
        $count_max+=1;
        $new_code = ($count_max < 9999 ? sprintf("%04d",$count_max) : $count_max);
        $code           = "sup".$new_code;
        $name           = $request->input('name');
        $tel            = $request->input('tel');
        $address        = $request->input('address');
        $credit_term    = $request->input('credit_term');
        
        $save = new supplier;
        $save->name         = $name;
        $save->tel          = $tel;
        $save->address      = $address;
        $save->credit_term  = $credit_term;
        $save->code         = $code;
        $save->save();
        
        if($save){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }
     
    public function check_code(Request $request){
        $data = supplier::where('code',$request->input('code'))->count();
        
        return response()->json($data);
    }
    
    public function edit_data(Request $request){
        $id             = $request->input('id');
        $name           = $request->input('name');
        $tel            = $request->input('tel');
        $address        = $request->input('address');
        $credit_term    = $request->input('credit_term');
        
        if($id){
            $save = supplier::find($id);
            $save->name         = $name;
            $save->tel          = $tel;
            $save->address      = $address;
            $save->credit_term  = $credit_term;
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
            $save = supplier::find($id);
            $save->active = 1;
            $save->save();
            return 'success';
        }
        else{
            return 'fail';
        }
    }
}

<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Branch AS branch;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;


class BranchController extends Controller
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
        
        $data = branch::where('active','2');
        $count = branch::where('active','2');
        
        if($search){
            $data->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('tel','like','%'.$search.'%');
                    $q->orWhere('address','like','%'.$search.'%');
                 });
            
            $count->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('tel','like','%'.$search.'%');
                    $q->orWhere('address','like','%'.$search.'%');
                 });
        }
        
        $data->orderBy('branch_id','desc');
        $count->orderBy('branch_id','desc');
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
        $name       = $request->input('name');
        $tel        = $request->input('tel');
        $address    = $request->input('address');
        
        $save = new branch;
        $save->name     = $name;
        $save->tel      = $tel;
        $save->address  = $address;
        $save->save();
        
        if($save){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }
    
    
    public function edit_data(Request $request){
        $id         = $request->input('id');
        $name       = $request->input('name');
        $tel        = $request->input('tel');
        $address    = $request->input('address');
        
        if($id){
            $save = branch::find($id);
            $save->name     = $name;
            $save->tel      = $tel;
            $save->address  = $address;
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
            $save = branch::find($id);
            $save->active = 1;
            $save->save();
        }
        else{
            return 'fail';
        }
    }
}

<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Brand AS brand;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;
use DB;
 
class BrandController extends Controller
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
         
        $data = brand::select(DB::raw('(CASE WHEN pic = "" THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" WHEN pic IS NULL THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" ELSE CONCAT("http://dev-avh.com/backendnuxt/local/storage/img/brands/",pic) END) AS img'),'brand_id','name','active','created_at','updated_at')->where('active','2');
        $count = brand::where('active','2');
        
        if($search){
            $data->where('name','like','%'.$search.'%');
            $count->where('name','like','%'.$search.'%');
        }
        
        $data->orderBy('brand_id','desc');
        $count->orderBy('brand_id','desc');
        
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
        $name           = $request->input('name');
        $img            = $request->input('img');
        $file_name = '';
        if(!empty($img)){
            $data_img = $img;
            preg_match('/^data:image\/(\w+);base64,/', $data_img, $type_ext);
            list($type, $data_img) = explode(';', $data_img);
            list(, $data_img)      = explode(',', $data_img);
            $typeEX = strtolower($type_ext[1]);
            $data_img = base64_decode($data_img);
            $file_name = date('YmdHis').'_brands.'.$typeEX;
            $full_path = storage_path().'/img/brands/'.$file_name;
            file_put_contents($full_path, $data_img);
        }
        
        
        $save = new brand;
        $save->name         = $name;
        $save->pic          = $file_name;
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
        $img            = $request->input('img');
        $old_img        = $request->input('old_img');
        $file_name = '';
        if(!empty($img)){
            $data_img = $img;
            preg_match('/^data:image\/(\w+);base64,/', $data_img, $type_ext);
            list($type, $data_img) = explode(';', $data_img);
            list(, $data_img)      = explode(',', $data_img);
            $typeEX = strtolower($type_ext[1]);
            $data_img = base64_decode($data_img);
            $file_name = date('YmdHis').'_brands.'.$typeEX;
            $full_path = storage_path().'/img/brands/'.$file_name;
            file_put_contents($full_path, $data_img);
            
            $old_path = storage_path().'/img/brands/'.$old_img;
            if (file_exists($old_path)) {   
                unlink($old_path);                    
            }
        }
        else{
            $file_name = $old_img;
        }
        
        if($id){
            $save = brand::find($id);
            $save->name         = $name;
            $save->pic          = $file_name;
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
            $save = brand::find($id);
            $save->active = 1;
            $save->save();
            return 'success';
        }
        else{
            return 'fail';
        }
    }
}

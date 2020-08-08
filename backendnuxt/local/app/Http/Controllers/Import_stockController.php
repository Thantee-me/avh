<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Import_stock;
use DB;


use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;

 
class Import_stockController extends Controller
{
    public function import_stockIndex2(){   
        
        $Import_stock  =  Import_stock::all();
        //$Import_product  = "OK";
        $return_data = [
            'Import_stock'      => $Import_stock
        ]; 
         
        return response()->json($return_data);
    }
    public function import_stockIndex(Request $request){
        
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
        
        $data = Import_stock::where('status','2');
        $count = Import_stock::where('status','2');
        
        
        if($search){
            $data->where(function($q) use ($search) {
                    $q->orWhere('import_description','like','%'.$search.'%');
                    $q->orWhere('import_price','like','%'.$search.'%');
                    $q->orWhere('import_number','like','%'.$search.'%');
                    $q->orWhere('import_minimum','like','%'.$search.'%');
                    $q->orWhere('import_text','like','%'.$search.'%');
                    $q->orWhere('import_pn','like','%'.$search.'%');
                    $q->orWhere('import_real01','like','%'.$search.'%');
                    $q->orWhere('import_supplier','like','%'.$search.'%');
                    $q->orWhere('import_brand','like','%'.$search.'%');
                    $q->orWhere('import_storage','like','%'.$search.'%');
                 });
            $count->where(function($q) use ($search) {
                    $q->orWhere('import_description','like','%'.$search.'%');
                    $q->orWhere('import_price','like','%'.$search.'%');
                    $q->orWhere('import_number','like','%'.$search.'%');
                    $q->orWhere('import_minimum','like','%'.$search.'%');
                    $q->orWhere('import_text','like','%'.$search.'%');
                    $q->orWhere('import_pn','like','%'.$search.'%');
                    $q->orWhere('import_real01','like','%'.$search.'%');
                    $q->orWhere('import_supplier','like','%'.$search.'%');
                    $q->orWhere('import_brand','like','%'.$search.'%');
                    $q->orWhere('import_storage','like','%'.$search.'%');
                 });
        }
        
        $data->orderBy('import_id','desc');
        $count->orderBy('import_id','desc');
        
        $count_all = $count->count();
        $Import_stock = $data->skip($skip)->take('10')->get();
        
        $return_data = [
            'Import_stock'          => $Import_stock,
            'total'         => $count_all,
            'total_perpage' => ceil($count_all/$perpage) 
        ];
        return response()->json($return_data);
    }
    public function import_stockCreate(Request $request){   
        
        $Import_stock  =  new Import_stock;
        $Import_stock->import_description       =   $request->import_description;
        $Import_stock->import_price             =   $request->import_price;
        $Import_stock->import_number            =   $request->import_number;
        $Import_stock->import_minimum           =   $request->import_minimum;
        $Import_stock->import_text              =   $request->import_text;
        $Import_stock->import_pn                =   $request->import_pn;
        $Import_stock->import_real01            =   $request->import_real01;
        $Import_stock->import_supplier            =   $request->import_supplier;
        $Import_stock->import_brand            =   $request->import_brand;
        $Import_stock->import_storage            =   $request->import_storage;
        $Import_stock->save();

        $return_data = [
            'Import_stock'      => $Import_stock
        ]; 
         
        return response()->json($return_data);
    }

    public function import_stockSearch(Request $request){   
        $search = $request->input('search');
        $Import_stock  =  Import_stock::Where('import_description','like','%'.$search.'%')->get();

        $return_data = [
            'Import_stock'      => $Import_stock
        ]; 
         
        return response()->json($return_data);
        
    }
    
}

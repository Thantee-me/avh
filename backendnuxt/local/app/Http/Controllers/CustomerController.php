<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Customer;
use App\User;
use App\Sale_customer;
use App\Contact_customer;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;

 
class CustomerController extends Controller
{

    public function customerIndex(Request $request){
        
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
        
        $data = Customer::where('customer_status','2');
        $count = Customer::where('customer_status','2');
        
        
        if($search){
            $data->where(function($q) use ($search) {
                    $q->orWhere('customer_code','like','%'.$search.'%');
                    $q->orWhere('customer_name','like','%'.$search.'%');
                    $q->orWhere('customer_cedit','like','%'.$search.'%');
                    $q->orWhere('customer_tax','like','%'.$search.'%');
                    $q->orWhere('customer_address','like','%'.$search.'%');
                    $q->orWhere('customer_tell','like','%'.$search.'%');
                    $q->orWhere('customer_ceditlimit','like','%'.$search.'%');
                 });
            $count->where(function($q) use ($search) {
                    $q->orWhere('customer_code','like','%'.$search.'%');
                    $q->orWhere('customer_name','like','%'.$search.'%');
                    $q->orWhere('customer_cedit','like','%'.$search.'%');
                    $q->orWhere('customer_tax','like','%'.$search.'%');
                    $q->orWhere('customer_address','like','%'.$search.'%');
                    $q->orWhere('customer_tell','like','%'.$search.'%');
                    $q->orWhere('customer_ceditlimit','like','%'.$search.'%');
                 });
        }
        
        $data->orderBy('customer_id','desc');
        $count->orderBy('customer_id','desc');
        
        $count_all = $count->count();
        $list_data = $data->skip($skip)->take('10')->get();
        
        $return_data = [
            'Customer'          => $list_data,
            'total'         => $count_all,
            'total_perpage' => ceil($count_all/$perpage) 
        ];
        return response()->json($return_data);
    }
    
    public function customerCreate(Request $request){        
        $Customer = new Customer;
        $Customer->branch_id            = $request->branch_id;
        $Customer->customer_name        = $request->customer_name;
        $Customer->customer_cedit       = $request->customer_cedit;
        $Customer->customer_tax         = $request->customer_tax;
        $Customer->customer_address     = $request->customer_address;
        $Customer->customer_tell        = $request->customer_tell;
        $Customer->customer_ceditlimit  = $request->customer_ceditlimit;
        $Customer->customer_billing_date    = $request->customer_billing_date;
        $Customer->customer_check_date      = $request->customer_check_date;
        $Customer->customer_remark          = $request->customer_remark;
        $Customer->customer_status          = "2";
        $Customer->save();

        $sum = count($request->user_id);
        if ($sum != 0) {
            for ($i = 0; $i < $sum; $i++) {
                $Sale_customer  = new Sale_customer;
                $Sale_customer->customer_id     =   $Customer->customer_id;
                $Sale_customer->user_id     =   $request->user_id[$i];
                $Sale_customer->save();
            }
        }

        $sum = count($request->contact_customer_name);
        if ($sum != 0) {
            for ($i = 0; $i < $sum; $i++) {
                $Contact_customer  = new Contact_customer;
                $Contact_customer->customer_id     =   $Customer->customer_id;
                $Contact_customer->contact_customer_name     =   $request->contact_customer_name[$i];
                $Contact_customer->contact_customer_tell     =   $request->contact_customer_tell[$i];
                $Contact_customer->contact_customer_address     =   $request->contact_customer_address[$i];
                $Contact_customer->save();
            }
        }

        if($Customer){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }
    
    
    public function edit_data(Request $request){
        $id             = $request->input('id');
        $name           = $request->input('name');
        
        if($id){
            $save = brand::find($id);
            $save->name         = $name;
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

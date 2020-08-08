<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Customer;
use App\User;
use DB;
use App\Sale_customer;
use App\Contact_customer;
use App\User_customerlist;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;

 
class Sale_customerController extends Controller
{
    public function saleCustomerIndex(Request $request){   
        
        $Sale_customer  =  Sale_customer::where('sale_customer_status','2')->get();

        $return_data = [
            'Sale_customer'      => $Sale_customer
        ];
        
        return response()->json($return_data);
    }
    
    public function saleCustomerCreate(Request $request){        

        $Customer = new Customer;
        $Customer->branch_id            = $request->branch_id;
        $Customer->customer_code        = $request->customer_code;
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

        $sum = count($request->listsale);
        if ($sum != 0) {
            for ($i = 0; $i < $sum; $i++) {
                $Sale_customer  = new Sale_customer;
                $Sale_customer->customer_id     =   $Customer->customer_id;
                $Sale_customer->user_id     =   $request->listsale[$i]['id'];
                $Sale_customer->save();
            }
        }

        $sum = count($request->listcontact);
        if ($sum != 0) {
            for ($i = 0; $i < $sum; $i++) {
                $Contact_customer  = new Contact_customer;
                $Contact_customer->customer_id     =   $Customer->customer_id;
                $Contact_customer->contact_customer_name     =   $request->listcontact[$i]['contact_customer_name'];
                $Contact_customer->contact_customer_tell     =   $request->listcontact[$i]['contact_customer_tell'];
                $Contact_customer->contact_customer_address     =   $request->listcontact[$i]['contact_customer_address'];
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
    
    public function customerShow(Request $request){   
        $id =   $request->id;
        $Customer           =  Customer::find($request->id);
        $Sale_customer      =  DB::select("
        select 
        r2.name,
        r2.tell,
        r2.email,
        r2.branch_id,
        r2.position_id,
        r2.id
        from sale_customer as r1 
        JOIN users as r2 ON r1.user_id = r2.id
        where r1.customer_id = $id
        ");
        $Contact_customer   =  Contact_customer::where('customer_id',$request->id)->get();

        $return_data = [
            'Customer'      => $Customer,
            'Sale_customer' => $Sale_customer,
            'Contact_customer'  => $Contact_customer
        ];
        
        return response()->json($return_data);
    }
    
    public function saleCustomerEdit(Request $request){      
          
        $Customer = Customer::find($request->customer_id);
        $Customer->branch_id            = $request->branch_id;
        $Customer->customer_code        = $request->customer_code;
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

        $sum = count($request->listsale);
        if ($sum != 0) {

            $Sale_customerCount = Sale_customer::where('customer_id', $request->customer_id)->count();
            if($Sale_customerCount!=0){
                $Sale_customer = Sale_customer::where('customer_id', $request->customer_id)->delete();
            }

            for ($i = 0; $i < $sum; $i++) {
                $Sale_customer  = new Sale_customer;
                $Sale_customer->customer_id     =   $Customer->customer_id;
                $Sale_customer->user_id     =   $request->listsale[$i]['id'];
                $Sale_customer->save();
            }
        }

        $sum = count($request->listcontact);
        if ($sum != 0) {
            $Sale_customerCount = Contact_customer::where('customer_id', $request->customer_id)->count();
            if($Sale_customerCount!=0){
                $Sale_customer = Contact_customer::where('customer_id', $request->customer_id)->delete();
            }
            for ($i = 0; $i < $sum; $i++) {
                $Contact_customer  = new Contact_customer;
                $Contact_customer->customer_id     =   $Customer->customer_id;
                $Contact_customer->contact_customer_name     =   $request->listcontact[$i]['contact_customer_name'];
                $Contact_customer->contact_customer_tell     =   $request->listcontact[$i]['contact_customer_tell'];
                $Contact_customer->contact_customer_address     =   $request->listcontact[$i]['contact_customer_address'];
                $Contact_customer->contact_customer_position     =   $request->listcontact[$i]['contact_customer_position'];
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

    public function saleCustomerDelete(Request $request){      
          
        $Customer = Customer::find($request->customer_id);
        $Customer->customer_status          = "1";
        $Customer->save();


        if($Customer){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }

    public function saleCustomerDeleteOut(Request $request){      
          
        $Customer = User_customerlist::find($request->user_customerlist_id);
        $Customer->delete();


        if($Customer){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }

    public function saleCustomerDeleteOut2(Request $request){      
          
        $Customer = Sale_customer::find($request->sale_id);
        $Customer->delete();


        if($Customer){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }
}

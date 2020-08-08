<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Position;
use App\Branch;
use App\Permissions;
use App\Role;
use App\User;
use App\Department;
use App\User_customerlist;
use App\User_permissions;
use DB;


use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;

 
class PositionController extends Controller
{
    public function checkEmail(Request $request){   
        
        $User  =  User::where('email',$request->email)->count();

        if($User==0){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
        
    }

    public function getAdd(Request $request){   
        
        $Branch  =  Branch::where('active','2')->get();
        $Position   =   Position::where('status','2')->get();
        $Permissions   =   Permissions::all();
        $Department     =   Department::all();
        // $Role   =   Role::all();

        $return_data = [
            'Branch'      => $Branch,
            'Position'     => $Position,
            'Permissions'   => $Permissions,
            'Department'    => $Department
        ];
        
        return response()->json($return_data);
    }
    public function userUpdateOff(Request $request){   
        $UserIn  =  User::where('id',$request->id)->first();
        $User  =  User::where('id',$request->id)->update([
            'remember_token' => $UserIn->password,
            'password'    => "NULL",
            'status'      => "1"
        ]);

        if($User){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }

    public function userUpdateOn(Request $request){   
        $UserIn  =  User::where('id',$request->id)->first();
        $User  =  User::where('id',$request->id)->update([
            'password'    => $UserIn->remember_token,
            'remember_token' => "NULL",
            'status'      => "2" 
        ]);

        if($User){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }
    

    
    public function usersShow(Request $request){   
        
        $User  =  User::where('status','2')
        ->where('branch_id',$request->position_id)
        ->get();

        $return_data = [
            'User'      => $User
        ];
        
        return response()->json($return_data);
    }
    public function userShowDetails(Request $request){   
        $users_id = $request->users_id;
        $User  =  User::where('id',$request->users_id)->first();
        $User_customerlist  = DB::select("
        select * 
        from user_customerlist as r1
        JOIN customer as r2 ON r2.customer_id = r1.customer_id
        where r1.users_id = '$users_id'
        ");
        $User_permissions   = User_permissions::where('users_id',$request->users_id)->get();
        $Position   =   Position::where('status','2')->get();
        $Permissions   =   Permissions::all();
        $Department     =   Department::all();

        $return_data = [
            'User'      => $User,
            'User_customerlist' => $User_customerlist,
            'User_permissions'  => $User_permissions,
            'Position'          => $Position,
            'Permissions'       => $Permissions,
            'Department'        => $Department
        ];
        
        return response()->json($return_data);
    }
    

    public function userCreate(Request $request){   
        
        $User  = new User;
        $User->name         =   $request->name;
        $User->tell         =   $request->tell;
        $User->email        =   $request->email;
        $User->password     =   bcrypt($request->password);
        $User->position_id  =   $request->position_id;
        $User->department_name  =   $request->department_name;
        $User->branch_id    =   $request->branch_id;
        $User->status       =   "2";
        $User->save();

        $sum = count($request->User_customerlist);
        if ($sum != 0) {
            for ($i = 0; $i < $sum; $i++) {
                $User_customerlist  = new User_customerlist;
                $User_customerlist->customer_id     =   $request->User_customerlist[$i]['customer_id'];
                $User_customerlist->users_id        =      $User->id;;
                $User_customerlist->user_customer_status     =   "2";
                $User_customerlist->save();
            }
        }

        $sum = count($request->User_permissions);
        if ($sum != 0) {
            for ($i = 0; $i < $sum; $i++) {
                $User_permissions  = new User_permissions;
                $User_permissions->users_id         =   $User->id;
                $User_permissions->permissions_id   =   $request->User_permissions[$i]['permissions_id'];
                $User_permissions->user_permissions_status     =   "2";
                $User_permissions->save();
            }
        }

        
        if($User){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }

    public function userEdit(Request $request){   
        
        $User  =  User::find($request->users_id);
        $User->name         =   $request->name;
        $User->tell         =   $request->tell;
        $User->email        =   $request->email;
        // $User->password     =   bcrypt($request->password);
        $User->position_id  =   $request->position_id;
        $User->department_name  =   $request->department_name;
        $User->branch_id    =   $request->branch_id;
        $User->status       =   "2";
        $User->save();

        $sum = count($request->User_customerlist);
        if ($sum != 0) {
            $User_customerlist = User_customerlist::where('users_id',$request->users_id)->delete();

            for ($i = 0; $i < $sum; $i++) {
                $User_customerlist  = new User_customerlist;
                $User_customerlist->customer_id     =   $request->User_customerlist[$i]['customer_id'];
                $User_customerlist->users_id        =      $User->id;;
                $User_customerlist->user_customer_status     =   "2";
                $User_customerlist->save();
            }
        }

        $sum = count($request->User_permissions);
        if ($sum != 0) {
            $User_permissions = User_permissions::where('users_id',$request->users_id)->delete();
            for ($i = 0; $i < $sum; $i++) {
                $User_permissions  = new User_permissions;
                $User_permissions->users_id         =   $User->id;
                $User_permissions->permissions_id   =   $request->User_permissions[$i]['permissions_id'];
                $User_permissions->user_permissions_status     =   "2";
                $User_permissions->save();
            }
        }

        
        if($User){
            return response()->json('success');
        }
        else{
            return response()->json('fail');
        }
    }
    
    public function usersList(Request $request){
        
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
        
        $data = User::where('status','!=','0');
        $count = User::where('status','!=','0');
        
        
        if($search){
            $data->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('tell','like','%'.$search.'%');
                    $q->orWhere('email','like','%'.$search.'%');
                 });
            $count->where(function($q) use ($search) {
                    $q->orWhere('name','like','%'.$search.'%');
                    $q->orWhere('tell','like','%'.$search.'%');
                    $q->orWhere('email','like','%'.$search.'%');
                 });
        }
        
        $data->orderBy('id','desc');
        $count->orderBy('id','desc');
        
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
        
        $save = new brand;
        $save->name         = $name;
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

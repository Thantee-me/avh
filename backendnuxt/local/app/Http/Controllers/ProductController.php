<?php

namespace App\Http\Controllers;

use JWTAuth;
use App\Product AS product;
use App\Product_group AS product_group;
use App\Brand AS brand;
use App\Supplier AS supplier;
use App\Type_product AS typeP;
use App\User AS user;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;
use DB;
use App\Product_gallery AS gallery;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function getlist(Request $request){
        
        $real_number = $request->input('realno');
        $name = $request->input('name');
        $brand_name = $request->input('brand');
        $amount = $request->input('qty');
        $page = $request->input('page');
        $perpage = $request->input('perpage');
        
        $field = $request->input('sortBy');
        $order = $request->input('sortDesc');
        $fieldby = 'product.name';
        $orderby = 'desc';
        
        
        if(empty($page)){
           $page = 1; 
        }
        
        if(empty($perpage)){
            $perpage = 10;
        }
        
        $skip = ($page * $perpage) - $perpage;
        
        /*$path = Storage::url('product_image');
        $default_pic = Storage::url('no-image.jpg');*/
        
        $data = product::leftJoin('supplier','product.supplier_id', '=', 'supplier.supplier_id')
                        ->leftJoin('brand','product.brand_id','=','brand.brand_id')
                        ->leftJoin('type_product','product.type_id','=','type_product.type_id')
                        ->join('product_group','product.real_number','=','product_group.product_group_id')
                        ->leftJoin('product_gallery','product_group.product_group_id','=','product_gallery.product_group_id')
                        ->select('product.product_id', 'product_group.real_no AS real_number', 'product.name','product.amount','product.price',DB::raw('(CASE WHEN product_gallery.name = "" THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" WHEN product_gallery.name IS NULL THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" ELSE CONCAT("http://dev-avh.com/backendnuxt/local/storage/img/products/",product_gallery.name) END) AS pic'),'brand.name AS brand_name')
                        ->where('product.active','2');
        
        $count = product::leftJoin('supplier','product.supplier_id', '=', 'supplier.supplier_id')
                        ->leftJoin('brand','product.brand_id','=','brand.brand_id')
                        ->leftJoin('type_product','product.type_id','=','type_product.type_id')
                        ->join('product_group','product.real_number','=','product_group.product_group_id')
                        ->select('product.product_id')
                        ->where('product.active','2');
        
        
        if(!empty($real_number)){
            $data->where('product_group.real_no','like','%'.$real_number.'%');
            $count->where('product_group.real_no','like','%'.$real_number.'%');
        }
        
        if(!empty($name)){
            $data->where('product.name','like','%'.$name.'%');
            $count->where('product.name','like','%'.$name.'%');
        }
        
        if(!empty($brand_name)){
            $data->where('brand.name','like','%'.$brand_name.'%');
            $count->where('brand.name','like','%'.$brand_name.'%');
        }
        
        if(!empty($amount)){
            $data->where('product.amount','like','%'.$amount.'%');
            $count->where('product.amount','like','%'.$amount.'%');
        }
        
        
        if(empty($field)){
            $fieldby = 'product.name';
            $orderby = 'asc';
        }
        else{
            if($field == 'brand_name'){
                $fieldby = 'brand.name';
            }
            else{
                $fieldby = 'product.'.$field;
            }
        }
        
        if($order){
            $orderby = 'desc';
        }
        else{
            $orderby = 'asc';
        }
        
        $data->orderBy($fieldby,$orderby)->groupBy('product.product_id');

        
        $count_all = $count->count();
        $list_data = $data->skip($skip)->take('10')->get();
        
        $return_data = [
            'list'          => $list_data,
            'total'         => $count_all,
            'total_perpage' => ceil($count_all/$perpage) 
        ];
        return response()->json($return_data);
    }
    
    public function brand_data(){
        $data = brand::select('brand_id AS id','name')->where('active','2')->orderBy('name','asc')->get();
        return response()->json($data);
    }
    
    public function supplier_data(){
        $data = supplier::select('supplier_id AS id','code','name','tel')->where('active','2')->orderBy('name','asc')->get();
        return response()->json($data);
    }
    
    public function type_data(){
        $data = typeP::select('type_id AS id','code','name')->where('active','2')->orderBy('name','asc')->get();
        return response()->json($data);
    }
    
    public function search_real(Request $request){
        $data = product_group::select('real_no AS real_number','product_group_id AS real_id')->where('real_no','like','%'.$request->input('real_number').'%')->orderBy('real_no','asc')->get();
        return ($data);
    }
    
    public function get_data(Request $request){
        $id = $request->input('real_id');
        $real = product_group::find($id);
        $data = product::where('real_number',$id)->orderBy('product_id','desc')->first();
        $data['real_number'] = $real->real_no;
        $data['real_id'] = $real->product_group_id;
        $data['gallery'] = gallery::select('gallery_pro_id',DB::raw('(CASE WHEN name = "" THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" WHEN name IS NULL THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" ELSE CONCAT("http://dev-avh.com/backendnuxt/local/storage/img/products/",name) END) AS name'))->where('product_group_id',$data->real_number)->get();
        
        return response()->json($data);
    }
    
    public function save_data(Request $request){
        
        $key = 1;
        foreach($request->input('alldata') AS $list_data){
            $name           = $list_data['name'];
            $real_number    = $list_data['real_number'];
            $detail         = $list_data['detail'];
            $supplier       = $list_data['supplier'];
            $type           = $list_data['type'];
            $brand          = $list_data['brand'];
            $cost           = $list_data['cost'];
            $barcode        = $list_data['barcode'];
            $qty            = $list_data['qty'];
            $minimum        = $list_data['minimum'];
            $receive_date   = $list_data['receive_date'];
            $warehouse      = $list_data['warehouse'];
            $note           = $list_data['note'];
            $pic            = $list_data['gallery'];
            $user           = $list_data['user'];
            
            $check_real = product_group::where('real_no',$real_number)->count();
            $real_id = 0;
            if($check_real > 0){
                $real = product_group::where('real_no',$real_number)->first();
                $real_id = $real->product_group_id;
            }
            else{
                $save_group = new product_group;
                $save_group->real_no = $real_number;
                $save_group->save();
                
                $real = product_group::where('real_no',$real_number)->first();
                $real_id = $real->product_group_id;
            }
            
            $save = new product;
            $save->real_number              = $real_id;
            $save->details                  = $detail;
            $save->supplier_id              = $supplier;
            $save->type_id                  = $type;
            $save->brand_id                 = $brand;
            $save->name                     = $name;
            $save->price                    = $cost;
            $save->barcode_number           = $barcode;
            $save->amount                   = $qty;
            $save->min_noti                 = $minimum;
            $save->date_receive             = $receive_date;
            $save->remarks                  = $note;
            $save->warehouse_name           = $warehouse;
            $save->created_by               = $user;
            $save->save();
            
            if($save){
                if($key < 1){
                    $pic            = $list_data['gallery'];
                    $decode_gal = '';
                    $rownum = 1;
                    if(sizeof($pic) > 0){
                        foreach($pic AS $gal_name){
                            if(!empty($gal_name['name'])){
                                $data_img = $gal_name['name'];
                                preg_match('/^data:image\/(\w+);base64,/', $data_img, $type_ext);
                                list($type, $data_img) = explode(';', $data_img);
                                list(, $data_img)      = explode(',', $data_img);
                                $typeEX = strtolower($type_ext[1]);
                                $data_img = base64_decode($data_img);
                                $file_name = date('YmdHis').'_'.$real_id.'_'.$rownum.''.'.'.$typeEX;
                                $full_path = storage_path().'/img/products/'.$file_name;
                                file_put_contents($full_path, $data_img);

                                $save_gal = new gallery;
                                $save_gal->product_group_id       = $real_id;
                                $save_gal->name                   = $file_name;
                                $save_gal->save();
                                $rownum++;
                            }
                        }
                    }
                }
                $key++;
                
            }
        }
        return response()->json('success');
    }
    
    public function view_edit(Request $request){
        $id = $request->input('id');
        $data = product::find($id);
        
        $data['gallery'] = gallery::select('gallery_pro_id',DB::raw('(CASE WHEN name = "" THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" WHEN name IS NULL THEN "http://dev-avh.com/backendnuxt/local/storage/no-image.jpg" ELSE CONCAT("http://dev-avh.com/backendnuxt/local/storage/img/products/",name) END) AS name'))->where('product_group_id',$data->real_number)->get();
        
        $real_num = product_group::where('product_group_id',$data->real_number)->first();
        $data['real_number'] = $real_num->real_no;
        
        return response()->json($data);
    }
    
    public function near_data(Request $request){
        $id = $request->input('id');
        $data = product::find($id);
        
        $near_data = product::where('real_number',$data->real_number)->where('product_id','<>',$data['product_id'])->where('active','2')->orderBy('product_id','desc')->get();
        
        return response()->json($near_data);
    }
    
    public function edit_data(Request $request){
        $key = 0;
        foreach($request->input('alldata') AS $list_data){
            $id             = $list_data['product_id'];
            $name           = $list_data['name'];
            $real_number    = $list_data['real_number'];
            $detail         = $list_data['detail'];
            $supplier       = $list_data['supplier'];
            $type           = $list_data['type'];
            $brand          = $list_data['brand'];
            $cost           = $list_data['cost'];
            $barcode        = $list_data['barcode'];
            $qty            = $list_data['qty'];
            $minimum        = $list_data['minimum'];
            $receive_date   = $list_data['receive_date'];
            $warehouse      = $list_data['warehouse'];
            $note           = $list_data['note'];
            $pic            = $list_data['gallery'];
            
            $check_real = product_group::where('real_no',$real_number)->count();
            $real_id = 0;
            if($check_real > 0){
                $real = product_group::where('real_no',$real_number)->first();
                $real_id = $real->product_group_id;
            }
            else{
                $save_group = new product_group;
                $save_group->real_no = $real_number;
                $save_group->save();
                
                $real = product_group::where('real_no',$real_number)->first();
                $real_id = $real->product_group_id;
            }
            
            $save = product::find($id);
            $save->real_number              = $real_id;
            $save->details                  = $detail;
            $save->supplier_id              = $supplier;
            $save->type_id                  = $type;
            $save->brand_id                 = $brand;
            $save->name                     = $name;
            $save->price                    = $cost;
            $save->barcode_number           = $barcode;
            $save->amount                   = $qty;
            $save->min_noti                 = $minimum;
            $save->date_receive             = $receive_date;
            $save->remarks                  = $note;
            $save->warehouse_name           = $warehouse;
            $save->save();
            
            if($save){
                if($key == '0')
                {
                   $pic            = $list_data['gallery'];
                    $decode_gal = '';
                    $rownum = 1;
                    $old_id_img = '';
                    foreach($pic AS $old_id){
                        if(!empty($old_id['gallery_pro_id']) && $old_id['gallery_pro_id'] != '0'){
                            $old_id_img.=$old_id['gallery_pro_id'].',';
                        }
                    }
                    $old_id_img = substr($old_id_img,'0','-1');
                    $old_id_img_arr = explode(',',$old_id_img);
                    $old_img_gal = gallery::whereNotIn('gallery_pro_id', $old_id_img_arr)->where('product_group_id',$real_id)->get();
                    if(!empty($old_img_gal)){
                        foreach($old_img_gal AS $del_img){
                            $img = storage_path().'/img/products/'.$del_img->name;
                            if (file_exists($img)) {   
                                unlink($img);                    
                            }
                        }
                        gallery::whereNotIn('gallery_pro_id', $old_id_img_arr)->where('product_group_id',$real_id)->delete();
                    }
                    foreach($pic AS $gal_name){
                        if(empty($gal_name['gallery_pro_id']) || $gal_name['gallery_pro_id'] == '0'){                    
                            $data_img = $gal_name['name'];
                            preg_match('/^data:image\/(\w+);base64,/', $data_img, $type_ext);
                            list($type, $data_img) = explode(';', $data_img);
                            list(, $data_img)      = explode(',', $data_img);
                            $typeEX = strtolower($type_ext[1]);
                            $data_img = base64_decode($data_img);
                            $file_name = date('YmdHis').'_'.$real_id.'_'.$rownum.''.'.'.$typeEX;
                            $full_path = storage_path().'/img/products/'.$file_name;
                            file_put_contents($full_path, $data_img);

                            $save_gal = new gallery;
                            $save_gal->product_group_id       = $real_id;
                            $save_gal->name                   = $file_name;
                            $save_gal->save();
                            $rownum++;
                        }
                    } 
                }
                $key++;
            }
        }
        return response()->json($old_id_img);
    }
    
    public function del_data(Request $request){
        
        $id         = $request->input('id');
        if($id){
            $save = product::find($id);
            $save->active = 1;
            $save->save();
            return 'success';
        }
        else{
            return 'fail';
        }
        
        return '';
    }
}

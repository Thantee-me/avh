<?php

Route::post('login', 'APIController@login');
Route::post('register', 'APIController@register');

Route::get('/test', function () {
    return ['1'];
});

include("api-oh.php");

Route::group(['middleware' => 'auth.jwt'], function () {
    
    Route::get('user','APIController@user');
    Route::post('logout', 'APIController@logout');
    
    // branch
    Route::post('branch','BranchController@getlist');
    Route::post('branch_save','BranchController@save_data');
    Route::post('branch_edit','BranchController@edit_data');
    Route::post('branch_del','BranchController@del_data');
    // branch
    
    // supplier
    Route::post('supplier','SupplierController@getlist');
    Route::post('supplier_checkcode','SupplierController@check_code');
    Route::post('supplier_save','SupplierController@save_data'); 
    Route::post('supplier_edit','SupplierController@edit_data');
    Route::post('supplier_del','SupplierController@del_data');
    // supplier
    
    // brand
    Route::post('brand','BrandController@getlist');
    Route::post('brand_save','BrandController@save_data');
    Route::post('brand_edit','BrandController@edit_data');
    Route::post('brand_del','BrandController@del_data'); 
    // brand
    
    // type product
    Route::post('type_product','TypeproductController@getlist');
    Route::post('type_product_checkcode','TypeproductController@check_code');
    Route::post('type_product_save','TypeproductController@save_data');
    Route::post('type_product_edit','TypeproductController@edit_data');
    Route::post('type_product_del','TypeproductController@del_data');
    // type product

    // product
    Route::post('product','ProductController@getlist');
    Route::get('brand_data','ProductController@brand_data');
    Route::get('supplier_data','ProductController@supplier_data');
    Route::get('type_data','ProductController@type_data');
    Route::post('product_save','ProductController@save_data');
    Route::post('product_view_edit','ProductController@view_edit');
    Route::post('product_near_data','ProductController@near_data');
    Route::post('product_edit','ProductController@edit_data');
    Route::post('product_del','ProductController@del_data');
    Route::post('product_autocomplete','ProductController@search_real');
    Route::post('product_getdata','ProductController@get_data');
    // product
    

});
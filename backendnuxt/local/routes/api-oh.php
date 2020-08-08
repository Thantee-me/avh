<?php 
//user
Route::get('users/add','PositionController@getAdd');
Route::post('users/show','PositionController@usersShow');
Route::post('users/usersList','PositionController@usersList');
Route::post('users/checkEmail','PositionController@checkEmail');
Route::post('users/create','PositionController@userCreate');
Route::post('users/showDetails','PositionController@userShowDetails');
Route::post('users/edit','PositionController@userEdit');
Route::post('users/update/off','PositionController@userUpdateOff');
Route::post('users/update/on','PositionController@userUpdateOn');

//Customer
// Route::get('customer/index','CustomerController@customerIndex');
Route::post('customer/index','CustomerController@customerIndex');
Route::post('customer/create','CustomerController@customerCreate');
Route::post('customer/delete','Sale_customerController@saleCustomerDeleteOut');
//Sale_customer
Route::get('saleCustomer/index','Sale_customerController@saleCustomerIndex');
Route::post('saleCustomer/create','Sale_customerController@saleCustomerCreate');
Route::post('saleCustomer/show','Sale_customerController@customerShow');
Route::post('saleCustomer/edit','Sale_customerController@saleCustomerEdit');
Route::post('saleCustomer/delete','Sale_customerController@saleCustomerDelete');

Route::post('saleCustomer/deleteout','Sale_customerController@saleCustomerDeleteOut2');

//Import_product
Route::get('import_stock/index','Import_stockController@import_stockIndex');
Route::post('import_stock/create','Import_stockController@import_stockCreate');
Route::post('import_stock/search','Import_stockController@import_stockSearch');





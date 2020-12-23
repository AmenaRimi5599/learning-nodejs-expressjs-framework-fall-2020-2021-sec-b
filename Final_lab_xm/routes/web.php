<?php
Route::get('/', function(){
	echo "index page";
});


Route::get('/login', 'loginController@index');
Route::post('/login', 'loginController@verify');
Route::get('/logout', 'logoutController@index');

Route::group(['middleware'=>['sess']], function(){
	
	Route::get('/home', 'homeController@index')->name('home.index')->middleware('sess');
	Route::get('/stdlist', ['uses'=> 'homeController@stdlist', 'as'=> 'home.stdlist']);
	Route::get('/details/{id}', 'homeController@show')->name('home.show');

	Route::group(['middleware'=>['type']], function(){
		Route::get('/create', 'homeController@create')->name('home.create');
		Route::post('/create', 'homeController@store');
		Route::get('/edit/{id}', 'homeController@edit')->name('home.edit');
		Route::post('/edit/{id}', 'homeController@update');
		Route::get('/delete/{id}', 'homeController@delete')->name('home.delete');
		Route::post('/delete/{id}', 'homeController@destroy');
	});
	
});




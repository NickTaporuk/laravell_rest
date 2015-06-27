<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');
//Route::get('/', 'PostController@index');
//get('/',['as'=>'posts', 'uses' => 'PostController@index']);
//get('unpublished',['as'=>'posts.unpublished', 'uses' => 'PostController@unpublished']);
Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

Route::resource('api/todos','TodosController');

//route to add
Route::get('todoapp','TodoAppController@index');
Route::get('header','TodoAppController@header');

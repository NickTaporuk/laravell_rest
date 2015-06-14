<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\todo ;
use Request;

class TodosController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {

        $todos = todo::all();
        return $todos;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store() {
//        var_dump($_POST);exit;
//        var_dump(Request::all());exit;
        $todo = todo::create(Request::all());
        return $todo;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id) {
        $todo = todo::find($id);
        $todo->done = Request::input('done');
        $todo->save();

        return $todo;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {
        todo::destroy($id);
    }
}

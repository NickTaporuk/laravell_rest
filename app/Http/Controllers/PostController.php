<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Posts;

use Illuminate\Http\Request;

class PostController extends Controller {

    /**
     * @return \Illuminate\View\View
     */
	public function index(Posts $postModel)
	{
//        $post = Posts::all();
//        $post = Posts::latest('updated_at')->get();
//        $post = Posts::latest('updated_at')->where('updated_at','<=',Carbon::now())->get();
//        dd($post);
        $post = $postModel->getPublishedPosts();
        return view('post.post',['posts' => $post]);
//		echo 'index';
	}

    public function unpublished(Posts $postModel)
    {
        $posts = $postModel->getUnPublished();
        return view('post.post',['posts' => $posts]);
    }

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}

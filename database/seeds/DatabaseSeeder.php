<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Posts;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

//		 $this->call('UserTableSeeder');
		 $this->call('PostSeeder');
	}

}

class PostSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->delete();
        Posts::create([
            'title'     =>  "First posts",
            'slug'     =>  'first-post',
            'excerpt'   =>  '<b>First posts</b>',
            'content'   =>  '<b>Content First posts body</b>',
            'published' =>  true    ,
//            'published_at' =>  DB::raw('Now()'), для DateTime
//            'published_at' =>  DB::raw('CURRENT_TIMESTAMP')
        ]);

        Posts::create([
            'title'     =>  "Second posts",
            'slug'     =>  'second-post',
            'excerpt'   =>  '<b>Second posts</b>',
            'content'   =>  '<b>Content Second posts body</b>',
            'published' =>  false,
//            'published_at' =>  DB::raw('Now()'), для DateTime
//            'published_at' =>  DB::raw('CURRENT_TIMESTAMP')
        ]);
        Posts::create([
            'title'     =>  "Tree posts",
            'slug'     =>  'tree-post',
            'excerpt'   =>  '<b>Tree posts</b>',
            'content'   =>  '<b>Content Tree posts body</b>',
            'published' =>  false,
//            'published_at' =>  DB::raw('Now()'), для DateTime
//            'published_at' =>  DB::raw('CURRENT_TIMESTAMP')
        ]);
    }

}

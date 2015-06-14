<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Posts extends Model
{

    protected $fillable = ['title', 'slug', 'excerpt', 'content', 'published'];

    public function getPublishedPosts()
    {
        $post = Posts::latest('updated_at')
            ->published();
        return $post;
    }


    public function scopePublished($query)
    {
        return $query->where('updated_at', '<=', Carbon::now())->where('published', '=', 1)->get();
    }

    public function scopeUnPublished($query)
    {
        return $query->where('updated_at', '<=', Carbon::now())->orWhere('published', '=', 0)->get();
    }

    public function getUnPublished()
    {
        return Posts::latest('updated_at')
            ->unPublished();
    }
}

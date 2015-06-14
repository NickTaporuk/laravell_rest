@extends('app')

@section('content')
<div class="links">
    {!! link_to_route('posts','published') !!}&nbsb;&nbsb;&nbsb; {!! link_to_route('posts','unpublished') !!}
</div>


    @foreach($posts as $post)
        <article>
            <h2>{!! $post->title !!}</h2>
            <p>{!!$post->excerpt!!}</p>
            <p>published : {{$post->updated_at}}</p>
        </article>
    @endforeach
@stop

@extends('layouts.app')

@section('head')
    <link rel="preload" href="../js/search.js" as="script">
@endsection

{{--@section('header')--}}
{{--    <div class="content-header">--}}
{{--        <h1 class="text-center text-pink text-xl"> Welcome to the home page {{ Auth::user()->name}}</h1>--}}
{{--    </div>--}}
{{--@endsection--}}

@section('content')
    <div class="CharacterContainer">
    <?php
    foreach (range('A', 'Z') as $char) {
        print '<a class="letter" href="/search/' . $char . '">' . $char . '</a> | ';
    }
    ?>
    </div>
    <div id="drinks">


    </div>
    <script src="../js/search.js"></script>

@endsection

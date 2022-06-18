@extends('layouts.app')

@section('head')
    <link rel="preload" href="../js/search.js" as="script">
@endsection

@section('content')
    <div class="CharacterContainer">
    <?php
    foreach (range('A', 'Z') as $char) {
        print '<a class="letter" href="/search/' . $char . '"> ' . $char . '</a> | ';
    }
    ?>
    </div>
    <div id="drinks">


    </div>
    <script src="../js/search.js"></script>

@endsection

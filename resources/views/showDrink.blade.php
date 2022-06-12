@extends('layouts.app')

@section('head')
    <link rel="preload" href="../js/show.js" as="script">
@endsection

{{--@section('header')--}}
{{--    <h1 class=" text-pink text-xl text-center"> Drink Details and instructions</h1>--}}
{{--@endsection--}}

@section('content')
    <div class="card bg-card">
        <div class="card-header bg-gradient-black">
                <h3 id="title"></h3>
                <div>
                    <span id="tags" class="badge badge-pill badge-primary"></span>
                    <span id="category" class="badge badge-pill badge-primary"></span>
                    <span id="alcohol" class="badge badge-pill badge-primary"></span>
                </div>
        </div>
        <div class="card-body bg-cardDrink">
            <div class="row">
                <div class="col-xs-6">
                    <img id='drinkImg'
                         src=""
                         class="imgMain1"
                         alt="Drink Image">
                </div>

                <div class="col-xs-6">
                    <h5 class="card bg-gradient-pink">What will you need?</h5>
                    <ol id="ingredients">
                        <li id="glass"></li>
                    </ol>
                    <h5 class="card bg-gradient-pink">Instructions</h5>
                    <p id="instru"></p>
                </div>
            </div>
            <div class="card-footer bg-cardDrink">
                <h3 class="float-right">Hope You will enjoy!</h3>
            </div>
        </div>
    </div>

    <script src="../js/show.js"></script>
@endsection

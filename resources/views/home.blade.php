@extends('layouts.app')

@section('head')
    <link rel="preload" href="./js/app-api.js" as="script">
@endsection

@section('header')
    <div class="content-header">
        <h1 class="text-center text-pink text-xl"> Discover New Cocktails!</h1>
    </div>
@endsection

@section('content')
    <div class="grid-row1">
        <div id="drink0" class="grid-inner1">
            <div id="colImg">
                <img
                    src=""
                    class=" imgMain1"
                    alt="Drink Image">
            </div>
            <div id="colInfo">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Default Card Example</h2>
                        <div class="card-tools">
                            <span id="" class="badge badge-info">Label</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4>ingredients:</h4>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a id="show" href="">See more about this drink</a>
                    </div>
                    <!-- /.card-footer -->
                </div>
            </div>
        </div>
        <div id='drink1' class="grid-inner1">
            <div id="colImg">
                <img
                    src=""
                    class=" imgMain1"
                    alt="Drink Image">
            </div>
            <div id="colInfo">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Default Card Example</h2>
                        <div class="card-tools">
                            <span id="" class="badge badge-info">Label</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4>ingredients:</h4>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a id="show" href="">See more about this drink</a>
                    </div>
                    <!-- /.card-footer -->
                </div>
            </div>
        </div>
    </div>

    <div class="grid-row2">
        <div id="drink2" class="grid-inner2">
            <div id="colInfo" class="col">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Default Card Example</h2>
                        <div class="card-tools">
                            <span id="" class="badge badge-info">Label</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4>ingredients:</h4>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a id="show" href="">See more about this drink</a>
                    </div>
                    <!-- /.card-footer -->
                </div>
            </div>
            <div id="colImg" class="col">
                <img id='drink2'
                     src=""
                     class=" imgMain1"
                     alt="Drink Image">
            </div>
        </div>
        <div id="drink3" class="grid-inner2">
            <div id="colInfo" class="col">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Default Card Example</h2>
                        <div class="card-tools">
                            <span id="" class="badge badge-info">Label</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4>ingredients:</h4>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a id="show" href="">See more about this drink</a>
                    </div>
                    <!-- /.card-footer -->
                </div>
            </div>
            <div id="colImg" class="col">
                <img id='drink3'
                     src=""
                     class=" imgMain1"
                     alt="Drink Image">
            </div>
        </div>
    </div>
    <div>
        <a href="/search/A" class="btn btn-info btn-lg float-right">Search for cocktails alphabetically</a>
    </div>

        <script src="./js/app-api.js"></script>

@endsection

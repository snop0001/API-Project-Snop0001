<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
     * This function finds a cocktail according to its id
     * @param $id
     * @return void
     */
    public function getInfo($id)
    {
        //setup the ProxyController with the right credentials
        $mySwapiProxy = new ProxyController('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=');
        //get the data
        $result = $mySwapiProxy->getData($id);
        //print the data to the frontend.
        print_r($result);
    }

    /**
     * This function finds all the cocktails according to the letter their name start with
     * @param $letter
     * @return void
     */
    public function search($letter)
    {
        //setup the ProxyController with the right credentials
        $mySwapiProxy = new ProxyController('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=');
        //get the data
        $result = $mySwapiProxy->getData($letter);
        //print the data to the frontend.
        print_r($result);
    }

}



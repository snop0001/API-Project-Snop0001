<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//include("./ProxyController.php");

class ApiController extends Controller
{
    public function getInfo()
    {
        //setup the ProxyController with the right credentials
        $mySwapiProxy = new ProxyController('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=');
//get the data
        $result = $mySwapiProxy->getData(11000);
//print the data to the frontend.
        print_r($result);
    }

}
//
//class ProxyController
//{
//    private $url;
//
//    public function __construct($url)
//    {
//        $this->url = $url;
//    }
//
//    public function getData($id)
//    {
//        $request_url = $this->url . $id;
//        $curl = curl_init($request_url);
//
//        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//        curl_setopt($curl, CURLOPT_HTTPHEADER, [
//            'Content-Type: application/json',
//        ]);
//
//        //API call with Authorization
//        //Change the key with your settings
//        // curl_setopt($curl, CURLOPT_HTTPHEADER, [
//        //     'Content-Type: application/json',
//        //     'Authorization: Bearer key'
//        // ]);
//
//        $response = curl_exec($curl);
//        curl_close($curl);
//
//        return $response;
//    }
//}



<?php

namespace App\Http\Controllers;
/**
 * Class to handle an AJAX call as a proxy
 */
class ProxyController
{
    private $url;

    public function __construct($url)
    {
        $this->url = $url;
    }

    public function getData($id)
    {
        $request_url = $this->url.$id;
        $curl = curl_init($request_url);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        return $response;
    }
}

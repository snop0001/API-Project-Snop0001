<?php
include("./proxy.php");

//setup the Proxy with the right credentials
$mySwapiProxy = new Proxy('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=');
//get the data
$result = $mySwapiProxy->getData(11000);
//print the data to the frontend.
print_r($result);
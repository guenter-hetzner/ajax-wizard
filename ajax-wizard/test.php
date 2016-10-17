<?php

// $url <- any parameters from your HTML element is in here

$url -> result = 'You visit ' . $url -> modul . ' width ' . $url -> action;

printr ( $url ); // <- printr returns an array to your target element

// printr ( 'ok' ); // <- returns a string

?>

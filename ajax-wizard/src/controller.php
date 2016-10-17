<?php

header('Content-Type: application/json');

$url = ( object ) $_REQUEST [ 'url' ];

if ( !isset ( $url -> modul ) ) {
	$url -> result = 'Kein Modul angegeben'; 
}

else {
	include ( '../' . $url -> modul );
}

echo json_encode ( $url );


function printr ( $data, $exit = TRUE ) {
         global $url; 

         if ( $data ) {
         $result .= '<pre style="margin:5px">';
         $result .= print_r ( $data, true );
         $result .= '</pre>'; 
         $url -> result = $result;
         }
         if ( is_string ( $data ) ) 
         $url -> result = $data;
}

?>
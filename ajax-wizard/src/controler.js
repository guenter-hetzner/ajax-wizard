function recall ( obj ) {

	data = obj2data ( obj );
	data.pid = uniqueid ( );
	ajax_wizard ( obj, data );

}


function ajax_wizard ( obj, data ) {

	try {
        if ( jquery ) $ = jquery;
        } catch(e){};

        src = $('script[src$="/controller.js"]').attr('src');
	url = obj2url ( data );

		$.ajax({
			url: str_replace ( '.js', '.php', src ),
			type: 'post',
			data: url,
			async: true,
				success: function ( result ) { 
				target = result.target;
				document.getElementById( target ).innerHTML = result.result;
				}
		}); 
}


function obj2data ( obj ) {
	result = new Array;
		for ( var key in obj.dataset ) {
			result [ key ] = obj.dataset [ key ];
			if  ( key == 'elem1' )
				obj = elem2obj ( key );
		}
	return ( result );
}


function elem2obj ( elem ) {
	return ( document.getElementById ( elem ) );
}


function obj2url ( array ) {
	if ( typeof array === 'string' ) return ( '&url[part]=' + array );
		else { str = ''; for ( key in array ) {
			if ( key != 'undefined' )
			str += '&url[' + key + ']=' + encodeURIComponent ( array [key] );
		}
	return ( str );
    }
}


function uniqueid () {
	return ( Math.round ( 100000 * ( Math.random ( ) ) ) + 10000 );
}


function compare ( word, string ) {
         if ( string.match( word ) ) return true;
} 


function str_replace ( search, replace, subject ) {
         return subject.split( search ).join ( replace );
}


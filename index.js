"use strict";

var	fs = require('fs'),
	path = require('path'),
	charfile = path.resolve( __dirname + '/chars.json' ),
	filedata = fs.readFileSync( charfile, { encoding: 'utf16le' } ),
	chars = JSON.parse( filedata ),
	clean = {};

var options = {
	ascii: true,
	html: true,
	raw: true,
	simple: false,
	unicode: true,
	disableWarning: false
};

/*
if chars.json is broken it will have thrown during parse.
if it has no length, that's an unparseable error you need to catch.
don't break chars.json
*/
Object.keys( chars[ 0 ] ).forEach( function ( val ) {
	clean[ val ] = [];
});

chars.forEach( function ( val ) {
	clean.ascii.push( String.fromCharCode( val.ascii ) );
	clean.html.push( '&' + val.html + ';' );
	clean.raw.push( val.raw );
	clean.simple.push( val.simple );
	clean.unicode.push( '\\u' + String( "0000" + val.unicode ).slice( -4 ) );
});

var Charming = function () {
	var self = this;

	function convert ( input, source, target ) {
		if ( ! options[ source ] ) {
			/* only convert from source if configured to */
			return input;
		}
		if ( source == 'simple' && ! options.disableWarning ) {
			console.log( 'Charmed warning: Conversion from simple is not recommended.' );
		}
		var output = input;
		clean[ source ].forEach( function ( val, ix ) {
			output = output.split( val ).join( options[ target ][ ix ] );
		} );
		return output;
	}

	/* ascii */
	this.asciiToHtml = function ( input ) {
		return convert( input, 'ascii', 'html' );
	};

	this.asciiToRaw = function ( input ) {
		return convert( input, 'ascii', 'raw' );
	};

	this.asciiToSimple = function ( input ) {
		return convert( input, 'ascii', 'simple' );
	};

	this.asciiToUnicode = function ( input ) {
		return convert( input, 'ascii', 'unicode' );
	};

	/* html */
	this.htmlToAscii = function ( input ) {
		return convert( input, 'html', 'ascii' );
	};

	this.htmlToRaw = function ( input ) {
		return convert( input, 'html', 'raw' );
	};

	this.htmlToSimple = function ( input ) {
		return convert( input, 'html', 'simple' );
	};

	this.htmlToUnicode = function ( input ) {
		return convert( input, 'html', 'unicode' );
	};

	/* raw */
	this.rawToAscii = function ( input ) {
		return convert( input, 'raw', 'ascii' );
	};

	this.rawToHtml = function ( input ) {
		return convert( input, 'raw', 'raw' );
	};

	this.rawToSimple = function ( input ) {
		return convert( input, 'raw', 'simple' );
	};

	this.rawToUnicode = function ( input ) {
		return convert( input, 'raw', 'unicode' );
	};

	/* simple */
	this.simpleToAscii = function ( input ) {
		return convert( input, 'simple', 'ascii' );
	};

	this.simpleToRaw = function ( input ) {
		return convert( input, 'simple', 'raw' );
	};

	this.simpleToSimple = function ( input ) {
		return convert( input, 'simple', 'simple' );
	};

	this.simpleToUnicode = function ( input ) {
		return convert( input, 'simple', 'unicode' );
	};

	/* unicode */
	this.unicodeToAscii = function ( input ) {
		return convert( input, 'unicode', 'ascii' );
	};

	this.unicodeToHtml = function ( input ) {
		return convert( input, 'unicode', 'html' );
	};

	this.unicodeToRaw = function ( input ) {
		return convert( input, 'unicode', 'raw' );
	};

	this.unicodeToSimple = function ( input ) {
		return convert( input, 'unicode', 'simple' );
	};

	/* convenience */
	this.toAscii = function ( input ) {
		var output = input;
		return this.htmlToAscii( output )
			.rawToAscii( output )
			.simpleToAscii( output )
			.unicodeToAscii( output );
	};

	this.toHtml = function ( input ) {
		var output = input;
		return this.asciiToHtml( output )
			.rawToHtml( output )
			.simpleToHtml( output )
			.unicodeToHtml( output );
	};

	this.toRaw = function ( input ) {
		var output = input;
		return this.asciiToRaw( output )
			.htmlToRaw( output )
			.simpleToRaw( output )
			.unicodeToRaw( output );
	};

	this.toSimple = function ( input ) {
		var output = input;
		return this.asciiToSimple( output )
			.htmlToSimple( output )
			.rawToSimple( output )
			.unicodeToSimple( output );
	};

	this.toUnicode = function ( input ) {
		var output = input;
		return this.asciiToUnicode( output )
			.htmlToUnicode( output )
			.rawToUnicode( output )
			.simpleToUnicode( output );
	};

	this.config = function ( configOpts ) {
		Object.keys( configOpts ).forEach( function ( opt ) {
			options[ opt ] = configOpts[ opt ];
		});
	};
};

module.exports = new Charming();

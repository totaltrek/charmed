Charmed
=======

This utility converts characters to and from escaped HTML entities, ascii values, unicode characters, Javascript Character Codes, and simplified versions. Most conversions are reversible.

#Usage
```javascript
var charmed = require( 'charmed' );
charmed.config( {
	ascii: true,
	html: false,
	raw: true,
	simple: false,
	unicode: true
} );
charmed.toHtml( textToConvert );
```

#Configuration
##charmed.configure( *options* )
Default configuration is specified above.

#Conversions
Each method below will convert only the discovered character types of the source type to the equivalent characters of the target type.

###charmed.asciiToHtml( string )
###charmed.asciiToRaw( string )
###charmed.asciiToSimple( string )
###charmed.asciiToUnicode( string )

###charmed.htmlToAscii( string )
###charmed.htmlToRaw( string )
###charmed.htmlToSimple( string )
###charmed.htmlToUnicode( string )

###charmed.rawToAscii( string )
###charmed.rawToHtml( string )
###charmed.rawToSimple( string )
###charmed.rawToUnicode( string )

###charmed.simpleToAscii( string )
###charmed.simpleToHtml( string )
###charmed.simpleToRaw( string )
###charmed.simpleToUnicode( string )

###charmed.unicodeToAscii( string )
###charmed.unicodeToHtml( string )
###charmed.unicodeToRaw( string )
###charmed.unicodeToSimple( string )

#Convenience Methods
###charmed.toHtml( string )
Converts all configured character types to their equivalent escaped HTML entitites.

###charmed.toAscii( string ) 
Converts all configured character types to their ASCII character equivalents. 

###charmed.toUnicode( string ) 
Converts all configured character types to their unicode equivalents.

###charmed.toRaw( string ) 
Converts all configured character types to the raw characters described by their escaped values.

###charmed.toSimple( string ) 
Converts all configured character types to simplified versions of those characters, where available, and the raw values where they cannot be simplified. Should not be reversed.

Charmed
=======

This utility converts characters to and from escaped HTML entities, ascii values, unicode characters, Javascript Character Codes, and simplified versions. Most conversions are reversible.

Please contribute! This is released under the MIT license.

#Usage
```javascript
var charmed = require( 'charmed' );
charmed.config( {
	ascii: true,
	html: true,
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


#The MIT License (MIT)

> Copyright (c) 2014 iConstituent, LLC
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

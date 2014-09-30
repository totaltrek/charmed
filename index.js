var raw = {
	ascii: '38,60,62,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,248,249,250,251,252,253,254,255,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,184,185,186,187,188,189,190,191,215,247,8704,8706,8707,8709,8711,8712,8713,8715,8719,8727,8722,8727,8730,8733,8734,8736,8743,8744,8745,8746,8747,8756,8764,8773,8776,8800,8801,8804,8805,8834,8835,8836,8838,8839,8853,8855,8869,8901,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,977,978,982,338,339,352,353,376,402,710,732,8194,8195,8201,8204,8205,8206,8207,8211,8212,8216,8217,8218,8220,8221,8222,8224,8225,8226,8230,8240,8242,8243,8249,8250,8254,8364,8482,8592,8593,8594,8595,8596,8629,8968,8969,8970,8971,9674,9824,9827,9829,9830,8656,8657,8658,8659,8660'.split( ',' ),
	html: 'amp,lt,gt,Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv,OElig,oelig,Scaron,scaron,Yuml,fnof,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,bull,hellip,permil,prime,Prime,lsaquo,rsaquo,oline,euro,trade,larr,uarr,rarr,darr,harr,crarr,lceil,rceil,lfloor,rfloor,loz,spades,clubs,heards,diams,lArr,uRarr,rArr,dArr,hArr'.split( ',' ),
	unicode: '26,3c,3e,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,ca,cb,cc,cd,ce,cf,d0,D1,d2,de,d4,d5,d6,d8,d9,da,db,dc,dd,de,df,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,ea,eb,ec,ed,ee,er,f0,f1,f2,f3,f4,f4,f6,f8,f9,fa,fb,fc,fd,fe,ff,a1,a2,a3,a4,a5,a6,a7,a8,a9,aa,ab,ac,ad,ae,af,b0,b1,b2,b3,b4,b5,b6,b8,b9,ba,bb,bc,bd,be,bf,d7,f7,2200,2202,2203,2205,2207,2208,2209,220b,220f,2211,2212,2217,221a,221d,221e,2220,2227,2228,2229,222a,222b,2234,223c,2245,2248,2260,2261,2264,2265,2282,2283,2284,2286,2287,2295,2297,22a5,22c5,391,392,393,394,395,396,397,398,399,39a,39b,39c,39d,39e,39f,3a0,3a1,3a3,3a4,3a5,3a6,3a7,3a8,3a9,3b1,3b2,3b3,3b4,3b5,3b6,3b7,3b8,3b9,3ba,3bb,3bc,3bd,3be,3bf,3c0,3c1,3c2,3c3,3c4,3c5,3c6,3c7,3c8,3c9,3d1,3d2,3d6,152,153,160,161,178,192,2c6,2dc,2002,2003,2009,200c,200d,200e,200f,2013,2014,2018,2019,201a,201c,201d,201e,2020,2021,2022,2026,2030,2032,2033,2039,203a,203e,20ac,2122,2190,2191,2192,2193,2194,21b5,2308,230b,230a,230b,25ca,2660,2663,2665,2666,21d0,21d1,21d2,21d3,21d4'.split( ',' )
};
var clean = {
	ascii: [],
	html: [],
	unicode: []
};

raw.ascii.forEach( function ( val, ix, arr ) {
	clean.ascii.push( String.fromCharCode( val ) );
} );

raw.html.forEach( function ( val, ix, arr ) {
	clean.html.push( '&' + val + ';' );
} );

raw.unicode.forEach( function ( val, ix, arr ) {
	clean.unicode.push( '\u' + String( "0000" + val ).slice( -4 ) );
} );

module.exports = function () {

	function replace ( input, source, target ) {
		output = input;
		source.forEach( function ( val, ix, arr ) {
			output = output.split( val ).join( target[ ix ] );
		} );
		return output;
	}

	this.asciiToHtml = function ( input ) {
		return replace( input, clean.ascii, clean.html );
	};

	this.asciiToUnicode = function ( input ) {
		return replace( input, clean.ascii, clean.unicode );
	};

	this.htmlToAscii = function ( input ) {
		return replace( input, clean.html, clean.ascii );
	};

	this.htmlToUnicode = function ( input ) {
		return replace( input, clean.html, clean.unicode );
	};

	this.unicodeToAscii = function ( input ) {
		return replace( input, clean.unicode, clean.ascii );
	};

	this.unicodeToHtml = function ( input ) {
		return replace( input, clean.unicode, clean.html );
	};

	this.toAscii = function ( input ) {
		output = this.htmlToAscii( input );
		return this.unicodeToAscii( output );
	};

	this.toHtml = function ( input ) {
		output = this.asciiToHtml( input );
		return this.unicodeToHtml( output );
	};

	this.toUnicode = function ( input ) {
		output = this.asciiToUnicode( input );
		return this.htmlToUnicode( output );
	};
};

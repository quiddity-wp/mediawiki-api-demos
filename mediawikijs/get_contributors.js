// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_contributors.js

	MediaWiki API Demos
	Demo of `Contributors` module: Get request to list all logged-in contributors and count of anonymous contributors to a page.

	MIT License
*/

var params = {
		action: 'query',
		titles: 'MediaWiki',
		prop: 'contributors',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	console.log( data );
} );

'use strict';

// MODULES //

var chai = require( 'chai' );
var chaiAsPromised = require( 'chai-as-promised' );

chai.use( chaiAsPromised );
chai.use( require( 'chai-things' ) );

var wordNet = require( './../lib/' )();

// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'wordNet', function() {

	describe( 'Word', function tests() {
		var word;

		it( 'creates a new word', function test(done) {
			word = new wordNet.Word( 'king' );
			expect( word ).to.be.instanceOf( wordNet.Word );
			done();
		});
	});

	describe( 'Synset', function tests(){
		var synsetProm =  new wordNet.Word( 'bank' ).getSynsets();

		it( 'retrieves a synset array for aspecific word', function test() {
			expect( synsetProm ).to.eventually.be.instanceOf( Array );
		});
	});
});

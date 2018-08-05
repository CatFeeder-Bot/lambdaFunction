// var LambdaTester = require('lambda-tester')

// it( `should return hello world`, function() {
  
  //   return LambdaTester( myLambda.handler )
  //       .event( 'hello world' )
  //       .expectResult( ( result ) => {
    //         console.log('ini result',result)
    //         expect( result ).to.equal('hello world')
    //       });
    // });
    
var expect = require('chai').expect
var myLambda = require('./archive')
it( `should return hello world`, function( done ) {
  myLambda.handler( 'hello world', null, (err, result) => {
      try {
          expect( err ).to.not.exist;
          expect( result ).to.exist;
          expect( result ).to.equal('hello world') 
          done();
      }
      catch( error ) {
          done( error );
      }
  });
});
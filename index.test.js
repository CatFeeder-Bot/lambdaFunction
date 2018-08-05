    
var expect = require('chai').expect
var myLambda = require('./index')
it( `error should not exist`, function( done ) {
  myLambda.handler( null, null, (err, result) => {
      try {
          expect( err ).to.not.exist;
          done();
      }
      catch( error ) {
          done( error );
      }
  });
});
it( `Result should exist and run correctly`, function( done ) {
    myLambda.handler( null, null, (err, result) => {
        try {
            expect( result ).to.exist;
            done();
        }
        catch( error ) {
            done( error );
        }
    });
  });
  it( `GetData function should exist`, function( done ) {
    myLambda.handler( null, null, (err, result) => {
        try {
            expect( result.getData).to.exist
            done();
        }
        catch( error ) {
            done( error );
        }
    });
  });
  it( `PutData function should exist`, function( done ) {
    myLambda.handler( null, null, (err, result) => {
        try {
            expect( result.putData).to.exist 
            done();
        }
        catch( error ) {
            done( error );
        }
    });
  });
  it( `get data and write data to firebase should run correctly`, function( done ) {
    myLambda.handler( null, null, (err, result) => {
        try {
            expect ( result.putData('uniqueIdTesting')).to.equal('Firebase put succeded')
            result.getData().then(element => {
                expect( element ).to.equal('uniqueId12345')
            })
            done();
        }
        catch( error ) {
            done( error );
        }
    });
  });
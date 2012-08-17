var thrones = thrones || {};

thrones.addTestSuite(function () {
    //assert that thrones vanilla app is loaded
    test("thrones vanilla app is defined", function () {
        ok(thrones.app, 'thrones.app is defined');
        ok(thrones.app.type === 'vanilla', 'type is vanilla');
    });
});
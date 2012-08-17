var thrones = thrones || {};

thrones.addTestSuite(function () {
    //assert that thrones backbone app is loaded
    test("thrones backbone app is defined", function () {
        ok(thrones.app, 'thrones.app is defiend');
        ok(thrones.app.type === 'backbone.js', 'type is backbone.js');
    });
});

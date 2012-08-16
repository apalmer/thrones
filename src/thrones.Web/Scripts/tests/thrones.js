var thrones = thrones || {};

thrones.addTestSuite(function () {
    //assert that thrones test suite loads
    test("thrones namespace is defined", function () {
        ok(thrones);
    });
});

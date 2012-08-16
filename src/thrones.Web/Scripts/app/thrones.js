var thrones = thrones || {};

thrones.tests = [];

thrones.addTestSuite = function (testSuite) {
    thrones.tests.push(testSuite);
};

thrones.test = function () {

    var displayTestSuite = function(results){
        var $jsTestContainer = $('#js-test-container');
        if ($jsTestContainer.length > 0) {
            $jsTestContainer.replaceWith(results);
        }
        else {
            $('body').append(results);
        }
        executeTests();
    };

    var executeTests = function () {
        for (var i = 0; i < thrones.tests.length; i++) {
            thrones.tests[i]();
        }
    }

    var currentUrl = window.location.pathname;
    var testSuiteUrl = 'JsTest';
    $.get(testSuiteUrl, currentUrl, displayTestSuite);
};
var thrones = thrones || {};

(function () {
    var tests = [];

    thrones.addTestSuite = function (testSuite) {
        tests.push(testSuite);
    };

    thrones.test = function () {

        var displayTestSuite = function (results) {
            var $jsTestContainer = $('#js-test-container');
            if ($jsTestContainer.length > 0) {
                $jsTestContainer.replaceWith(results);
            }
            else {
                $('body').append(results);
            }
        };

        var getTestSuite = function () {
            var currentUrl = encodeURI(window.location.pathname);
            var testSuiteUrl = 'JsTest';
            $.ajax({
                async: false,
                url: testSuiteUrl,
                data: { url: currentUrl },
                success: displayTestSuite
            });
        }

        var executeTests = function () {
            for (var i = 0; i < tests.length; i++) {
                tests[i]();
            }
        }


        getTestSuite();
        executeTests();
    };

})();
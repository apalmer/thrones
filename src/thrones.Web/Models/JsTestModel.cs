using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace thrones.Web.Models
{
    public class JsTestModel
    {
        public List<String> TestScripts { get; set; }

        public JsTestModel(String urlUnderTest)
        {
            TestScripts = new List<String>();

            //Test Baseline Functionality
            TestScripts.Add("~/Scripts/tests/thrones.js");

            switch (urlUnderTest)
            {
                case "/thrones/vanilla":
                    TestScripts.Add("~/Scripts/tests/vanilla/app.js");
                    break;
                case "/thrones/backbone":
                    TestScripts.Add("~/Scripts/tests/backbone/app.js");
                    break;
                default:
                    break;
            }
        }
    }
}
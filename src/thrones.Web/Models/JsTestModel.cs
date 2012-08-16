using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace thrones.Web.Models
{
    public class JsTestModel
    {
        public List<String> TestScripts { get; set; }

        public JsTestModel()
        {
            TestScripts = new List<String>();
            TestScripts.Add("~/Scripts/tests/thrones.js");
            TestScripts.Add("~/Scripts/tests/backbone/app.js");
        }
    }
}
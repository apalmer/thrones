using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using thrones.Web.Models;

namespace thrones.Web.Controllers
{
    public class JsTestController : Controller
    {
        //
        // GET: /JavascriptTests/

        public ActionResult Index(String url)
        {
            var model = new JsTestModel();
            return PartialView(model);
        }

    }
}

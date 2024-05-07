using MindShadow.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MindShadow.Controllers
{
    public class HomeController : Controller
    {
        MindShadowEntities db2 = new MindShadowEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult BMI()
        {
            return View();
        }
        public ActionResult MissionVision()
        {
            return View();
        }
        public ActionResult LivedExperience()
        {
            return View();
        }
        public ActionResult MentalTips()
        {
            return View();
        }
        public ActionResult Blogs()
        {
            return View();
        }
        public ActionResult Terms()
        {
            return View();
        }
        public ActionResult ConsultSpecialist()
        {
            return View();
        }
        public ActionResult LoginBmi()
        {
            return View();
        }
        public ActionResult NearbyHospital()
        {
            return View();
        }
        public ActionResult NearbyClinic()
        {
            return View();
        }
        public ActionResult NeedHelp()
        {
            return View();
        }
        [HttpPost]
        public ActionResult NeedHelp(Help help)
        {
            if (db2.Helps.Any(x => x.Problem == help.Problem))
            {
                ViewBag.notification = "Your problem already recorded.Please send another problem.";
            }
            else
            {
                db2.Helps.Add(help);
                db2.SaveChanges();
                ViewBag.notify = "Thanks for Send your problem. We will solve your problem within 24 hours.Thank You!";
            }
            return View();
        }
        public ActionResult AiAssistant()
        {
            return View();
        }
    }
}
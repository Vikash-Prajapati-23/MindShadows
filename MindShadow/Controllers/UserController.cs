using MindShadow.Models;
using MindShadow.MultiModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Mvc;

namespace MindShadow.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        
       MindShadowEntities db = new MindShadowEntities();
        public ActionResult SelfRegistration()
        {
            return View();
        }
        [HttpPost]
        public ActionResult SelfRegistration(User user)
        {
            if (db.Users.Any(X => X.User_ID == user.User_ID))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Users.Add(user);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";
                return RedirectToAction("SelfRegistration", "User");

            }
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(User user)
        {
            var checkLogin = db.Users.Where(x => x.User_ID.Equals(user.User_ID) && x.Password.Equals(user.Password)).FirstOrDefault();
            if (checkLogin != null)
            { 
                Session["userLogin"] = user.User_ID.ToString();
                return RedirectToAction("Dashboard", "User");
            }
            else
            {
                ViewBag.not = "Wrong user name or password";
            }
            return View();
        }
        public ActionResult Dashboard()
        {
            return View();
        }
        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Login", "User");
        }
        
        public ActionResult GardianRegistration()
        {
            return View();
        }
        [HttpPost]
        public ActionResult GardianRegistration(Gardian gardian)
        {
            if (db.Gardians.Any(X => X.Gardian_Id == gardian.Gardian_Id))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Gardians.Add(gardian);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";
                return RedirectToAction("GardianRegistration", "User");
            }
            return View();
        }
        public ActionResult DrRegistration()
        {
            return View();
        }
        [HttpPost]
        public ActionResult DrRegistration(Doctor doctor)
        {
            if (db.Doctors.Any(X => X.Doctor_id == doctor.Doctor_id))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Doctors.Add(doctor);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";
                return RedirectToAction("DrRegistration", "User");
            }
            return View();
        }
        public ActionResult ClinicRegistration()
        {
            return View();
        }
        [HttpPost]
        public ActionResult ClinicRegistration(Clinic clinic)
        {
            if (db.Clinics.Any(X => X.Clinic_id == clinic.Clinic_id))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Clinics.Add(clinic);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";
                return RedirectToAction("ClinicRegistration", "User");

            }
            return View();
        }
        public ActionResult DiagonostRegistration()
        {
            return View();
        }
        [HttpPost]
        public ActionResult DiagonostRegistration(Diagonost diagonost)
        {
            if (db.Diagonosts.Any(X => X.Diagonost_id == diagonost.Diagonost_id))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Diagonosts.Add(diagonost);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";
                return RedirectToAction("DiagonostRegistration", "User");
            }
            return View();
        }
        public ActionResult Reviews()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Reviews(Review review)
        {
            if (db.Reviews.Any(X => X.Email == review.Email))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Reviews.Add(review);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";
            }
            return View();
        }
        public ActionResult FeedBack()
        {
            return View();
        }
        [HttpPost]
        public ActionResult FeedBack(Feedback feedback)
        {
            if (db.Feedbacks.Any(X => X.Email == feedback.Email))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Feedbacks.Add(feedback);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";

            }
            return View();
        }
        public ActionResult Contact()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Contact(Contact contact)
        {
            if (db.Contacts.Any(X => X.Email == contact.Email))
            {
                ViewBag.notifi = "Data Already Exist!";
            }
            else
            {

                db.Contacts.Add(contact);
                db.SaveChanges();
                ViewBag.notification = "Record added successully";

            }
            return View();
        }
        public ActionResult Help()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Help(Help help)
        {
            if(db.Helps.Any(x =>x.Problem == help.Problem))
            {
                ViewBag.notification = "Your problem already recorded.Please send another problem.";
            }
            else
            {
                db.Helps.Add(help);
                db.SaveChanges();
                ViewBag.notify = "Thanks for Send your problem. We will solve your problem within 24 hours.Thank You!";
            }
            return View();
        }


        //multimodel try
        public ActionResult LoginTwo()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LoginTwo(User user, Gardian gardian)
        {
            var checkLogin = db.Users.Where(x => x.User_ID.Equals(user.User_ID) && x.Password.Equals(user.Password)).FirstOrDefault();
            if (checkLogin != null)
            {
                Session["userLogin"] = user.User_ID.ToString();
                return RedirectToAction("Dashboard", "User");
            }
            else
            {
                ViewBag.not = "Wrong user name or password";
            }
            return View();
        }
        public ActionResult Mul()
        {
            return View();
        }
        public ActionResult Setting()
        {
            return View(db.Users.ToList());
        }


    }
}
using MindShadow.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MindShadow.MultiModel
{
    public class MultiView
    {
        public IEnumerable<Doctor> doctors { set; get; }
        public IEnumerable<Gardian> gardians { set; get; }
        public IEnumerable<Clinic> clinics { set; get; }
        public IEnumerable<User> users { set; get; }
        public IEnumerable<Diagonost> diagonosts { set; get; }
    }
}
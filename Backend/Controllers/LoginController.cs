using Backend.Model;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("login")]
    public class LoginController : Controller
    {
        [HttpPost]
        public StatusCodeResult Login([FromBody] Login credentails)
        {
            Console.WriteLine("POST /login");

            // login validation
            if ((credentails.username == "admin" && credentails.password == "admin"))
            {
                // valid credentials
                return StatusCode(200);
            }

            return StatusCode(401);
        }
    }

}

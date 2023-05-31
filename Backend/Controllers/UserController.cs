using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Backend.Model;


namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        public List<User> Index()
        {
            List<User> users = new List<User>();

            // MSSQL connection
            SqlConnection connection = new SqlConnection(@"Data Source=ASHWINKV-LT;Initial Catalog=ReactTraining;Integrated Security=True");
            connection.Open();

            // Fetch all Users from DB
            SqlCommand cmd = new SqlCommand("select * from Users", connection);
            SqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                users.Add(new User {
                    userID = dr["userID"].ToString(),
                    userName = dr["userName"].ToString(),
                    companyID = dr["companyID"].ToString(),
                    companyName = dr["companyName"].ToString(),
                    userPermission = dr["userPermission"].ToString(),
                    userType = dr["userType"].ToString()
                });
            }
            dr.Close();

            connection.Close();

            return users;
        }
    }
}

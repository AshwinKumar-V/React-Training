using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Backend.Model;


namespace Backend.Controllers
{
    [ApiController]
    [Route("users")]
    public class UserController : Controller
    {
        string ConnectionString = @"Data Source=ASHWINKV-LT;Initial Catalog=ReactTraining;Integrated Security=True";

        [HttpGet]
        public List<User> GetUsers()
        {
            List<User> users = new List<User>();

            // MSSQL connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // fetch all users from DB
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

        [HttpPost]
        public void PostUser([FromBody] User user)
        {
            Console.WriteLine("POST /users");

            // mssql connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // add new user to db
            SqlCommand cmd = new SqlCommand("insert into Users (userName, companyID, companyName, userPermission, userType) values (@userName, @companyID, @companyName, @userPermission, @userType)", connection);
            cmd.Parameters.AddWithValue("@userName", user.userName);
            cmd.Parameters.AddWithValue("@companyID", user.companyID);
            cmd.Parameters.AddWithValue("@companyName", user.companyName);
            cmd.Parameters.AddWithValue("@userPermission", user.userPermission);
            cmd.Parameters.AddWithValue("@userType", user.userType);
            cmd.ExecuteNonQuery();

            return;
        }
    }
}

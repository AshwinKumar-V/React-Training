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
            Console.WriteLine("GET /users");
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

            // MSSQL connection
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

            connection.Close();
            return;
        }

        [HttpGet]
        [Route("{id}")]
        public User GetUser(int id)
        {
            Console.WriteLine("GET /users/:id");
            User user = new();

            // MSSQL connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // fetch specific user from DB based on userID
            SqlCommand cmd = new SqlCommand("select * from Users where userID = @userID", connection);
            cmd.Parameters.AddWithValue("@userID", id);
            SqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                user.userID = dr["userID"].ToString();
                user.userName = dr["userName"].ToString();
                user.companyID = dr["companyID"].ToString();
                user.companyName = dr["companyName"].ToString();
                user.userPermission = dr["userPermission"].ToString();
                user.userType = dr["userType"].ToString();
            }

            dr.Close();
            connection.Close();
            return user;
        }

        [HttpDelete]
        [Route("{id}")]
        public void DeleteUser(int id)
        {
            Console.WriteLine("DELETE /users/:id");
            User user = new();

            // MSSQL connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // fetch specific user from DB based on userID
            SqlCommand cmd = new SqlCommand("delete from Users where userID = @userID", connection);
            cmd.Parameters.AddWithValue("@userID", id);
            cmd.ExecuteNonQuery();
            
            connection.Close();
            return;
        }
    }
}

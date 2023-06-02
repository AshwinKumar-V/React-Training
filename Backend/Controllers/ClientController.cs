using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using Backend.Model;


namespace Backend.Controllers
{
    [ApiController]
    [Route("clients")]
    public class ClientController : Controller
    {
        string ConnectionString = @"Data Source=ASHWINKV-LT;Initial Catalog=ReactTraining;Integrated Security=True";

        [HttpGet]
        public List<Client> GetClients()
        {
            Console.WriteLine("GET /clients");
            List<Client> clients = new List<Client>();

            // MSSQL connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // fetch all clients from DB
            SqlCommand cmd = new SqlCommand("select * from Clients", connection);
            SqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                clients.Add(new Client {
                    clientID = dr["clientID"].ToString(),
                    clientName = dr["clientName"].ToString(),
                    clientPermission = dr["clientPermission"].ToString(),
                    clientType = dr["clientType"].ToString()
                });
            }

            dr.Close();
            connection.Close();
            return clients;
        }

        [HttpPost]
        public void PostClient([FromBody] Client client)
        {
            Console.WriteLine("POST /clients");

            // MSSQL connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // add new client to db
            SqlCommand cmd = new SqlCommand("insert into Clients (clientName, clientPermission, clientType) values (@clientName, @clientPermission, @clientType)", connection);
            cmd.Parameters.AddWithValue("@clientName", client.clientName);
            cmd.Parameters.AddWithValue("@clientPermission", client.clientPermission);
            cmd.Parameters.AddWithValue("@clientType", client.clientType);
            cmd.ExecuteNonQuery();

            connection.Close();
            return;
        }

        [HttpGet]
        [Route("{id}")]
        public Client Getclient(int id)
        {
            Console.WriteLine("GET /clients/:id");
            Client client = new();

            // MSSQL connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // fetch specific client from DB based on clientID
            SqlCommand cmd = new SqlCommand("select * from Clients where clientID = @clientID", connection);
            cmd.Parameters.AddWithValue("@clientID", id);
            SqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                client.clientID = dr["clientID"].ToString();
                client.clientName = dr["clientName"].ToString();
                client.clientPermission = dr["clientPermission"].ToString();
                client.clientType = dr["clientType"].ToString();
            }

            dr.Close();
            connection.Close();
            return client;
        }

        [HttpDelete]
        [Route("{id}")]
        public void Deleteclient(int id)
        {
            Console.WriteLine("DELETE /clients/:id");
            Client client = new();

            // MSSQL connection
            SqlConnection connection = new SqlConnection(ConnectionString);
            connection.Open();

            // delete specific client from DB based on clientID
            SqlCommand cmd = new SqlCommand("delete from Clients where clientID = @clientID", connection);
            cmd.Parameters.AddWithValue("@clientID", id);
            cmd.ExecuteNonQuery();
            
            connection.Close();
            return;
        }
    }
}

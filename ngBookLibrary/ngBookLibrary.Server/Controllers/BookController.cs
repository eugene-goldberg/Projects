using ngBookLibrary.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ngBookLibrary.Server.Controllers
{
    public class BookController : ApiController
    {
        // GET: api/Book
        public IEnumerable<Book> Get()
        {
            return new List<Book>
            {
                new Book {Id = 1, Title = "Test Book", Author = "Prasad Honrao", Price = 1234}
            };
        }

        // GET: api/Book/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Book
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Book/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Book/5
        public void Delete(int id)
        {
        }
    }
}

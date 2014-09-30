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
        List<Book> books = new List<Book>
        {
            new Book {Id = 1, Title = "Test Book", Author = "Prasad Honrao", Price = 1234, IsAvailable = true},
            new Book {Id = 2, Title = "Programming Fundamentals", Author = "Scott Hanselman", Price = 700, IsAvailable = true},
            new Book {Id = 3, Title = "Building Web Apps using AngularJS", Author = "Dan Wahlin", Price = 700, IsAvailable = false},
            new Book {Id = 4, Title = "ASP.Net All In One", Author = "Scott Guthrie", Price = 9999, IsAvailable = true},
            new Book {Id = 5, Title = "Let Us C", Author = "Yashwant Kanetkar", Price = 500, IsAvailable = false},
            new Book {Id = 6, Title = "Mastering SQL", Author = "Rob Dan", Price = 1500, IsAvailable = true},
            new Book {Id = 7, Title = "C# Fundamentals", Author = "Scott Allen", Price = 1000, IsAvailable = true},
            new Book {Id = 8, Title = "Advanced C#", Author = "Scott Allen", Price = 1500, IsAvailable = false},
            new Book {Id = 9, Title = "UML A to Z", Author = "Don Box", Price = 2500, IsAvailable = false},
            new Book {Id = 10, Title = "JavaScript from scratch", Author = "Prasad honrao", Price = 999, IsAvailable = true}
        };

        // GET: api/Book
        public IEnumerable<Book> Get()
        {
            return books;
        }

        // GET: api/Book/5
        public Book Get(int id)
        {
            return books.Where(b => b.Id == id).Single();
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

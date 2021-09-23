using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        //Asynchronous endpoint that gets a list of all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
           return await _context.Users.ToListAsync();   
        }

        //Asynchronous endpoint that gets a list of all users by id
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUsers(int id)
        {
            return await _context.Users.FindAsync(id);   
        }
    }
}
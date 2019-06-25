using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsBets_API.Data;
using SportsBets_API.Models;

namespace SportsBets_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;
        }        
        [HttpGet]
        public IActionResult GetValue()
        {
            var value = _context.Values.FirstOrDefault();

            return Ok(value);
        }
    }
}

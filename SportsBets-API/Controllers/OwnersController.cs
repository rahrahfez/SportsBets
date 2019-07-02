using System;
using Microsoft.AspNetCore.Mvc;

namespace SportsBets_API.Controllers
{
    [Route("api/owner")]
    [ApiController]
    public class OwnersController : ControllerBase
    {
        // private ILoggerManager  _logger;
        private IRepositoryWrapper _repository;
        public OwnersController(IRepositoryWrapper repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public IActionResult GetAllOwners()
        {
            try
            {
                var owners = _repository.Owner.GetAllOwners();
                return Ok(owners);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpGet("{id}")]
        public IActionResult GetOwnerById(int id)
        {
            try
            {
                var owner = _repository.Owner.GetOwnerById(id);
                if (owner == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(owner);
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
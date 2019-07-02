using System;
using Microsoft.AspNetCore.Mvc;
using Contracts;
using Entities.Models;
using Entities.Extensions;
using System.Linq;

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
        [HttpGet("{id}", Name = "OwnerById")]
        public IActionResult GetOwnerById(Guid id)
        {
            try
            {
                var owner = _repository.Owner.GetOwnerById(id);

                if (owner.IsEmptyObject())
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
        [HttpGet("{id}/account")]
        public IActionResult GetOwnerWithDetails(Guid id)
        {
            try
            {
                var owner = _repository.Owner.GetOwnerWithDetails(id);

                if (owner.IsEmptyObject())
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
                return StatusCode(500, "Internal server Error");
            }
        }
        [HttpPost]
        public IActionResult CreateOwner([FromBody]Owner owner)
        {
            try
            {
                if (owner.IsObjectNull())

                {
                    return BadRequest("Owner object is null");
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                _repository.Owner.CreateOwner(owner);
                _repository.Save();

                return CreatedAtRoute("OwnerById", new { Id = owner.OwnerId, owner });
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpPut("{id}")]
        public IActionResult UpdateOwner(Guid id, [FromBody]Owner owner)
        {
            try
            {
                if (owner == null)
                {
                    return BadRequest("Owner object is null");
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                var dbOwner = _repository.Owner.GetOwnerById(id);

                if (dbOwner == null)
                {
                    return NotFound();
                }

                _repository.Owner.UpdateOwner(dbOwner, owner);
                _repository.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteOwner(Guid id)
        {
            try
            {
                var owner = _repository.Owner.GetOwnerById(id);

                if (owner == null) 
                {
                    return NotFound();
                }
                if (_repository.Account.AccountsByOwner(id).Any())
                {
                    return BadRequest("Cannot delete owner. It has related accounts.");
                }

                _repository.Owner.DeleteOwner(owner);
                _repository.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex);
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
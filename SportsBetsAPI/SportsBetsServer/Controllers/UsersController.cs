using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Entities.Models;
using Entities.ExtendedModels;
using Microsoft.AspNetCore.Mvc;

namespace SportsBetsServer.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IRepositoryWrapper _repo;    
        private readonly ILoggerManager _logger;
        private readonly IAuthService _auth;
        public UsersController(IRepositoryWrapper repo, ILoggerManager logger, IAuthService auth)
        {
            _auth = auth;
            _logger = logger;
            _repo = repo;
        }
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            try
            {
                var users = _repo.User.GetAllUsers();

                _logger.LogInfo($"Returned all users from database.");

                return Ok(users);
            }
            catch(Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetAllUsers() action: {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
        [HttpGet("{id}", Name = "UserById")]
        public IActionResult GetUserById(Guid id) 
        {
            try
            {
                var user = _repo.User.GetUserById(id);
                
                if (user.Id.Equals(Guid.Empty)) 
                {
                    _logger.LogError($"User with id: {id} was not found in db.");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned user with id: {id}");
                    return Ok(user);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetOwnerById() action {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpGet("{id}/wagers")]
        public IActionResult GetOwnerWithDetails(Guid id)
        {
            try
            {
                var user = _repo.User.GetUserWithDetails(id);

                if (user.Id.Equals(Guid.Empty))
                {
                    _logger.LogError($"User with id {id} was not found.");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned user with details for id: {id}");
                    return Ok(user);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetOwnerWithDetails action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpPost]
        public IActionResult CreateUser([FromBody]UserToRegister user)
        {
            try
            {
                if (user == null)
                {
                    _logger.LogError("User is null.");
                    return BadRequest("User object is null");
                }
                if (!ModelState.IsValid)
                {
                    _logger.LogError("Invalid user sent from client.");
                    return BadRequest("Invalid user object sent from client");
                }
                
                var registeredUser = _auth.RegisterNewUser(user);

                _repo.User.CreateUser(registeredUser);
                _repo.Save();

                return CreatedAtRoute("UserById", new { id = registeredUser.Id }, registeredUser);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside CreateUser action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
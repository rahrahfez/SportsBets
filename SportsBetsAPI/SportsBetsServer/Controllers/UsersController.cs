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
        private readonly IAuthService _authService;
        public UsersController(IRepositoryWrapper repo, ILoggerManager logger, IAuthService authService)
        {
            _authService = authService;
            _logger = logger;
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                var users = await _repo.User.GetAllUsersAsync();

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
        public async Task<IActionResult> GetUserById(Guid id) 
        {
            try
            {
                var user = await _repo.User.GetUserByIdAsync(id);
                
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
        public async Task<IActionResult> GetOwnerWithDetails(Guid id)
        {
            try
            {
                var user = await _repo.User.GetUserWithDetailsAsync(id);

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
        public async Task<IActionResult> CreateUser([FromBody]UserToRegister user)
        {
            try
            {
                user.Username = user.Username.ToLower();

                if (user == null)
                {
                    _logger.LogError("User is null.");
                    return BadRequest("User object is null");
                }
                if (_repo.Auth.UserExists(user.Username))
                {
                    _logger.LogError("Username already exists.");
                    return BadRequest("Username already exists.");
                }
                
                var registeredUser = _authService.RegisterNewUser(user);

                await _repo.User.CreateUserAsync(registeredUser);

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
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
    public class UserController : ControllerBase
    {
        private readonly IRepositoryWrapper _repo;    
        private readonly ILoggerManager _logger;
        private readonly IAuthService _authService;
        public UserController(
            IRepositoryWrapper repo, 
            ILoggerManager logger, 
            IAuthService authService)
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
                _logger.LogError($"Something went wrong inside GetAllUsers() action: { ex.Message }");
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
                    _logger.LogError($"User with id: { id } was not found in db.");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned user with id: { id }");
                    return Ok(user);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetOwnerById() action { ex.Message }");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpGet("{id}/availablebalance")]
        public async Task<IActionResult> GetUserAvailableBalanceById(Guid id)
        {
            try
            {
                var availablebalance = await _repo.User.GetUserAvailableBalance(id);
                return Ok(availablebalance);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Unable to retrieve available balance from GetUserAvailableBalance() { ex.Message }");
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
                    _logger.LogError($"User with id { id } was not found.");
                    return NotFound();
                }
                else
                {
                    _logger.LogInfo($"Returned user with details for id: { id }");
                    return Ok(user);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetOwnerWithDetails action: { ex.Message }");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpPost("register")]
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

                _logger.LogInfo($"Successfully registered { registeredUser.Username }.");

                return CreatedAtRoute(routeName: "UserById", routeValues: new { id = registeredUser.Id }, value: registeredUser);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside CreateUser action: { ex.Message }");
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            try
            {
                var userToBeDeleted = await _repo.User.GetUserByIdAsync(id);

                if (userToBeDeleted == null)
                {
                    _logger.LogError($"User with id: { id } was not found");
                    return NotFound();
                }

                await _repo.User.DeleteUserAsync(userToBeDeleted);
                _logger.LogInfo($"User with id: { id } successfully deleted.");

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside DeleteUser(): { ex.Message }");
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
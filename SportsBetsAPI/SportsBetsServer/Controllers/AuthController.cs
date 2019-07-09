using System;
using Microsoft.AspNetCore.Mvc;
using Contracts;
using Entities.Models;
using Entities.ExtendedModels;

namespace SportsBetsServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private ILoggerManager _logger;
        private IAuthRepository _authRepo;
        public AuthController(IAuthRepository authRepo, ILoggerManager logger)
        {
            _logger = logger;
            _authRepo = authRepo;
        }
        [HttpPost("register")]
        public IActionResult Register(UserToRegister newUser)
        {
            try
            {
                newUser.Username = newUser.Username.ToLower();

                if (_authRepo.UserExists(newUser.Username))
                {
                    return BadRequest("Username already exists");
                }

                var userToCreate = new User {
                    Username = newUser.Username
                };

                var createdUser = _authRepo.Register(userToCreate, newUser.Password);

                _logger.LogInfo($"{newUser.Username} has successfully registered.");

                

                return Ok(newUser);
            }
            catch (Exception ex)
            {
                _logger.LogError($"{newUser.Username} unsuccessfully tried to register. {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
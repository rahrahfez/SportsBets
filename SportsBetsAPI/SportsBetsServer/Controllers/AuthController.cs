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
        private IRepositoryWrapper _repo;
        public AuthController(IRepositoryWrapper repo, ILoggerManager logger)
        {
            _logger = logger;
            _repo = repo;
        }
        [HttpPost("register")]
        public IActionResult Register(UserToRegister newUser)
        {
            try
            {
                newUser.Username = newUser.Username.ToLower();

                if (_repo.Auth.UserExists(newUser.Username))
                {
                    return BadRequest("Username already exists");
                }

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
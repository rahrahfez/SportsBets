using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Contracts.Repository;
using Entities.ExtendedModels;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using LoggerService;

namespace SportsBetsServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILoggerManager _logger;
        private readonly IRepositoryWrapper _repo;
        private readonly IConfiguration _config;
        public AuthController(IRepositoryWrapper repo, ILoggerManager logger, IConfiguration config)
        {
            _logger = logger;
            _repo = repo;
            _config = config;
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody]UserToRegister userToLogin)
        {
            var user = _repo.Auth.Login(userToLogin.Username.ToLower(), userToLogin.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            try
            {
                var claims = new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Credential.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Username)
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(claims),
                    NotBefore = DateTime.UtcNow,
                    Expires = DateTime.UtcNow.AddMinutes(1),
                    SigningCredentials = creds
                };

                var tokenHandler = new JwtSecurityTokenHandler();

                var token = tokenHandler.CreateToken(tokenDescriptor);

                var signedAndEncodedToken = tokenHandler.WriteToken(token);

                _logger.LogInfo($"{token} successfully created. Encoded as {signedAndEncodedToken}");
                return Ok(signedAndEncodedToken);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Login error {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
    
}
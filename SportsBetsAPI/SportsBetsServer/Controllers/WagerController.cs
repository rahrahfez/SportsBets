using System;
using System.Threading.Tasks;
using Contracts;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace SportsBetsServer.Controllers
{
    [Route("api/wager")]
    [ApiController]
    public class WagerController : ControllerBase
    {
        private readonly IRepositoryWrapper _repo;
        private readonly ILoggerManager _logger;
        
        public WagerController(IRepositoryWrapper repo, ILoggerManager logger)
        {
            _repo = repo;
            _logger = logger;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllWagers()
        {   
            try
            {   
                var wagers = await _repo.Wager.GetAllWagersAsync();
                _logger.LogInfo("Successfully retrieved all wagers");
                return Ok(wagers);

            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in GetAllWagers(): {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
        [HttpGet("{id}", Name = "WagerById")]
        public async Task<IActionResult> GetWagerAsync(Guid id) 
        {
            try
            {
                var wager = await _repo.Wager.GetWagerAsync(id);
                _logger.LogInfo($"Successfully retrieved wager with id {id}");
                return Ok(wager);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error in GetWagerAsync(): {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
        [HttpPost]
        public async Task<IActionResult> CreateWager([FromBody]Wager wager)
        {
            try
            {
                await _repo.Wager.CreateWagerAsync(wager);
                _logger.LogInfo($"Successfully created wager with id {wager.Id}");
                return CreatedAtRoute("WagerById", new { AcceptedById = Guid.Empty }, wager);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occurred in CreateWager(): {ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
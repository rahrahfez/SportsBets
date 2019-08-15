using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Contracts;
using Entities.Models;

namespace SportsBetsServer.Controllers
{
    [Route("api/numbergenerator")]
    [ApiController]
    public class NumberGeneratorWagerController : ControllerBase
    {
        private ILoggerManager _logger;
        private IRepositoryWrapper _repo;
        public NumberGeneratorWagerController(ILoggerManager logger, IRepositoryWrapper repo)
        {
            _logger = logger;
            _repo = repo;
        }
        [HttpGet("{id}", Name = "GetNumberGeneratorWagerById")]
        public async Task<IActionResult> GetNumberGeneratorWagerById(Guid id)
        {
            try
            {
                var ngWager = await _repo.NumberGeneratorWager.GetNumberGeneratorWagerByIdAsync(id);

                if (ngWager == null)
                {
                    return NotFound();
                }

                return Ok(ngWager);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong in GetNumberGeneratorWagerById(): { ex.Message }");
                return StatusCode(500, "Internal Server Error");
            }
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateNumberGeneratorWager([FromBody]NumberGeneratorWager ngWager)
        {
            try
            {
                var wager = new Wager
                { 
                    Id = Guid.NewGuid(),
                    CreatedAt = DateTime.Now 
                };

                await _repo.Wager.CreateWagerAsync(wager);

                await _repo.NumberGeneratorWager.CreateNumberGeneratorWagerAsync(ngWager);

                _logger.LogInfo($"Successfully created NumberGeneratorWager with id { ngWager.Id }");

                return CreatedAtRoute("GetNumberGeneratorWagerById", ngWager);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong in CreateNumberGeneratorWager(): { ex.Message }");
                return StatusCode(500, "Internal Server Error");
            }
        }        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNumberGeneratedWager(Guid id)
        {
            try
            {
                var wagerToBeDeleted = await _repo.NumberGeneratorWager.GetNumberGeneratorWagerByIdAsync(id);

                if (wagerToBeDeleted == null)
                {
                    return NotFound();
                }

                await _repo.NumberGeneratorWager.DeleteNumberGeneratorAsync(wagerToBeDeleted);

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong in DeleteNumberGeneratorWager(): { ex.Message }");
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
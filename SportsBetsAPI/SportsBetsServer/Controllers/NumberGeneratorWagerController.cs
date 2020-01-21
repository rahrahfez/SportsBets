// using System;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Contracts.Repository;
// using LoggerService;
// using Microsoft.AspNetCore.Authorization;

// namespace SportsBetsServer.Controllers
// {
//     [Route("api/numbergenerator")]
//     // [Authorize]
//     [ApiController]
//     public class NumberGeneratorWagerController : ControllerBase
//     {
//         private ILoggerManager _logger;
//         private IRepositoryWrapper _repo;
//         public NumberGeneratorWagerController(ILoggerManager logger, IRepositoryWrapper repo)
//         {
//             _logger = logger;
//             _repo = repo;
//         }
//         [HttpGet("{id}", Name = "GetNumberGeneratorWagerById")]
//         public async Task<IActionResult> GetNumberGeneratorWagerById(Guid id)
//         {
//             try
//             {
//                 var ngWager = await _repo.NumberGeneratorWager.GetNumberGeneratorWagerByIdAsync(id);

//                 if (ngWager == null)
//                 {
//                     return NotFound();
//                 }

//                 return Ok(ngWager);
//             }
//             catch (Exception ex)
//             {
//                 _logger.LogError($"Something went wrong in GetNumberGeneratorWagerById(): { ex.Message }");
//                 return StatusCode(500, "Internal Server Error");
//             }
//         }
        // [HttpPost("create")]
        // public async Task<IActionResult> CreateNumberGeneratorWager([FromBody]NumGenWagerExtended ngWager)
        // {
        //    try
        //    {
        //        var wager = new Wager
        //        { 
        //            Id = Guid.NewGuid(),
        //            CreatedAt = DateTime.Now,
        //            UserId = ngWager.UserId
        //        };

        //        await _repo.Wager.CreateWagerAsync(wager);

        //        var ngWagerToBeCreated = new NumberGeneratorWager
        //        {
        //            Id = Guid.NewGuid(),
        //            WagerId = wager.Id,
        //            AmountWagered = ngWager.AmountWagered,
        //            IsGreaterThan = ngWager.IsGreaterThan,
        //            IsAccepted = false
        //        };

        //        await _repo.NumberGeneratorWager.CreateNumberGeneratorWagerAsync(ngWagerToBeCreated);

        //        _logger.LogInfo($"Successfully created NumberGeneratorWager with id { ngWagerToBeCreated.Id }");

        //        return CreatedAtRoute(routeName: "GetNumberGeneratorWagerById", routeValues: new NumberGeneratorWager{ Id = ngWagerToBeCreated.Id }, value: ngWagerToBeCreated);
        //    }
        //    catch (Exception ex)
        //    {
        //        _logger.LogError($"Something went wrong in CreateNumberGeneratorWager(): { ex.Message }");
        //        return StatusCode(500, "Internal Server Error");
        //    }
        // }        
//         [HttpDelete("{id}")]
//         public async Task<IActionResult> DeleteNumberGeneratedWager(Guid id)
//         {
//             try
//             {
//                 var wagerToBeDeleted = await _repo.NumberGeneratorWager.GetNumberGeneratorWagerByIdAsync(id);

//                 if (wagerToBeDeleted == null)
//                 {
//                     return NotFound();
//                 }

//                 await _repo.NumberGeneratorWager.DeleteNumberGeneratorAsync(wagerToBeDeleted);

//                 return NoContent();
//             }
//             catch (Exception ex)
//             {
//                 _logger.LogError($"Something went wrong in DeleteNumberGeneratorWager(): { ex.Message }");
//                 return StatusCode(500, "Internal Server Error");
//             }
//         }
//     }
// }
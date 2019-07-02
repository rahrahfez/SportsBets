using Contracts;
using Microsoft.AspNetCore.Mvc;

namespace SportsBets_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private IRepositoryWrapper _repository;
    }
}
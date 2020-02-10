using System.Threading.Tasks;
using Entities.Models;

namespace Contracts.Repository
{
    public interface IBetRepository
    {
        Task<Bet> GetBetByIdAsync(int id);
        Task CreateBetAsync(Bet bet);
    }
}
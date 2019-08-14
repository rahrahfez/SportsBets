using System.Threading.Tasks;
using System;
using Entities.Models;

namespace Contracts
{
  public interface INumberGeneratorWagerRepository : IRepositoryBase<NumberGeneratorWager>
  {
    Task<NumberGeneratorWager> GetNumberGeneratorWagerByIdAsync(Guid id);
    Task CreateNumberGeneratorWagerAsync(NumberGeneratorWager ngWager);
    Task UpdateNumberGeneratorWagerAsync(NumberGeneratorWager dbNgWager, NumberGeneratorWager ngWager);
    Task DeleteNumberGeneratorAsync(NumberGeneratorWager ngWager);
  }
}
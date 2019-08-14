using System;
using System.Threading.Tasks;
using Contracts;
using Entities;
using Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace Repository
{
    public class NumberGeneratorWagerRepository : RepositoryBase<NumberGeneratorWager>, INumberGeneratorWagerRepository
    {
        public NumberGeneratorWagerRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {

        }
        public async Task<NumberGeneratorWager> GetNumberGeneratorWagerByIdAsync(Guid id)
        {
            return await FindByCondition(x => x.Id.Equals(id))
                .SingleOrDefaultAsync();
        }
        public async Task CreateNumberGeneratorWagerAsync(NumberGeneratorWager ngWager)
        {   
            ngWager.Id = Guid.NewGuid();
            Create(ngWager);
            await SaveAsync();
        }
        public async Task UpdateNumberGeneratorWagerAsync(NumberGeneratorWager dbNgWager, NumberGeneratorWager ngWager)
        {
            Update(dbNgWager);
            await SaveAsync();
        }
        public async Task DeleteNumberGeneratorAsync(NumberGeneratorWager ngWager)
        {
            Delete(ngWager);
            await SaveAsync();
        }
    }
}
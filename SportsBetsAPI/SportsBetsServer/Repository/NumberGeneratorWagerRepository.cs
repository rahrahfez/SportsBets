using System;
using System.Collections.Generic;
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
            return await FindByCondition(ng => ng.Id.Equals(id))
                .SingleOrDefaultAsync();
        }
        public async Task CreateNumberGeneratorWagerAsync(NumberGeneratorWager ngWager)
        {   
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
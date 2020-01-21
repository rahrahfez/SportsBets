// using System;
// using System.Collections.Generic;
// using System.Threading.Tasks;
// using Contracts.Repository;
// using Entities;
// using Entities.Models;
// using Microsoft.EntityFrameworkCore;

// namespace Repository
// {
//     public class NumberGeneratorWagerRepository : RepositoryBase<NumberGeneratorWager>, IWagerRepository
//     {
//         public NumberGeneratorWagerRepository(RepositoryContext repositoryContext)
//             :base(repositoryContext)
//         {

//         }
//         public async Task<NumberGeneratorWager> GetWagerByIdAsync(Guid id)
//         {
//             return await FindByCondition(ng => ng.Id.Equals(id))
//                 .SingleOrDefaultAsync();
//         }
//         public async Task<NumberGeneratorWager> GetAllWagersByUserIdAsync(Guid id)
//         {
//             throw new NotImplementedException();
//         }
//         public async Task CreateWagerAsync(NumberGeneratorWager ngWager)
//         {   
//             Create(ngWager);
//             await SaveAsync();
//         }
//         public async Task UpdateWagerAsync(NumberGeneratorWager dbNgWager, NumberGeneratorWager ngWager)
//         {
//             Update(dbNgWager);
//             await SaveAsync();
//         }
//         public async Task DeleteWagerAsync(NumberGeneratorWager ngWager)
//         {
//             Delete(ngWager);
//             await SaveAsync();
//         }
//     }
// }
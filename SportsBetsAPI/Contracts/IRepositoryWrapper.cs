namespace Contracts
{
    public interface IRepositoryWrapper
    {
         IUserRepository User { get; }
         IWagerRepository Wager { get; }
         void Save();
    }
}
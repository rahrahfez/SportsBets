namespace Contracts
{
    public interface IRepositoryWrapper
    {
         IUserRepository User { get; }
         IWagerRepository Wager { get; }
         IAuthRepository Auth { get; }
         void Save();
    }
}
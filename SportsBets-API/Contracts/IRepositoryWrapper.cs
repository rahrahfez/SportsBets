namespace SportsBets_API
{
  public interface IRepositoryWrapper
  {
    IOwnerRepository Owner { get; }
    IAccountRepository Account { get; }
    void Save();
  }
}
using Entities.Models;

namespace Contracts 
{
  public interface IAuthService 
  {
    User RegisterNewUser(User user);
  }
}
using Entities.Models;
using Entities.ExtendedModels;

namespace Contracts 
{
  public interface IAuthService 
  {
    User RegisterNewUser(UserToRegister user);
  }
}
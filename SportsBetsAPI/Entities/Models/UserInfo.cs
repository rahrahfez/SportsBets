using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("user_info")]
    public class UserInfo
    {
        public User UserId { get; set; }
        public string Email { get; set; }
    }
}
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("users")]
    public class User
    {
        [Key]
        [Column("UserId")]
        public Guid Id { get; set; }
        [Required(ErrorMessage="Username is required")]
        [StringLength(30, ErrorMessage="Username cannot be longer than 30 characters")]
        public string Username { get; set; }
        [Required(ErrorMessage="Email is required")]
        [StringLength(60, ErrorMessage="Email cannot be longer than 60 characters")]
        public string Email { get; set; }
        public int AvailableBalance { get; set; } = 100;
        public DateTime DateCreated { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
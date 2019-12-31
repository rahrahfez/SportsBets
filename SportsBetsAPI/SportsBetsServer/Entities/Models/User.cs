using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models 
{
    [Table("user")]
    public class User
    {
        [Key]
        [Column("UserId")]
        public Guid Id { get; set; }
        [Required(ErrorMessage="Username is required")]
        [StringLength(30, ErrorMessage="Username cannot be longer than 30 characters")]
        public string Username { get; set; }
        public int AvailableBalance { get; set; } = 100;
        public DateTime DateCreated { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public ICollection<Wager> Wagers { get; set; }
    }
}
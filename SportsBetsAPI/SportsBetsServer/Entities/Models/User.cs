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
        public Guid Id { get; set; }
        [Required(ErrorMessage="Username is required")]
        [StringLength(30, ErrorMessage="Username cannot be longer than 30 characters")]
        public string Username { get; set; }
        [Required]
        public int AvailableBalance { get; set; } 
        [Required]
        public DateTime DateCreated { get; set; }
        [ForeignKey("UserId")]
        [Column("Id")]
        public Credential Credential { get; set; }
        [ForeignKey("WagerId")]
        public ICollection<Wager> Wagers { get; set; }
    }
}
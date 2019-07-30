using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("wagers")]
    public class Wager
    {
        [Key]
        [Column("WagerId")]
        public Guid Id { get; set; }
        public Guid CreatedById { get; set; }
        public Nullable<Guid> AcceptedById { get; set; }
        public int WagerAmount { get; set; }
        public DateTime CreatedAt { get; set; }
        [ForeignKey("CreatedById")]
        public User CreatedBy { get; set; }
        [ForeignKey("AcceptedById")]
        
        public User AcceptedBy { get; set; }
    }
}
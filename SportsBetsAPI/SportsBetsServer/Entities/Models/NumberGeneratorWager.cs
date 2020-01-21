// using System;
// using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

// namespace Entities.Models
// {
//     [Table("number_generator_wager")]
//     public class NumberGeneratorWager : Wager
//     {
//         [Key]
//         public Guid Id { get; set; }
//         [ForeignKey("WagerId")]
//         public Guid WagerId { get; set; }
//         public bool IsGreaterThan { get; set; }
//         public bool IsAccepted { get; set; } 
//     }
// }
using System;
using System.ComponentModel.DataAnnotations;
using Entities.Models;

namespace Entities.ExtendedModels
{
    public class UserToRegister
    {
        [Required(ErrorMessage = "Username is required.")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }
        [Required]
        [StringLength(12), MinLength(4, ErrorMessage = "Password must be at least 4 characters.")]
        public string Password { get; set; }
        [Required]
        [StringLength(12), MinLength(4, ErrorMessage = "Password must be at least 4 characters.")]
        [Compare("Password", ErrorMessage = "Passwords do not match.")]
        public string PasswordConfirmation { get; set ;}
        public DateTime DateOfBirth { get; set; }
        public DateTime DateCreated { get; set; }
        public UserToRegister() {}
        public UserToRegister(User user)
        {
            Username = user.Username;
            DateCreated = user.DateCreated;
        }
    }
}
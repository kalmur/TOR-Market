using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Listing : BaseEntity
    {
        public int SellRent { get; set; }
        [Required]
        public string Name { get; set; }
        public string Category { get; set; }
        public int Price { get; set; }
        public string Address { get; set; }
        public string Apartment { get; set; }
        public int CityId { get; set; }
        public City City { get; set; }
        public string County { get; set; }
        public string Zip { get; set; }
        public DateTime AvailableFrom { get; set; }
        public string Description { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public DateTime PostedOn { get; set; } = DateTime.Now;

        [ForeignKey("User")]
        public int PostedBy { get; set; }
        public User User { get; set; }
    }
}
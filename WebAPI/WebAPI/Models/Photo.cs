using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("Photos")]
    public class Photo : BaseEntity
    {
        [Required]
        public string ImageUrl { get; set; }
        public bool IsPrimary { get; set; }
        public int ListingId { get; set; }

        // Cascade delete + linking entities
        public Listing Listing { get; set; }
    }
}
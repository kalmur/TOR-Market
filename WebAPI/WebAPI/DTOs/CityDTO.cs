using System.ComponentModel.DataAnnotations;

namespace WebAPI.DTOs
{
    public class CityDTO
    {
        public int Id { get; set; }

        [Required (ErrorMessage = "Name is mandatory")]
        [StringLength(15, MinimumLength = 2)]
        [RegularExpression(".*[a-zA-Z]+.*", ErrorMessage = "Entering only numerics are not allowed!")]
        public string Name { get; set; }

        [Required]
        public string Country { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class City : BaseEntity
    {
        public string Name { get; set; }

        public string Country { get; set; }
    }
}

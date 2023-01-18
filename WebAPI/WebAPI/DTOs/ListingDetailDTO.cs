using System.ComponentModel.DataAnnotations;
using WebAPI.Models;

namespace WebAPI.DTOs
{
    public class ListingDetailDTO : ListingListDTO
    {
        public DateTime availableFrom { get; set; }
        public string description { get; set; }
    }
}
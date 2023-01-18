namespace WebAPI.DTOs
{
    public class ListingListDTO
    {
        public int Id { get; set; }
        public int sellRent { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public int Price { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
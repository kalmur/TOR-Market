using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IListingRepository
    {
        Task<IEnumerable<Listing>> GetListingsAsync(int sellRent);
        Task<Listing> GetListingDetailAsync(int id);
        void AddListing(Listing listing);
        void DeleteListing(int id);
    }
}
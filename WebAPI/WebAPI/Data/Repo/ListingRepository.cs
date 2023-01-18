using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class ListingRepository : IListingRepository
    {
        private readonly DataContext dc;

        public ListingRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public void AddListing(Listing listing)
        {
            throw new NotImplementedException();
        }

        public void DeleteListing(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Listing>> GetListingsAsync(int sellRent)
        {
            var listings = await dc.Listings
            .Include(p => p.City)
            .Where(p => p.SellRent == sellRent)
            .ToListAsync();
            return listings;
        }

        public async Task<Listing> GetListingDetailAsync(int id)
        {
            var listings = await dc.Listings
            .Include(p => p.City)
            .Where(p => p.Id == id)
            .FirstAsync();
            
            return listings;
        }
    }
}
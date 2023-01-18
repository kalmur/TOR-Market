using WebAPI.Data.Repo;
using WebAPI.Interfaces;

namespace WebAPI.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;

        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }
        ICityRepository IUnitOfWork.CityRepository =>
            new CityRepository(dc);

        public IUserRepository UserRepository =>
            new UserRepository(dc);

        public IListingRepository ListingRepository => 
            new ListingRepository(dc);

        async Task<bool> IUnitOfWork.SaveAsync()
        {
            // value > 0 - successfully changed

            return await dc.SaveChangesAsync() > 0;
        }
    }
}

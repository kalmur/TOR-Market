namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {
        ICityRepository CityRepository { get; }

        IUserRepository UserRepository { get; }

        IListingRepository ListingRepository { get; }

        Task<bool> SaveAsync();
    }
}

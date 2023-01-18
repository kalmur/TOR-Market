using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DTOs;
using WebAPI.Interfaces;

namespace WebAPI.Controllers
{
    public class ListingController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public ListingController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }

        [HttpGet("type/{sellRent}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetListingList(int sellRent)
        {
            var listings = await uow.ListingRepository.GetListingsAsync(sellRent);
            var listingListDTO = mapper.Map<IEnumerable<ListingListDTO>>(listings);
            return Ok(listingListDTO);
        }

        [HttpGet("detail/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetPropertyDetail(int id)
        {
            var listing = await uow.ListingRepository.GetListingDetailAsync(id);
            var listingDTO = mapper.Map<ListingDetailDTO>(listing);
            return Ok(listingDTO);
        }
    }
}
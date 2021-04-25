using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles :Profile
    {
        
        public AutoMapperProfiles()
        {
            CreateMap<AppUser,MemberDto>()
            .ForMember(desc => desc.PhotoUrl,opt => opt.MapFrom(scr => 
            scr.Photos.FirstOrDefault(x =>x.Ismain).Url))
            .ForMember(desc =>desc.Age,opt => opt.MapFrom(scr =>scr.DateOfBirth.CalculateAge()));
            CreateMap<Photo,PhotoDto>();

            CreateMap<MemberUpdateDto,AppUser>();
        }
    }
}
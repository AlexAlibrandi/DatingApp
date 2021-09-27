using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    //only contains the signatures of the functionality the interface provides
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
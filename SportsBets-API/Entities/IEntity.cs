using System;

namespace Entities
{
    public interface IEntity
    {
         Guid OwnerId { get; set; }
    }
}
using System;
using System.Collections.Generic;

namespace Electro_Mart.Models;

public partial class Customer
{
    public int Id { get; set; }

    public int LoginId { get; set; }

    public virtual Login Login { get; set; } = null!;

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

}

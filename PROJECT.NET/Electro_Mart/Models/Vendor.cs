using System;
using System.Collections.Generic;

namespace Electro_Mart.Models;

public partial class Vendor
{
    public int Id { get; set; }

    public int LoginId { get; set; }

    public string? ShopName { get; set; }

    public string ShopactLicence { get; set; } = null!;

    public long Aadhar { get; set; }

    public virtual Login Login { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}

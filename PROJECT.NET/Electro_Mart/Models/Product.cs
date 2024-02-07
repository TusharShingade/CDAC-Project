using System;
using System.Collections.Generic;

namespace Electro_Mart.Models;

public partial class Product
{
    public int Id { get; set; }

    public int? CatId { get; set; }

    public int? BrandId { get; set; }

    public int? VId { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public double Price { get; set; }

    public int StockLevel { get; set; }

    public byte[]? ImgUrl { get; set; }

    public virtual Brand? Brand { get; set; }

    public virtual Category? Cat { get; set; }

    public virtual ICollection<Ordereditem> Ordereditems { get; set; } = new List<Ordereditem>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual Vendor? VIdNavigation { get; set; }
}

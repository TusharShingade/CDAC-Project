using System;
using System.Collections.Generic;

namespace Electro_Mart.Models;

public partial class Ordereditem
{
    public int Id { get; set; }

    public int OrderId { get; set; }

    public int ProdId { get; set; }

    public int? Quantity { get; set; }

    public double Price { get; set; }

    public virtual Order Order { get; set; } = null!;

    public virtual Product Prod { get; set; } = null!;
}

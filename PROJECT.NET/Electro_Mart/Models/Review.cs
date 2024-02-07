using System;
using System.Collections.Generic;

namespace Electro_Mart.Models;

public partial class Review
{
    public int Id { get; set; }

    public int CustId { get; set; }

    public int ProdId { get; set; }

    public int Rating { get; set; }

    public virtual Customer Cust { get; set; } = null!;

    public virtual Product Prod { get; set; } = null!;
}

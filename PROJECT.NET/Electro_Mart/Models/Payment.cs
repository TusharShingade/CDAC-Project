using System;
using System.Collections.Generic;

namespace Electro_Mart.Models;

public partial class Payment
{
    public int Id { get; set; }

    public int OrderId { get; set; }

    public DateOnly Date { get; set; }

    public double Amount { get; set; }

    public virtual Order Order { get; set; } = null!;
}

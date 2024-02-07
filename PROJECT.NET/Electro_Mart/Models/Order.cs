using System;
using System.Collections.Generic;

namespace Electro_Mart.Models;

public partial class Order
{
    public int Id { get; set; }

    public int CustId { get; set; }

    public DateOnly Date { get; set; }

    public double TotalAmount { get; set; }

    public string? ShippingAddress { get; set; }

    public virtual Customer Cust { get; set; } = null!;

    public virtual ICollection<Ordereditem> Ordereditems { get; set; } = new List<Ordereditem>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmployeeRegisterAPI.Models
{
  public class EmployeeDBContext : DbContext
  {
    public EmployeeDBContext(DbContextOptions<EmployeeDBContext> options) : base(options)
    {

    }

    public DbSet<EmployeeModel> Employees { get; set; }
  }
}
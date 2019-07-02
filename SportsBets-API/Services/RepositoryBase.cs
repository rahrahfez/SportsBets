using System;
using System.Linq;
using System.Linq.Expressions;
using Entities;
using Microsoft.EntityFrameworkCore;
using Contracts;

namespace SportsBets_API
{
  public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
  {
    protected RepositoryContext RepositoryContext { get; set; }
    public RepositoryBase(RepositoryContext repositoryContext)
    {
        this.RepositoryContext = repositoryContext;
    }
    public void Create(T entity)
    {
      this.RepositoryContext.Set<T>().Add(entity);
    }
    public void Update(T entity)
    {
      this.RepositoryContext.Set<T>().Update(entity);
    }

    public void Delete(T entity)
    {
      this.RepositoryContext.Set<T>().Remove(entity);
    }

    public IQueryable<T> FindAll()
    {
      return this.RepositoryContext.Set<T>().AsNoTracking();
    }

    public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
    {
      return this.RepositoryContext.Set<T>().Where(expression).AsNoTracking();
    }
  }
}
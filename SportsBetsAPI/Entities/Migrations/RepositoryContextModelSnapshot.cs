﻿// <auto-generated />
using System;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Entities.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    partial class RepositoryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Entities.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("UserId");

                    b.Property<int>("AvailableBalance");

                    b.Property<DateTime>("DateCreated");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(60);

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.ToTable("users");
                });

            modelBuilder.Entity("Entities.Models.Wager", b =>
                {
                    b.Property<Guid>("WagerId")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("Bettor")
                        .HasColumnName("Bettor");

                    b.Property<Guid>("Bookmaker")
                        .HasColumnName("Bookmaker");

                    b.Property<DateTime>("TimeCreated");

                    b.Property<int>("WagerAmount");

                    b.HasKey("WagerId");

                    b.ToTable("wagers");
                });
#pragma warning restore 612, 618
        }
    }
}

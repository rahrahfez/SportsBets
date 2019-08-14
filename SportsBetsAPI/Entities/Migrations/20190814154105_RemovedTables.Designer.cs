﻿// <auto-generated />
using System;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Entities.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    [Migration("20190814154105_RemovedTables")]
    partial class RemovedTables
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Entities.Models.NumberGeneratorWager", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AmountWagered");

                    b.Property<bool>("IsGreaterThan");

                    b.Property<Guid?>("WagerId");

                    b.HasKey("Id");

                    b.HasIndex("WagerId");

                    b.ToTable("number_generator_wager");
                });

            modelBuilder.Entity("Entities.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("UserId");

                    b.Property<int>("AvailableBalance");

                    b.Property<DateTime>("DateCreated");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.ToTable("user");
                });

            modelBuilder.Entity("Entities.Models.Wager", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("WagerId");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<Guid?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("wager");
                });

            modelBuilder.Entity("Entities.Models.NumberGeneratorWager", b =>
                {
                    b.HasOne("Entities.Models.Wager", "Wager")
                        .WithMany("NumberGeneratorWagers")
                        .HasForeignKey("WagerId");
                });

            modelBuilder.Entity("Entities.Models.Wager", b =>
                {
                    b.HasOne("Entities.Models.User", "User")
                        .WithMany("Wagers")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}

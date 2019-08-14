using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Entities.Migrations
{
    public partial class ReworkedTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "user",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    Username = table.Column<string>(maxLength: 30, nullable: false),
                    AvailableBalance = table.Column<int>(maxLength: 60, nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "wager",
                columns: table => new
                {
                    WagerId = table.Column<Guid>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_wager", x => x.WagerId);
                });

            migrationBuilder.CreateTable(
                name: "number_generator_wager",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: true),
                    WagerId = table.Column<Guid>(nullable: true),
                    AmountWagered = table.Column<int>(nullable: false),
                    IsGreaterThan = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_number_generator_wager", x => x.Id);
                    table.ForeignKey(
                        name: "FK_number_generator_wager_user_UserId",
                        column: x => x.UserId,
                        principalTable: "user",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_number_generator_wager_wager_WagerId",
                        column: x => x.WagerId,
                        principalTable: "wager",
                        principalColumn: "WagerId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_number_generator_wager_UserId",
                table: "number_generator_wager",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_number_generator_wager_WagerId",
                table: "number_generator_wager",
                column: "WagerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "number_generator_wager");

            migrationBuilder.DropTable(
                name: "user");

            migrationBuilder.DropTable(
                name: "wager");
        }
    }
}

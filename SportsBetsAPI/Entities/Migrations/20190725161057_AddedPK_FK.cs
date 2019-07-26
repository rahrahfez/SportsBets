using Microsoft.EntityFrameworkCore.Migrations;

namespace Entities.Migrations
{
    public partial class AddedPK_FK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TimeCreated",
                table: "wagers",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "Bookmaker",
                table: "wagers",
                newName: "CreatedBy");

            migrationBuilder.RenameColumn(
                name: "Bettor",
                table: "wagers",
                newName: "AcceptedBy");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatedBy",
                table: "wagers",
                newName: "Bookmaker");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "wagers",
                newName: "TimeCreated");

            migrationBuilder.RenameColumn(
                name: "AcceptedBy",
                table: "wagers",
                newName: "Bettor");
        }
    }
}

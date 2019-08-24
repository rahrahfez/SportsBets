using Microsoft.EntityFrameworkCore.Migrations;

namespace Entities.Migrations
{
    public partial class NewColumnToNumberGeneratorWagerTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsAccepted",
                table: "number_generator_wager",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsAccepted",
                table: "number_generator_wager");
        }
    }
}

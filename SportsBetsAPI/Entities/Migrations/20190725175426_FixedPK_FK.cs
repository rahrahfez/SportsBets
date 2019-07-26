using Microsoft.EntityFrameworkCore.Migrations;

namespace Entities.Migrations
{
    public partial class FixedPK_FK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatedBy",
                table: "wagers",
                newName: "CreatedById");

            migrationBuilder.RenameColumn(
                name: "AcceptedBy",
                table: "wagers",
                newName: "AcceptedById");

            migrationBuilder.CreateIndex(
                name: "IX_wagers_AcceptedById",
                table: "wagers",
                column: "AcceptedById");

            migrationBuilder.CreateIndex(
                name: "IX_wagers_CreatedById",
                table: "wagers",
                column: "CreatedById");

            migrationBuilder.AddForeignKey(
                name: "FK_wagers_users_AcceptedById",
                table: "wagers",
                column: "AcceptedById",
                principalTable: "users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_wagers_users_CreatedById",
                table: "wagers",
                column: "CreatedById",
                principalTable: "users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_wagers_users_AcceptedById",
                table: "wagers");

            migrationBuilder.DropForeignKey(
                name: "FK_wagers_users_CreatedById",
                table: "wagers");

            migrationBuilder.DropIndex(
                name: "IX_wagers_AcceptedById",
                table: "wagers");

            migrationBuilder.DropIndex(
                name: "IX_wagers_CreatedById",
                table: "wagers");

            migrationBuilder.RenameColumn(
                name: "CreatedById",
                table: "wagers",
                newName: "CreatedBy");

            migrationBuilder.RenameColumn(
                name: "AcceptedById",
                table: "wagers",
                newName: "AcceptedBy");
        }
    }
}

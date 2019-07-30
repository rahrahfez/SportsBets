using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Entities.Migrations
{
    public partial class AcceptedByIsNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_wagers_users_AcceptedById",
                table: "wagers");

            migrationBuilder.AlterColumn<Guid>(
                name: "AcceptedById",
                table: "wagers",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AddForeignKey(
                name: "FK_wagers_users_AcceptedById",
                table: "wagers",
                column: "AcceptedById",
                principalTable: "users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_wagers_users_AcceptedById",
                table: "wagers");

            migrationBuilder.AlterColumn<Guid>(
                name: "AcceptedById",
                table: "wagers",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_wagers_users_AcceptedById",
                table: "wagers",
                column: "AcceptedById",
                principalTable: "users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

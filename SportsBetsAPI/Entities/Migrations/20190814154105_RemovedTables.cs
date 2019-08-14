using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Entities.Migrations
{
    public partial class RemovedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_number_generator_wager_user_UserId",
                table: "number_generator_wager");

            migrationBuilder.DropIndex(
                name: "IX_number_generator_wager_UserId",
                table: "number_generator_wager");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "number_generator_wager");

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "wager",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_wager_UserId",
                table: "wager",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_wager_user_UserId",
                table: "wager",
                column: "UserId",
                principalTable: "user",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_wager_user_UserId",
                table: "wager");

            migrationBuilder.DropIndex(
                name: "IX_wager_UserId",
                table: "wager");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "wager");

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "number_generator_wager",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_number_generator_wager_UserId",
                table: "number_generator_wager",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_number_generator_wager_user_UserId",
                table: "number_generator_wager",
                column: "UserId",
                principalTable: "user",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

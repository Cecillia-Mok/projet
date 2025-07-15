/*
  Warnings:

  - You are about to drop the column `gameGame_id` on the `Card` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Card` DROP FOREIGN KEY `Card_gameGame_id_fkey`;

-- DropIndex
DROP INDEX `Card_gameGame_id_fkey` ON `Card`;

-- AlterTable
ALTER TABLE `Card` DROP COLUMN `gameGame_id`,
    ADD COLUMN `game_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`game_id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `game_id` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Game` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Card` DROP FOREIGN KEY `Card_game_id_fkey`;

-- DropIndex
DROP INDEX `Card_game_id_fkey` ON `Card`;

-- AlterTable
ALTER TABLE `Card` DROP COLUMN `game_id`,
    ADD COLUMN `gameGame_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `Game` DROP COLUMN `status`,
    ADD COLUMN `statut` VARCHAR(191) NOT NULL DEFAULT 'en cours';

-- CreateTable
CREATE TABLE `GameCard` (
    `game_id` INTEGER NOT NULL,
    `card_id` INTEGER NOT NULL,

    PRIMARY KEY (`game_id`, `card_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_gameGame_id_fkey` FOREIGN KEY (`gameGame_id`) REFERENCES `Game`(`game_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameCard` ADD CONSTRAINT `GameCard_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`game_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameCard` ADD CONSTRAINT `GameCard_card_id_fkey` FOREIGN KEY (`card_id`) REFERENCES `Card`(`card_id`) ON DELETE CASCADE ON UPDATE CASCADE;

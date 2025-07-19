/*
  Warnings:

  - You are about to drop the column `game_id` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `statut` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `texte` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `titre` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `consequence` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `default_next_card` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `texte` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `statut` on the `Game` table. All the data in the column will be lost.
  - Added the required column `text` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Choice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Card` DROP FOREIGN KEY `Card_game_id_fkey`;

-- DropForeignKey
ALTER TABLE `Choice` DROP FOREIGN KEY `Choice_card_id_fkey`;

-- DropForeignKey
ALTER TABLE `Choice` DROP FOREIGN KEY `Choice_default_next_card_fkey`;

-- DropIndex
DROP INDEX `Card_game_id_fkey` ON `Card`;

-- DropIndex
DROP INDEX `Choice_card_id_fkey` ON `Choice`;

-- DropIndex
DROP INDEX `Choice_default_next_card_fkey` ON `Choice`;

-- AlterTable
ALTER TABLE `Card` DROP COLUMN `game_id`,
    DROP COLUMN `statut`,
    DROP COLUMN `texte`,
    DROP COLUMN `titre`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'continuer',
    ADD COLUMN `text` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Choice` DROP COLUMN `consequence`,
    DROP COLUMN `default_next_card`,
    DROP COLUMN `texte`,
    ADD COLUMN `next_card_id` INTEGER NULL,
    ADD COLUMN `text` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Game` DROP COLUMN `statut`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'en cours';

-- CreateTable
CREATE TABLE `GameChoice` (
    `game_id` INTEGER NOT NULL,
    `card_id` INTEGER NOT NULL,
    `choice_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`game_id`, `card_id`, `choice_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Choice` ADD CONSTRAINT `Choice_next_card_id_fkey` FOREIGN KEY (`next_card_id`) REFERENCES `Card`(`card_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Choice` ADD CONSTRAINT `Choice_card_id_fkey` FOREIGN KEY (`card_id`) REFERENCES `Card`(`card_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameChoice` ADD CONSTRAINT `GameChoice_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `Game`(`game_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameChoice` ADD CONSTRAINT `GameChoice_card_id_fkey` FOREIGN KEY (`card_id`) REFERENCES `Card`(`card_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GameChoice` ADD CONSTRAINT `GameChoice_choice_id_fkey` FOREIGN KEY (`choice_id`) REFERENCES `Choice`(`choice_id`) ON DELETE CASCADE ON UPDATE CASCADE;

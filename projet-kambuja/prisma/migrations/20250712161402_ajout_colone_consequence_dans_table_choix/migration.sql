/*
  Warnings:

  - Added the required column `consequence` to the `Choice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Choice` ADD COLUMN `consequence` VARCHAR(191) NOT NULL;

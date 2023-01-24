-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(3000) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "avatar" VARCHAR(2000),
    "anketaId" BIGINT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anketa" (
    "id" BIGSERIAL NOT NULL,
    "birthDay" TIMESTAMP(3) NOT NULL,
    "address" VARCHAR(255) NOT NULL,

    CONSTRAINT "Anketa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "short_title" VARCHAR(30) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "update_at" TIMESTAMP(3),

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_anketaId_fkey" FOREIGN KEY ("anketaId") REFERENCES "Anketa"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

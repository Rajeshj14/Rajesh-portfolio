-- CreateTable
CREATE TABLE "HireRequest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "budget" TEXT NOT NULL,

    CONSTRAINT "HireRequest_pkey" PRIMARY KEY ("id")
);

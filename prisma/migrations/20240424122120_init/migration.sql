-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

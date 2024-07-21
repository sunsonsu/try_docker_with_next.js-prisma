-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "nametest" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_nametest_key" ON "Test"("nametest");

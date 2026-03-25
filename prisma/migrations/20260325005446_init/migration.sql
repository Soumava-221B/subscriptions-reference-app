-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" TIMESTAMP(3),
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "emailVerified" BOOLEAN DEFAULT false,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillingSchedule" (
    "id" SERIAL NOT NULL,
    "shop" TEXT NOT NULL,
    "hour" INTEGER NOT NULL DEFAULT 10,
    "timezone" TEXT NOT NULL DEFAULT 'America/Toronto',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillingSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DunningTracker" (
    "id" SERIAL NOT NULL,
    "shop" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "billingCycleIndex" INTEGER NOT NULL,
    "failureReason" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3),
    "completedReason" TEXT,

    CONSTRAINT "DunningTracker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BillingSchedule_shop_key" ON "BillingSchedule"("shop");

-- CreateIndex
CREATE INDEX "DunningTracker_completedAt_idx" ON "DunningTracker"("completedAt");

-- CreateIndex
CREATE UNIQUE INDEX "DunningTracker_shop_contractId_billingCycleIndex_failureRea_key" ON "DunningTracker"("shop", "contractId", "billingCycleIndex", "failureReason");

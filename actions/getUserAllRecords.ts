"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getUserAllRecords(): Promise<{
  totalHours?: number;
  daysWithRecord?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const allRecords = await db.record.findMany({
      where: { userId: userId },
    });

    // Total hours slept
    const totalHours = allRecords.reduce(
      (sum, record) => sum + record.amount,
      0,
    );

    // Number of days with valid record
    const daysWithRecord = allRecords.filter(
      (record) => record.amount > 0,
    ).length;

    return { totalHours, daysWithRecord };
  } catch (error) {
    console.log(`Can not fetch all recors! Error: ${error}`);
    return { error: "Failed to fetch all records from database!" };
  }
}

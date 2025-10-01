import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function getBestWorstRecord(): Promise<{
  bestRecord?: number;
  worstRecord?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    // Return Array of objects
    const records = await db.record.findMany({
      where: { userId },
      select: { amount: true },
    });

    if (!records || records.length === 0) {
      return { bestRecord: 0, worstRecord: 0 };
    }

    // Array of amounts value
    const amounts: number[] = records.map((record) => record.amount);

    const bestRecord = Math.max(...amounts);
    const worstRecord = Math.min(...amounts);

    return { bestRecord, worstRecord };
  } catch (error) {
    console.error("Can not fetch sleep amounts", error);
    return { error: "Failed to fetch sleep amounts!" };
  }
}

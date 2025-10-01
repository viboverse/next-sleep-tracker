"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteRecord(recordId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    await db.record.delete({
      where: { userId, id: recordId },
    });

    revalidatePath("/");

    return { message: "The Record Deleted!" };
  } catch (error) {
    console.error("The record can not be deleted, ", error);
    return { error: "The Record can not be deleted from database!" };
  }
}

"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function addSleepRecord(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "You must be logged in to add sleep records",
    };
  }

  const text = formData.get("text") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const dateString = formData.get("date") as string;

  //  Convert date string to Date object
  const date = dateString ? new Date(dateString + "T00:00:00.000Z") : null;

  if (!text) {
    return { success: false, message: "Please select sleep quality" };
  }
  if (!date) {
    return { success: false, message: "Please select a date" };
  }
  if (isNaN(amount) || amount < 0 || amount > 12) {
    return {
      success: false,
      message: "Invalid hours slept value",
    };
  }

  try {
    // check Existance of The Sleep Recrod
    const existingRecord = await db.record.findFirst({
      where: {
        userId,
        date: date,
      },
    });

    if (existingRecord) {
      await db.record.update({
        where: { id: existingRecord.id },
        data: {
          text: text,
          amount: amount,
        },
      });

      revalidatePath("/");

      return {
        success: true,
        message: "Sleep record updated successfully!",
      };
    } else {
      // Create New Record
      await db.record.create({
        data: {
          userId: userId,
          text: text,
          date: date,
          amount: amount,
        },
      });

      revalidatePath("/");
      return {
        success: true,
        message: "Sleep record added successfully!",
      };
    }
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      message: "Failed to save sleep record. Please try again.",
    };
  }
}

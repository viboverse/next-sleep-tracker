"use client";
import { deleteRecord } from "@/actions/deleteRecord";
import { Record } from "@/types/Record";
import { useState } from "react";

export default function RecordItem({ record }: { record: Record }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeleteItem(recordId: string) {
    setIsDeleting(true);
    await deleteRecord(recordId);
    setIsDeleting(false);
  }

  return (
    <li
      className={`mb-4 flex items-center justify-between rounded-lg border-t border-t-gray-300 bg-white p-4 shadow-lg ${
        record?.amount < 7
          ? "border-l-4 border-red-500"
          : "border-l-4 border-green-500"
      }`}
    >
      {/* The Record's Data */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          {new Date(record.date).toLocaleDateString()}
        </span>
        <span className="text-lg font-bold text-gray-800">
          {record.amount} Hours
        </span>
        <span className="text-sm text-gray-600">{record.text}</span>
      </div>

      {/* The Remove button */}
      <button
        onClick={() => handleDeleteItem(record.id)}
        disabled={isDeleting}
        className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-in-out ${
          isDeleting
            ? "cursor-not-allowed bg-gray-100"
            : "bg-red-50 hover:bg-red-100 active:scale-95"
        }`}
        title="Delete record"
      >
        {isDeleting ? (
          /* Loading spinner */
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-red-300 border-t-red-600"></div>
        ) : (
          /* Trash icon */
          <svg
            className="h-4 w-4 text-red-500 transition-colors group-hover:text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        )}
      </button>
    </li>
  );
}

"use client";

import { addSleepRecord } from "@/actions/addSleepRecord";
import { useRef, useState } from "react";

type AddNewRecordProps = {
  text: string;
  date: string;
  amount: number;
};

type MessageProps = {
  type: "success" | "error";
  text: string;
};

const today = new Date().toISOString().split("T")[0];

export default function AddNewRecord() {
  const [sleepData, setSleepData] = useState<AddNewRecordProps>({
    text: "",
    date: today,
    amount: 6,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<MessageProps | null>(null);

  function updatedateField(
    field: keyof AddNewRecordProps,
    value: string | number,
  ) {
    setMessage(null);

    setSleepData((prevDate) => ({
      ...prevDate,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(formRef.current!);

    console.log(sleepData.amount);
    try {
      // Call the server action
      const result = await addSleepRecord(formData);

      setLoading(false);

      if (result.success) {
        setMessage({ type: "success", text: result.message });
        // Reset form on success
        setSleepData({
          text: "",
          date: today,
          amount: 6,
        });
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (err) {
      setLoading(false);
      console.log(`Can not add record! Error: ${err}`);
      setMessage({ type: "error", text: "An unexpected error occurred" });
    }
  }

  return (
    <section className="rounded-lg bg-white shadow-lg">
      <div className="flex w-full flex-col items-center justify-center p-8">
        <h3 className="mb-6 text-center text-2xl font-bold text-indigo-600">
          Track Your Sleep
        </h3>
        <form onSubmit={handleSubmit} ref={formRef}>
          {/* Sleep Quality and Date */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            {/* Sleep Qulity */}
            <div className="flex-1">
              <label
                htmlFor="text"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Sleep Quality
              </label>
              <select
                id="text"
                name="text"
                value={sleepData.text}
                onChange={(e) => updatedateField("text", e.target.value)}
                className="block w-full cursor-pointer rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                // required
              >
                <option value="" disabled>
                  Sleep quality ...
                </option>
                <option value="Refreshed">🌞 Refreshed</option>
                <option value="Tired">😴 Tired</option>
                <option value="Neutral">😐 Neutral</option>
                <option value="Exhausted">😫 Exhausted</option>
                <option value="Energetic">⚡ Energetic</option>
              </select>
            </div>

            {/* Sleep Date */}
            <div className="flex-1">
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Sleep Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={sleepData.date}
                onChange={(e) => updatedateField("date", e.target.value)}
                onFocus={(e) => e.target.showPicker()}
                className="block w-full cursor-pointer rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                // required
              />
            </div>
          </div>

          {/* Hours Slept */}
          <div className="my-4">
            <label
              htmlFor="amount"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Hours Slept
              <br />
              <span className="text-xs text-gray-500">
                (Select between 0 and 12 in steps of 0.5)
              </span>
            </label>
            <input
              type="range"
              name="amount"
              id="amount"
              min="0"
              max="12"
              step="0.5"
              value={sleepData.amount}
              onChange={(e) =>
                updatedateField("amount", e.target.valueAsNumber)
              }
              className="w-full cursor-pointer"
            />
            <div className="mt-2 text-center text-gray-700">
              {sleepData.amount} hours
            </div>
          </div>

          {/* Submit button */}
          <button
            disabled={loading}
            className="flex w-full cursor-pointer items-center justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow-lg duration-100 ease-in hover:scale-105 hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>

          {/* Status Of Form */}
          <div className="mt-4 flex h-12 items-center justify-center">
            {message && (
              <div
                className={`rouned-md w-full p-3 text-center ${
                  message.type === "error"
                    ? "bg-red-100 outline outline-red-400"
                    : "bg-green-100 outline outline-green-400"
                }`}
              >
                <p
                  className={`text-sm ${
                    message.type === "error" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

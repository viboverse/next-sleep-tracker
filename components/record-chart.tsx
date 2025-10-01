import { getRecords } from "@/actions/getRecords";

import BarChart from "./bar-chart";

export default async function RecordChart() {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="rounded-md border border-red-300 bg-red-100 p-4 text-center text-red-800">
        <p>{error}</p>
      </div>
    );
  }

  //   No Records Message
  if (!records || records.length === 0) {
    return (
      <div className="flex items-center justify-center bg-indigo-50">
        <div className="w-full rounded-lg bg-white p-8 text-center shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-indigo-500">
            No Sleep Records Found
          </h3>
          <p className="text-gray-500">
            Start tracking your sleep to see your records here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full rounded-lg border border-indigo-100 bg-white p-8 shadow-lg">
        <h3 className="mb-6 bg-gradient-to-r text-center text-2xl font-bold text-[#1a18bf]">
          Your Sleep Records
        </h3>
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
}

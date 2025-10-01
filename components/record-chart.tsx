import { getRecords } from "@/actions/getRecords";

import BarChart from "./bar-chart";

export default async function RecordChart() {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <section className="rounded-md border border-red-300 bg-red-100 p-4 text-center text-red-800">
        <p>{error}</p>
      </section>
    );
  }

  //   No Records Message
  if (!records || records.length === 0) {
    return (
      <section className="flex items-center justify-center bg-indigo-50">
        <div className="w-full rounded-lg bg-white p-8 text-center shadow-lg">
          <h3 className="text-headings mb-4 text-2xl font-bold">
            No Sleep Records Found
          </h3>
          <p className="text-gray-500">
            Start tracking your sleep to see your records here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-full rounded-lg border border-indigo-100 bg-white p-8 shadow-lg">
        <h3 className="text-headings mb-6 text-center text-2xl font-bold">
          Your Sleep Records
        </h3>
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </section>
  );
}

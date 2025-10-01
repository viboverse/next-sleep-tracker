import { getRecords } from "@/actions/getRecords";
import RecordItem from "./record-item";

export default async function RecordHistory() {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <section className="rounded-md border border-red-300 bg-red-100 p-4 text-center text-red-800">
        <p>{error}</p>
      </section>
    );
  }

  if (!records || records.length === 0) {
    return (
      <section className="flex items-center justify-center bg-gray-100 p-8">
        <div className="w-full rounded-lg bg-white p-8 text-center shadow-lg">
          <h3 className="mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-2xl font-bold text-transparent">
            No Sleep Records Found
          </h3>
          <p className="text-gray-600">
            Start tracking your sleep to see your history here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-6">
      <div className="mx-auto rounded-lg bg-white p-8 shadow-lg">
        <h3 className="mb-6 border-b border-gray-200 pb-6 text-center text-2xl font-bold">
          Sleep Record History
        </h3>
        <ul className="space-y-4">
          {records?.map((record) => (
            <RecordItem record={record} key={record.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

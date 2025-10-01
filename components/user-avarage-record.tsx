import { getUserAllRecords } from "@/actions/getUserAllRecords";

export default async function UserAverageRecord() {
  const { totalHours, daysWithRecord, error } = await getUserAllRecords();

  if (error) {
    return (
      <section className="flex items-center justify-center">
        <div className="w-full rounded-lg border border-red-200 bg-red-50 p-8 text-center shadow-lg">
          <h4 className="mb-2 text-2xl font-bold text-red-600">Error</h4>
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  // Handle no data case
  if (!totalHours || !daysWithRecord || daysWithRecord === 0) {
    return (
      <section className="flex items-center justify-center">
        <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-8 text-center shadow-lg">
          <h4 className="mb-2 text-2xl font-bold text-gray-600">No Data</h4>
          <p className="text-gray-500">
            Start tracking your sleep to see your average!
          </p>
        </div>
      </section>
    );
  }

  const averageSleep = totalHours / daysWithRecord;
  const hours = Math.floor(averageSleep);
  const minutes = Math.round((averageSleep - hours) * 60);

  return (
    <section className="flex items-center justify-center">
      <div className="w-full rounded-lg bg-white p-8 text-center shadow-lg">
        <h4 className="mb-6 text-2xl font-bold text-emerald-600">
          Your Average Sleep
        </h4>
        <h1 className="text-2xl font-bold text-orange-400 sm:text-3xl">
          {hours} hours {minutes} minutes
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Based on {daysWithRecord} days of sleep data
        </p>
      </div>
    </section>
  );
}

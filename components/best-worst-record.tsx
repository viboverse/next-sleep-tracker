import { getBestWorstRecord } from "@/actions/getBestWorstRecord";

export default async function BestWorstRecord() {
  const { bestRecord, worstRecord, error } = await getBestWorstRecord();

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

  if (bestRecord === undefined || worstRecord === undefined) {
    return (
      <section className="flex items-center justify-center">
        <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-8 text-center shadow-lg">
          <h4 className="text-headings mb-2 text-2xl font-bold">No Data</h4>
          <p className="text-gray-500">
            Start tracking your sleep to see your best and worst records!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-full rounded-lg bg-white p-8 shadow-lg">
        <h4 className="text-headings mb-6 text-center text-2xl font-bold">
          Your Sleep Records
        </h4>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Best Record */}
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
            <h5 className="mb-2 text-lg font-semibold text-green-700">
              Best Sleep
            </h5>
            <p className="text-3xl font-bold text-green-600">
              {bestRecord} hours
            </p>
          </div>

          {/* Worst Record */}
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h5 className="mb-2 text-lg font-semibold text-red-700">
              Shortest Sleep
            </h5>
            <p className="text-3xl font-bold text-red-600">
              {worstRecord} hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

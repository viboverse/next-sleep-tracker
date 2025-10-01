import AddNewRecord from "@/components/add-new-record";
import Guest from "@/components/guest";
import RecordChart from "@/components/record-chart";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      <div className="grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
        {/* Left column */}
        <div className="space-y-6">
          {/* Welcome Section */}
          <section className="flex flex-col items-center gap-6 rounded-lg bg-white p-6 shadow-md sm:flex-row">
            <Image
              src={user.imageUrl}
              alt={`${user.firstName}'s profile image`}
              width={100}
              height={100}
              className="rounded-full shadow-md outline outline-gray-300"
            />

            {/* User Details */}
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-bold text-purple-600 md:text-3xl">
                Welcome back {user.firstName}
              </h2>
              <p className="mb-4 text-gray-600">
                Here&apos;s a quick overview of your recent sleep activity. Stay
                on top of your data insights and manage your tasks efficiently!
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Joined:</span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">
                    Last Active:
                  </span>{" "}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </section>

          {/* Add New Record Section */}
          <AddNewRecord />
        </div>

        {/* Right Column */}
        <div>
          <RecordChart />
        </div>
      </div>
    </main>
  );
}

import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export async function checkUser() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  //   check if the user already exist in db
  const loggedInUser = await db.user.findUnique({
    where: {
      clerckUserId: user.id,
    },
  });

  // If user in db, return user
  if (loggedInUser) {
    return loggedInUser;
  }

  //   If not in the db, create new user
  const newUser = await db.user.create({
    data: {
      clerckUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
}

"use server";

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    console.log("Attempting to create user:", user);
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log(newUser);
  } catch (error: any) {
    console.error("Error creating user:", error);
    if (error && error.code === 409) {
      // Conflict error, user already exists
      console.log("User already exists, attempting to find existing user");

      const documents = await users.list([Query.equal("email", user.email)]);
      const existingUser = documents.users[0];

      console.log("Existing user found:", existingUser);
      return existingUser;
    } else {
      throw new Error("Failed to create or find user");
    }
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (error) {
    console.error("Error getting user:", error);
  }
};

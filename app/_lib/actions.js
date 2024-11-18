"use server";
import { auth, signIn, signOut } from "./auth";

export async function updateProfile({ formData }) {
  console.log(formData);
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }

  const nationalId = formData.get("nationalId");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) {
    throw new Error("Please provide valid national id");
  }
  const updateData = { nationality, countryFlag, nationalId };
  console.log(updateData);
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}

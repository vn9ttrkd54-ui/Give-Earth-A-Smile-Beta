"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function getRequiredString(
  formData: FormData,
  fieldName: string,
) {
  const value = formData.get(fieldName);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function redirectWithMessage(
  pathname: string,
  type: "error" | "success",
  message: string,
): never {
  const parameters = new URLSearchParams({
    [type]: message,
  });

  redirect(`${pathname}?${parameters.toString()}`);
}

export async function signIn(
  formData: FormData,
) {
  const email = getRequiredString(
    formData,
    "email",
  );

  const password = getRequiredString(
    formData,
    "password",
  );

  if (!email || !password) {
    redirectWithMessage(
      "/login",
      "error",
      "Enter your email address and password.",
    );
  }

  const supabase = await createClient();

  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    redirectWithMessage(
      "/login",
      "error",
      error.message,
    );
  }

  redirect("/account");
}

export async function signUp(
  formData: FormData,
) {
  const fullName = getRequiredString(
    formData,
    "fullName",
  );

  const email = getRequiredString(
    formData,
    "email",
  );

  const password = getRequiredString(
    formData,
    "password",
  );

  const confirmPassword = getRequiredString(
    formData,
    "confirmPassword",
  );

  if (
    !fullName ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    redirectWithMessage(
      "/signup",
      "error",
      "Complete every required field.",
    );
  }

  if (password.length < 8) {
    redirectWithMessage(
      "/signup",
      "error",
      "Your password must contain at least 8 characters.",
    );
  }

  if (password !== confirmPassword) {
    redirectWithMessage(
      "/signup",
      "error",
      "The passwords do not match.",
    );
  }

  const requestHeaders = await headers();
  const origin =
    requestHeaders.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3001";

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo: `${origin}/auth/callback?next=/account`,
    },
  });

  if (error) {
    redirectWithMessage(
      "/signup",
      "error",
      error.message,
    );
  }

  redirectWithMessage(
    "/login",
    "success",
    "Account created. Check your email and confirm your account before signing in.",
  );
}

export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}
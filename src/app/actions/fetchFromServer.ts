// app/actions/fetchFromServer.js
"use server";
import { api } from "../../interfaces/interfaces";
export async function fetchFromServer(url: any, method = "GET", body = null) {
  const options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

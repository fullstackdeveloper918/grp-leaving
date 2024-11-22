
"use server";
import { parseCookies } from "nookies";
import { Api } from "../../interfaces/interfaces";

export async function fetchFromServer(api: Api): Promise<any> {
  const { url, method, body = null } = api;
  const cookies = parseCookies();
  console.log(cookies,"klll");
  
  const accessToken = cookies.auth_token;
  console.log(accessToken,"qweqweqwe");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    // "Cache-Control": "no-store", // Ensure no caching on the server side.
    // "Pragma": "no-cache",         // For older HTTP/1.0 caches.
    // "Expires": "0",               // Ensure no expiration.
  };
  const options: RequestInit = {
    method,
    headers,
    cache: "no-store" // Disable caching for sensitive requests
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

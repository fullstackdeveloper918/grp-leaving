
"use server";
import { parseCookies } from "nookies";
import { Api } from "../../interfaces/interfaces";

export async function fetchFromServer(api: Api): Promise<any> {
  const { url, method, body = null } = api;
  const cookies = parseCookies();
  console.log(cookies,"klll");
  
  const accessToken = cookies.auth_token;
  console.log(accessToken,"qweqweqwe");
  
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer Token ${accessToken}`
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

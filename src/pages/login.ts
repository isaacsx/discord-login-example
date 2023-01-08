import { getSession } from "@lib/session";
import type { APIContext } from "astro";

export async function all({ request, redirect }: APIContext) {
  const session = await getSession(request);
  if (!session || !session.has("bearer")) {
    return redirect(
      "https://discord.com/api/oauth2/authorize?client_id=928710178277314641&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify%20guilds"
    );
  }

  return redirect("/");
}

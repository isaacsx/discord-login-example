import { DiscordLogin } from "../../../discord-login";

export const discordLogin = new DiscordLogin({
  clientID: "",
  clientSecret: "",
  redirectURI: "http://localhost:3000/callback",
  scopes: ["identify", "guilds"],
});

import { createCookieSessionStorage } from "astro-session";

export type SessionData = {
  bearer: string | null;
};

const { commitSession, getSession } = createCookieSessionStorage<SessionData>(
  {
    bearer: null,
  },
  {
    cookie: {
      secret: "not-secret", // even if optional, this is mandatory when passing your app in production
    },
  }
);

export { commitSession, getSession };

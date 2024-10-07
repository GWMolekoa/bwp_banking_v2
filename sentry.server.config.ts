// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b2278c32d84f856371cf977a509e1d16@o4508082098470912.ingest.de.sentry.io/4508082119704656",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control. 
  // Tracks how many users visit my site
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

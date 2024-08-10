// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://d602839dfd002527ade45ab0c944d93d@o1382067.ingest.us.sentry.io/4507750464552960",

	// Adjust this value in production, or use tracesSampler for greater control
	tracesSampleRate: 0.1,

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,

	// Uncomment the line below to enable Spotlight (https://spotlightjs.com)
	spotlight: process.env.NODE_ENV === 'development',
});

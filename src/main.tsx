import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router";

// biome-ignore lint/style/noNonNullAssertion: it'll always be there
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router />
	</StrictMode>,
);

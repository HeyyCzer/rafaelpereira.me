import { BrowserRouter, Route, Routes } from "react-router";
import { LandingPage } from "./pages/landing";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

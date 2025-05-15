import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";

import {
	BankComparison,
	CurrencyCalculator,
	Dashboard,
	Popup,
} from "@component/index";

import {
	AccountType,
	CreditCard,
	Home,
	SignIn,
	SignUp,
	UserPassword,
} from "@page/index";

import { Route, BrowserRouter as Router, Routes } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bank-comparison" element={<BankComparison />} />
				{/*<Route path="/budgeting-tools" element={<BudgetingTools />} />*/}
				<Route path="/currency-calculator" element={<CurrencyCalculator />} />
				<Route path="/account-type" element={<AccountType />} />
				<Route path="/cc-type" element={<CreditCard />} />
				<Route path="/pop-up" element={<Popup />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/user-password" element={<UserPassword />} />
			</Routes>
		</Router>
	</StrictMode>,
);

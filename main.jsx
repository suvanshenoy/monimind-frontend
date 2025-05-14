import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";
import { BankComparison } from "@component/bank-comparison/BankComparison.jsx";
import { CurrencyCalculator } from "@component/currency-calculator/CurrencyCalculator.jsx";
import { Dashboard } from "@component/dashboard/Dashboard.jsx";
import { Popup } from "@component/pop-up/Popup.jsx";
import { AccountType } from "@page/AccountType.jsx";
import { CreditCard } from "@page/CreditCard.jsx";
import { Home } from "@page/Home.jsx";
import { SignIn } from "@page/SignIn.jsx";
import { SignUp } from "@page/SignUp.jsx";
import { UserPassword } from "@page/UserPassword.jsx";
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

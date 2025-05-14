import { StepN } from "@component/pop-up/StepN";
import { StepOne } from "@component/pop-up/StepOne";
import { stepConfigs } from "@component/pop-up/config/stepConfigs.mjs";
// import { useAnswerStore } from "@store/AnswerStore";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Popup() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: "",
		spendOn: [],
	});

	const navigate = useNavigate();

	const handleStepOneContinue = (name) => {
		setFormData((prev) => ({ ...prev, name }));
		setStep(2);
	};

	const handleStepNContinue = (selections, currentStep) => {
		setFormData((prev) => ({
			...prev,
			spendOn: selections,
		}));
		if (step < 12) {
			setStep(step + 1);
		} else {
			console.log("Form completed:", formData);
			navigate("/dashboard");
		}
	};

	const handleBack = () => {
		if (step > 1) {
			setStep(step - 1);
		}
	};

	return (
		<div className="relative">
			{step === 1 && (
				<StepOne
					onContinue={handleStepOneContinue}
					initialValue={formData.name}
				/>
			)}
			{step > 1 && step <= 12 && (
				<StepN
					onBack={handleBack}
					onContinue={handleStepNContinue}
					initialSelections={formData.spendOn}
					question={stepConfigs[step - 2].question}
					options={stepConfigs[step - 2].options}
					isLastStep={step === 12}
				/>
			)}
		</div>
	);
}

import React, { useState, useCallback } from "react";

const Stepper = ({ steps, initialStep = 1 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  // Memoized nextStep function
  const nextStep = useCallback(() => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }, [currentStep, steps.length]); // Add dependencies that the function relies on

  // Memoized prevStep function
  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  }, [currentStep]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        {/* Stepper Header */}
        <div className="flex justify-between mb-6">
          {steps.map(({ label }, index) => {
            const step = index + 1;
            return (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${
                    currentStep === step
                      ? "bg-blue-500 text-white"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                <div className="mt-2 text-sm">{label}</div>
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div>{steps[currentStep - 1].content}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStep}
            className={`${
              currentStep === 1 ? "invisible" : "visible"
            } bg-gray-300 text-gray-700 py-2 px-4 rounded`}
          >
            Back
          </button>

          <button
            onClick={nextStep}
            className={`${
              currentStep === steps.length ? "invisible" : "visible"
            } bg-blue-500 text-white py-2 px-4 rounded`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

import React from "react";

const OrderStatusStepper = ({ orderStatus }) => {
  const steps = ["Ordered", "Shipped", "Out for delivery", "Order Completed"];

  // Determine the current step based on order status
  const currentStep = steps.indexOf(orderStatus);

  return (
    <div className="flex items-center justify-between lg:w-full w-full p-4 bg-white overflow-x-auto ">
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        const isLastStep = index === steps.length - 1;

        return (
          <div key={step} className="flex items-center w-full">
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full ${
                isActive ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-500"
              }`}
            >
              <span className="text-xs">{index + 1}</span>
            </div>

            {/* Step Label */}
            <div className="ml-2 text-xs font-medium">
              <span className={isActive ? "text-orange-500" : "text-gray-500"}>
                {step}
              </span>
            </div>

            {/* Connector Line */}
            {!isLastStep && (
              <div
                className={`h-1 flex-grow mx-2 ${
                  isActive ? "bg-orange-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrderStatusStepper;

import Division from "./Division";
import Multiplication from "./Multiplication";
import Addition from "./Addition";
import Subtraction from "./Substraction";

let CalculatorApp = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Calculator App
        </h1>
        <p className="text-gray-600">Simple calculator with basic operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <Addition x={x} y={y} />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <Subtraction x={x} y={y} />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <Multiplication x={x}  y={y} />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <Division x={x}  y={y} />
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;

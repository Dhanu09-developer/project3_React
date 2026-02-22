let Division = () => {
  let division_click = () => {
    alert("Division Click");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Division</h2>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Enter dividend"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
        />
        <input
          type="number"
          placeholder="Enter divisor"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
        />
      </div>

      <button
        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
        onClick={division_click}
      >
        Divide Numbers
      </button>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Result: <span className="font-semibold text-gray-800">-</span>
        </p>
      </div>
    </div>
  );
};

export default Division;

const AboutUs = () => {
  return (
    <div className="min-h-screen px-6 py-30 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow-sm"> */}
        <div
          className="bg-green-100 border-l-4 transition hover:shadow-md hover:scale-[1.01] border-green-500 p-4 rounded shadow-sm"
        >
          <h1 className="text-3xl font-bold text-green-600 mb-2 text-center">
            About This Web App
          </h1>
          <p className="text-md leading-7">
            This web application is designed to streamline and digitize the
            <span className="font-semibold text-blue-700">
              {" "}
              Store Management System{" "}
            </span>
            of
            <span className="font-semibold text-green-600">
              {" "}
              Jatiya Kabi Kazi Nazrul Islam University
            </span>
            . It replaces the traditional manual processes with a smarter,
            faster, and more reliable digital solution.
          </p>
        </div>

        <div
          className="bg-blue-100 border-l-4 transition hover:shadow-md hover:scale-[1.01] border-blue-500 p-4 rounded shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            🔍 Purpose
          </h2>
          <p className="text-md leading-7">
            The app provides efficient control over inventory, purchase records,
            product listings, and store-related activities. It enables
            university staff to manage and track inventory, issue items, and
            maintain records with ease and accuracy.
          </p>
        </div>

        <div
          className="bg-red-100 border-l-4 transition hover:shadow-md hover:scale-[1.01] border-red-500 p-4 rounded shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            🛠️ Problems It Solves
          </h2>
          <ul className="list-disc pl-6 text-md leading-7">
            <li>Eliminates paperwork and manual data handling</li>
            <li>Prevents misplacement or duplication of inventory items</li>
            <li>Improves transparency and accountability</li>
            <li>
              Speeds up the process of item request, approval, and issuance
            </li>
            <li>Allows quick report generation and data-driven decisions</li>
          </ul>
        </div>

        <div
          className="bg-yellow-100 border-l-4 transition hover:shadow-md hover:scale-[1.01] border-yellow-500 p-4 rounded shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-yellow-600 mb-2">
            🚀 Key Features
          </h2>
          <ul className="list-disc pl-6 text-md leading-7">
            <li>Digital item entry and inventory tracking</li>
            <li>Admin and user role management</li>
            <li>Request and approval system for issuing items</li>
            <li>
              Search, filter, and sort functionality for faster navigation
            </li>
            <li>Interactive dashboard for real-time stats</li>
          </ul>
        </div>

        <div
          className="bg-purple-100 border-l-4 transition hover:shadow-md hover:scale-[1.01] border-blue-500 p-4 rounded shadow-sm"
        >
          <p className="text-md text-gray-950">
            ❓{" "}
            <span className="font-semibold text-red-500">
              Facing any issues?
            </span>{" "}
            Please{" "}
            <a
              href="http://localhost:5173/developers"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              visit the {"developers'"} page
            </a>{" "}
            for support or further assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

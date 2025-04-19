import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-40 text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Contact Form */}
        <div className="bg-white/90 p-8 shadow-lg rounded-lg h-full">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            📬 Get in Touch
          </h2>
          <form className="space-y-5">
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-2 text-gray-500 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:-top-4 transition-all"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-2 text-gray-500 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:-top-4 transition-all"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                required
                rows="4"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500 resize-y"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-2 text-gray-500 peer-focus:text-blue-500 peer-focus:text-sm peer-focus:-top-4 transition-all"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-blue-700">
              📞 Contact Info
            </h3>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span>JKKNIU Register Office, JKKNIU</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <a
                href="mailto:store@jkkniu.edu.bd"
                className="text-blue-700 hover:underline"
              >
                store@jkkniu.edu.bd
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <a
                href="tel:+8801234567890"
                className="text-blue-700 hover:underline"
              >
                +880 1234 567 890
              </a>

            </div>

            <div className="flex items-center gap-4">
            <Globe className="text-blue-600" />
            <a
              href="https://jkkniu.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              https://jkkniu.edu.bd/
            </a>
          </div>
          </div>

          {/* Facing Issues Section */}
          <div className="bg-blue-100 p-8 border-l-4 border-blue-600 rounded-lg shadow-lg space-y-6">
            <div className="bg-purple-100 transition hover:shadow-md hover:scale-[1.01] p-4 rounded shadow-sm">
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
      </div>
    </div>
  );
};

export default Contact;

import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600">
            Al Shifa Medical Center allows you to find the doctor in various
            specialties that suits you and book an appointment with them
            directly online.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <img
              src={assets.about_image}
              alt="Centre Médical al shifa"
              className="w-full rounded-lg shadow-lg h-96 md:w-96"
            />
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                Al Shifa Medical Center provides you with reliable information
                about doctors in your area and saves you time. We are committed
                to providing convenient and accessible service to meet your
                healthcare needs.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="mb-20 mr-16 text-2xl font-semibold text-center text-gray-800">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 gap-5 mb-20 md:flex md:justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-blue-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Reliability</h3>
              <p className="mt-2 text-sm text-gray-600">
                Provide accurate and up-to-date medical information.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-blue-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                Accessibility
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Make it easier to book medical appointments online.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-blue-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l9 9m0 0l9-9m-9 9V3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Efficiency</h3>
              <p className="mt-2 text-sm text-gray-600">
                Save you time with fast and reliable service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

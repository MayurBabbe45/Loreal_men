import { useState } from "react";

const AboutPage = () => {
  const [section, setSection] = useState("aboutUs");

  return (
    <div className='flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen'>
      {/* Header */}
      <div className='flex w-full border-b border-gray-700'>
        <div
          className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
          onClick={() => setSection("aboutUs")}
        >
          About Us
          {section === "aboutUs" && (
            <div className='absolute bottom-0 w-10 h-1 rounded-full bg-purple-300'></div>
          )}
        </div>
        <div
          className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
          onClick={() => setSection("ourMission")}
        >
          Our Mission
          {section === "ourMission" && (
            <div className='absolute bottom-0 w-10 h-1 rounded-full bg-purple-300'></div>
          )}
        </div>
        <div
          className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
          onClick={() => setSection("ourTeam")}
        >
          Our Team
          {section === "ourTeam" && (
            <div className='absolute bottom-0 w-10 h-1 rounded-full bg-purple-300'></div>
          )}
        </div>
        <div
          className='flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
          onClick={() => setSection("contactUs")}
        >
          Contact Us
          {section === "contactUs" && (
            <div className='absolute bottom-0 w-10 h-1 rounded-full bg-purple-300'></div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className='p-4'>
        {section === "aboutUs" && (
          <div>
            <h1 className='text-xl font-bold'>About Us</h1>
            <p>
              Welcome to SleekSpeak, your number one source for all things related to men's grooming and lifestyle.
              We're dedicated to giving you the very best of products and advice, with a focus on quality, customer service, and uniqueness.
            </p>
          </div>
        )}

        {section === "ourMission" && (
          <div>
            <h1 className='text-xl font-bold'>Our Mission</h1>
            <p>
              Our mission is to provide the best grooming products and advice to help men look and feel their best.
            </p>
          </div>
        )}

        {section === "ourTeam" && (
          <div>
            <h1 className='text-xl font-bold'>Our Team</h1>
            <p>
              Our team is made up of passionate individuals who are dedicated to providing the best service and products to our customers.
            </p>
          </div>
        )}

        {section === "contactUs" && (
          <div>
            <h1 className='text-xl font-bold'>Contact Us</h1>
            <p>
              If you have any questions, contact us at
              <a href='babbemayur45@gmail.com' className='text-blue-500 hover:underline'> babbemayur45@gmail.com</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;

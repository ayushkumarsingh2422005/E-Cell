"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState("incharge");

  const tabLabels = {
    incharge: {
      label: "Professor In-charge",
      name: "Dr. Dinesh Kumar",
      image: "/dinesh.jpg",
      contact: {
        email: "dinesh.prod@nitjsr.ac.in",
        phone: "",
        linkedin: "https://www.linkedin.com/in/dinesh-kumar-72085412/",
      },
    },
    president: {
      label: "President E-Cell",
      name: "Raj Aryan",
      image: "/avatar.png",
      contact: {
        email: "clicksm052@gmail.com",
        phone: "+91-82522-33759",
        linkedin: "https://www.linkedin.com/in/mr-clicks/",
      },
    },
    vicePresident: {
      label: "Vice-President E-Cell",
      name: "Ayush Kumar Singh",
      image: "/avatar.png",
      contact: {
        email: "2023ugcs086@nitjsr.ac.in",
        phone: "+91-81277-57516",
        linkedin: "https://www.linkedin.com/in/its-ayushkrsingh/",
      },
    },
    generalSecratary: {
      label: "General Secretary",
      name: "Pratik Mode",
      image: "/avatar.png",
      contact: {
        email: "2023ugce070@nitjsr.ac.in",
        phone: "+91-81025-68482",
        linkedin: "https://www.linkedin.com/in/pratik-modi925/",
      },
    },
    jointSecratary: {
      label: "Joint Secretary",
      name: "Varun Singh",
      image: "/avatar.png",
      contact: {
        email: "2024ugce044@nitjsr.ac.in",
        phone: "+91-79035-07606",
        linkedin: "https://www.linkedin.com/in/varun-singh-9a6ba8327/",
      },
    },
    webAndTechHead: {
      label: "Web and Tech Head",
      name: "Aditya Raj",
      image: "/avatar.png",
      contact: {
        email: "2024ugcs012@nitjsr.ac.in",
        phone: "+91-79035-07606",
        linkedin: "https://www.linkedin.com/in/aditraj24/",
      },
    },
    treasurer: {
      label: "Treasurer",
      name: "Anshul Khalkho",
      image: "/avatar.png",
      contact: {
        email: "2023ugcm029@nitjsr.ac.in",
        phone: "+91-86026-77215",
        linkedin: "https://www.linkedin.com/in/anshul-khalkho/",
      },
    },
    contentHead: {
      label: "Content Head",
      name: "Harshit Gupta",
      image: "/avatar.png",
      contact: {
        email: "harshitgupta1031@gmail.com",
        phone: "7869810252",
        linkedin:
          "https://www.linkedin.com/in/harshit-gupta-62b0631a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    incubationHead: {
      label: "Incubation Head",
      people: [
        {
          name: "Karthik",
          image: "/avatar.png",
          contact: {
            email: "karthik.thammisetty369@gmail.com",
            phone: "+91-88090-36369",
            linkedin: "https://www.linkedin.com/in/karthikthammisetty/",
          },
        },
        {
          name: "Arpit Saraswath",
          image: "/avatar.png",
          contact: {
            email: "2024ugcm025@gmail.com",
            phone: "+91-93697-72060",
            linkedin: "https://www.linkedin.com/in/arpit-saraswath/",
          },
        },
      ],
    },
    creativeHead: {
      label: "Creative Head",
      people: [
        {
          name: "Stuti Kasera",
          image: "/avatar.png",
          contact: {
            email: "sanjeetkasera200@gmail.com",
            phone: "9305639401",
            linkedin: "https://www.linkedin.com/in/stuti-kasera-154b2436b/",
          },
        },
        {
          name: "Aryan kumar singh",
          image: "/avatar.png",
          contact: {
            email: "rajaryansingh021@gmail.com ",
            phone: "9234211755",
            linkedin:
              "https://www.linkedin.com/in/aryan-singh-b889a6327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        },
      ],
    },
    operationsHead: {
      label: "Operations Head",
      people: [
        {
          name: "Shikhar Singh",
          image: "/avatar.png",
          contact: {
            email: "singhshikhar2005@gmail.com ",
            phone: "7080680295",
            linkedin: "https://www.linkedin.com/in/shikhar-singh-92155b229",
          },
        },
        {
          name: "Deepmala Deepak",
          image: "/avatar.png",
          contact: {
            email: "2024ugme030@nitjsr.ac.in ",
            phone: "9082891897",
            linkedin: "https://www.linkedin.com/in/deepmala-deepak-700285327/",
          },
        },
      ],
    },
    caHead: {
      label: "Corporate Affairs Head",
      people: [
        {
          name: "Tanishka Joshi",
          image: "/avatar.png",
          contact: {
            email: "2024ugcs005@nitjsr.ac.in ",
            phone: "9355793315",
            linkedin: "https://www.linkedin.com/in/tanishkka-joshi/",
          },
        },
        {
          name: "Himanshu Kumar",
          image: "/avatar.png",
          contact: {
            email: "2025pgcsca044@nitjsr.ac.in ",
            phone: "9082891897",
            linkedin: "https://www.linkedin.com/in/himanshu-kumar-700285327/",
          },
        },
      ],
    },
    prHead: {
      label: "Public Relations Head",
      people: [
        {
          name: "Ankit jain",
          image: "/avatar.png",
          contact: {
            email: "2025pgcsca044@nitjsr.ac.in ",
            phone: "7566056475",
            linkedin: "https://www.linkedin.com/in/ankit-jain-700285327/",
          },
        },
        {
          name: "Avani Maheshwari",
          image: "/avatar.png",
          contact: {
            email: "2024ugme084@nitjsr.ac.in ",
            phone: "9131190684",
            linkedin: "https://www.linkedin.com/in/avani-maheshwari/",
          },
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar whiteBg={true} />

      {/* Header */}
      <div className="bg-white border-b pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">E-cell Committee</h1>
          <p className="mt-2 text-gray-600">Know more about our team</p>
        </div>
      </div>

      <div className="container py-4 flex flex-col lg:flex-row mx-auto gap-4">
        {/* Tabs */}
        <div className="w-full lg:w-1/4 bg-white border-b lg:border-b-0 lg:border-r h-auto lg:h-[60vh] overflow-x-auto lg:overflow-y-scroll lg:overflow-x-hidden rounded-t-lg lg:rounded-t-none lg:rounded-l-lg shadow-sm">
          <div className="px-2 sm:px-4">
            {/* Mobile: horizontal scroll, Desktop: vertical */}
            <div className="flex flex-row lg:flex-col py-2 gap-1 lg:gap-0 overflow-x-auto lg:overflow-x-hidden whitespace-nowrap">
              {Object.keys(tabLabels).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`min-w-[150px] lg:min-w-0 text-left px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm font-medium border-l-0 lg:border-l-2 border-b-2 lg:border-b-0 transition-colors whitespace-nowrap rounded-t-lg lg:rounded-none ${
                    activeTab === tab
                      ? "lg:border-blue-600 border-blue-600 text-blue-600 bg-blue-50 lg:bg-white"
                      : "lg:border-transparent border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab == "sac_office_staff"
                    ? "Office Staff"
                    : tabLabels[tab].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="w-full lg:w-3/4 px-0 sm:px-2 lg:px-4 py-2 sm:py-6 flex items-center justify-center">
          {(() => {
            const currentData = tabLabels[activeTab];

            // If role has multiple people
            if (currentData.people) {
              return (
                <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col max-h-[60vh] overflow-y-auto">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-center">
                    {currentData.label}
                  </h2>

                  <div className="flex flex-col gap-4">
                    {currentData.people.map((person, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-md p-4 shadow-sm"
                      >
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-20 h-20 object-cover rounded-full border-2 border-blue-100 mb-3 sm:mb-0 sm:mr-4"
                        />

                        <div className="flex-1 text-center sm:text-left">
                          <div className="font-semibold text-gray-900">
                            {person.name}
                          </div>

                          <div className="flex flex-col text-sm text-gray-600 mt-1">
                            {person.contact.email && (
                              <a
                                href={`mailto:${person.contact.email}`}
                                className="hover:text-blue-600 break-all"
                              >
                                {person.contact.email}
                              </a>
                            )}

                            {person.contact.phone && (
                              <a
                                href={`tel:${person.contact.phone}`}
                                className="hover:text-blue-600"
                              >
                                {person.contact.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // If role has single person
            return (
              <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-center">
                <img
                  src={currentData.image}
                  alt={currentData.name}
                  className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full border-4 border-blue-100 mb-4 lg:mb-0"
                />

                <div className="lg:px-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    {currentData.name}
                  </h2>

                  <p className="text-blue-600 font-medium mb-2">
                    {currentData.label}
                  </p>

                  <div className="flex flex-col space-y-1 text-sm text-gray-600">
                    {currentData.contact?.email && (
                      <a
                        href={`mailto:${currentData.contact.email}`}
                        className="hover:text-blue-600 break-all"
                      >
                        {currentData.contact.email}
                      </a>
                    )}

                    {currentData.contact?.phone && (
                      <a
                        href={`tel:${currentData.contact.phone}`}
                        className="hover:text-blue-600"
                      >
                        {currentData.contact.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Explore More Contacts Button */}
      <div className="w-full flex justify-center mt-6 mb-8">
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors text-base sm:text-lg"
        >
          Explore More Contacts
        </a>
      </div>
      <Footer />
    </main>
  );
}

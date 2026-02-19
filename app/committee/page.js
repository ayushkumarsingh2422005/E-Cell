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
      image: "/teamPhoto/raj.png",
      contact: {
        email: "clicksm052@gmail.com",
        phone: "+91-82522-33759",
        linkedin: "https://www.linkedin.com/in/mr-clicks/",
      },
    },
    vicePresident: {
      label: "Vice-President E-Cell",
      name: "Ayush Kumar Singh",
      image: "/teamPhoto/ayush.png",
      contact: {
        email: "2023ugcs086@nitjsr.ac.in",
        phone: "+91-81277-57516",
        linkedin: "https://www.linkedin.com/in/its-ayushkrsingh/",
      },
    },
    generalSecratary: {
      label: "General Secretary",
      name: "Pratik Mode",
      image: "/teamPhoto/pratik.png",
      contact: {
        email: "2023ugce070@nitjsr.ac.in",
        phone: "+91-81025-68482",
        linkedin: "https://www.linkedin.com/in/pratik-modi925/",
      },
    },
    jointSecratary: {
      label: "Joint Secretary",
      name: "Varun Singh",
      image: "/teamPhoto/varun.jpeg",
      contact: {
        email: "2024ugce044@nitjsr.ac.in",
        phone: "+91-79035-07606",
        linkedin: "https://www.linkedin.com/in/varun-singh-9a6ba8327/",
      },
    },
    webAndTechHead: {
      label: "Web and Tech Head",
      name: "Aditya Raj",
      image: "/teamPhoto/aditya.jpg",
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
      image: "/teamPhoto/harshit.png",
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
          image: "/teamPhoto/kartik.png",
          contact: {
            email: "karthik.thammisetty369@gmail.com",
            phone: "+91-88090-36369",
            linkedin: "https://www.linkedin.com/in/karthikthammisetty/",
          },
        },
        {
          name: "Arpit Saraswath",
          image: "/teamPhoto/arpit.png",
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
          image: "/teamPhoto/stutimaam.png",
          contact: {
            email: "sanjeetkasera200@gmail.com",
            phone: "9305639401",
            linkedin: "https://www.linkedin.com/in/stuti-kasera-154b2436b/",
          },
        },
        {
          name: "Aryan kumar singh",
          image: "/teamPhoto/aryan.jpeg",
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
          image: "/teamPhoto/shikhar.jpeg",
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
          image: "/teamPhoto/tanishka.jpeg",
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar whiteBg={true} />

      {/* Header with enhanced styling */}
      <div className="bg-white border-b shadow-sm pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            E-cell Committee
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Meet the passionate team driving innovation
          </p>
        </div>
      </div>

      <div className="container py-8 flex flex-col lg:flex-row mx-auto gap-6 px-4">
        {/* Enhanced Tabs */}
        <div className="w-full lg:w-1/4 bg-white/80 backdrop-blur-sm border rounded-xl lg:rounded-2xl shadow-lg h-auto lg:h-[70vh] overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden">
          <div className="px-3 py-4">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-hidden whitespace-nowrap lg:whitespace-normal scrollbar-thin scrollbar-thumb-gray-300">
              {Object.keys(tabLabels).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`min-w-[140px] lg:min-w-0 px-5 py-3.5 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 lg:hover:scale-100 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                  }`}
                >
                  {tabLabels[tab].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Contact Cards */}
        <div className="w-full lg:w-3/4 px-0 py-2 flex items-center justify-center">
          {(() => {
            const currentData = tabLabels[activeTab];

            if (currentData.people) {
              return (
                <div className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {currentData.label}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentData.people.map((person, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                      >
                        <div className="flex flex-col items-center text-center">
                          {/* Enhanced image container */}
                          <div className="relative mb-4">
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-300 transition-all duration-300 shadow-lg">
                              <img
                                src={person.image}
                                alt={person.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            {person.contact.linkedin && (
                              <a
                                href={person.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-0 right-0 bg-blue-600 text-white p-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                            )}
                          </div>

                          <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-1">
                            {person.name}
                          </h3>

                          <div className="flex flex-col space-y-2 w-full mt-3">
                            {person.contact.email && (
                              <a
                                href={`mailto:${person.contact.email}`}
                                className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 group/item"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                                <span className="group-hover/item:underline break-all">
                                  {person.contact.email}
                                </span>
                              </a>
                            )}

                            {person.contact.phone && (
                              <a
                                href={`tel:${person.contact.phone}`}
                                className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 group/item"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                                <span className="group-hover/item:underline">
                                  {person.contact.phone}
                                </span>
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

            // Enhanced single person card
            return (
              <div className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 transform hover:scale-[1.02] transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Enhanced image with larger size */}
                  <div className="relative flex-shrink-0">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl ring-4 ring-white">
                      <img
                        src={currentData.image}
                        alt={currentData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {currentData.contact?.linkedin && (
                      <a
                        href={currentData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
                      {currentData.name}
                    </h2>

                    <p className="text-xl text-blue-600 font-semibold mb-4">
                      {currentData.label}
                    </p>

                    <div className="flex flex-col space-y-3">
                      {currentData.contact?.email && (
                        <a
                          href={`mailto:${currentData.contact.email}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-center md:justify-start gap-3 group"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="group-hover:underline break-all">
                            {currentData.contact.email}
                          </span>
                        </a>
                      )}

                      {currentData.contact?.phone && (
                        <a
                          href={`tel:${currentData.contact.phone}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-center md:justify-start gap-3 group"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="group-hover:underline">
                            {currentData.contact.phone}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Enhanced Explore More Button */}
      <div className="w-full flex justify-center mt-8 mb-12">
        <a
          href="/subteam"
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-base sm:text-lg overflow-hidden"
        >
          <span className="relative z-10">Explore More Contacts</span>
          <svg
            className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>

      <Footer />
    </main>
  );
}

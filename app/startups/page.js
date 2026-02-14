'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Mock Data for Startups
const startupsData = [
  {
    id: 1,
    name: "DigiCraft",
    slug: "digicraft",
    description: "Transforming visionary ideas into exceptional digital experiences. Specialized in Web, Mobile, Cloud & AI solutions.",
    category: "Tech",
    status: "Graduated",
    logo: "/startups/digicraft.png",
    founders: ["Ayush Kumar Singh", "Rajesh Kumar Singh"],
    website: "https://digicraft.one",
    year: "2026"
  },
  {
    id: 2,
    name: "Vidhyut",
    slug: "vidhyut",
    description: "Sustainable farming technologies enabling farmers to increase yield with less water usage.",
    category: "EV",
    status: "Incubated",
    logo: "/logo.png",
    founders: ["Rahul Kumar"],
    website: "#",
    year: "2026"
  },
  {
    id: 3,
    name: "EduMate",
    slug: "edumate",
    description: "Personalized learning platform connecting students with expert mentors from top universities.",
    category: "EdTech",
    status: "Incubated",
    logo: "/logo.png",
    founders: ["Priya Singh", "Rohit Sharma"],
    website: "#",
    year: "2022"
  },
];

// Filters removed as per request

export default function StartupsPage() {
  // const [filter, setFilter] = useState("All");
  // const [filteredStartups, setFilteredStartups] = useState(startupsData);

  // useEffect(() => {
  //   if (filter === "All") {
  //     setFilteredStartups(startupsData);
  //   } else {
  //     setFilteredStartups(startupsData.filter(s => s.status === filter));
  //   }
  // }, [filter]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/homepage_images/incubat.jpg"
            alt="Startups Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
        </div>

        <div className="relative z-10 text-center container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-blue-400">Startups</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Witness the innovation brewing at NIT Jamshedpur. From ideation to execution, we support ventures that change the world.
          </motion.p>
        </div>
      </section>

      {/* Startup Culture Section - NEW ADDITION */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cultivating a <span className="text-blue-600">Startup Mindset</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At E-Cell NIT Jamshedpur, we don't just support startups; we build a thriving
                  ecosystem where innovation meets execution. Our culture is rooted in the belief
                  that every student has the potential to be a changemaker.
                </p>
                <p>
                  We foster an environment that encourages risk-taking, collaborative problem-solving,
                  and continuous learning. Through our incubation programs, we provide the
                  scaffolding necessary for raw ideas to evolve into scalable business ventures.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { title: "Innovation", desc: "Thinking beyond boundaries" },
                  { title: "Mentorship", desc: "Guidance from industry leaders" },
                  { title: "Network", desc: "Connecting with alumni & VCs" },
                  { title: "Funding", desc: "Seed support for early stage" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/homepage_images/networking.jpg"
                alt="Startup Culture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <blockquote className="text-white italic text-lg font-light border-l-2 border-blue-400 pl-4">
                  "Entrepreneurship is not about ideas. It's about making ideas happen."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Startups Section */}
      <section className="py-16 md:py-24 container mx-auto px-4" id="our-startups">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Startups</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the game-changers who started their journey with us.
          </p>
        </div>

        {/* Filter Tabs */}
        {/* Filter Tabs Removed */}

        {/* Startups Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {startupsData.map((startup) => (
              <Link
                href={`/startups/${startup.slug}`}
                key={startup.id}
                className="block h-full"
              >
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:bg-blue-50/50 hover:border-blue-200 cursor-pointer transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                >
                  {/* Card Header with Logo */}
                  <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
                    {/* Status Badge Removed */}

                    <div className="w-28 h-28 bg-white rounded-full shadow-md flex items-center justify-center p-0 z-10 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={startup.logo}
                        alt={startup.name}
                        width={120}
                        height={120}
                        className="object-cover"
                      />
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full opacity-30 blur-2xl"></div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {startup.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-blue-500 font-medium">{startup.category}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">Started since {startup.year}</span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {startup.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400 uppercase font-semibold">Founders</p>
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">
                            {startup.founders.join(", ")}
                          </p>
                        </div>
                        {startup.website && startup.website !== '#' && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(startup.website, '_blank', 'noopener,noreferrer');
                            }}
                            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm group-hover:shadow-md cursor-pointer"
                            title="Visit Website"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {startupsData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No startups found in this category.</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Have a Startup Idea?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            We provide mentorship, workspace, and funding support to help you turn your idea into reality. Join our incubation program today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Apply for Incubation
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
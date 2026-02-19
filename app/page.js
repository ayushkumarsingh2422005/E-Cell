"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEventAvailable, setIsEventAvailable] = useState(false);

  const categoryColors = {
    cultural: "bg-purple-100 text-purple-800",
    sports: "bg-green-100 text-green-800",
    technical: "bg-blue-100 text-blue-800",
    club_activities: "bg-yellow-100 text-yellow-800",
    competitions: "bg-red-100 text-red-800",
    events: "bg-indigo-100 text-indigo-800",
  };

  const categoryLabels = {
    cultural: "Cultural Activities",
    sports: "Sports & Games",
    technical: "Technical Activities",
    club_activities: "Club Activities",
    competitions: "Competitions",
    events: "Events & Festivals",
  };

  useEffect(() => {
    fetchRecentNotices();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/events/len"); // Replace with your actual endpoint
        const result = await response.json();
        // alert(typeof(result));
        setIsEventAvailable(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchRecentNotices = async () => {
    try {
      const response = await fetch("/api/notices?limit=3&sort=priority");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch notices");
      }

      setNotices(data.notices);
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  const videoRef = useRef(null);

  // const handleLoadedMetadata = () => {
  //   if (videoRef.current) {
  //     videoRef.current.currentTime = 18;
  //   }
  // };

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image with mobile optimization */}
        <div className="absolute inset-0">
          <video
            src="/ecellbg.mp4"
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
            // onLoadedMetadata={handleLoadedMetadata}
            className="object-cover w-full h-full brightness-[0.85] sm:brightness-75"
            poster="/nit-jsr-campus.png"
          />

          {/* Enhanced gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div
            className="w-full max-w-4xl mx-auto pt-16 sm:pt-20 px-4 sm:px-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main title with responsive sizing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Enterprenuership Cell
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 text-blue-300">
                NIT Jamshedpur
              </span>
            </h1>

            {/* Description with better readability */}
            <p className="text-lg sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              The Entrepreneurship Cell of NIT Jamshedpur serves as the catalyst
              for innovation and enterprise on campus. Through strategic
              mentorship and high-impact initiatives, we transform ideas into
              scalable ventures.
            </p>

            {/* Responsive button layout */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Live Events Button */}
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 backdrop-blur-sm rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={"/events"}
                    className="flex items-center justify-center space-x-2"
                  >
                    {/* Live Dot */}
                    {isEventAvailable && (
                      <span className="relative flex h-3 w-3 right-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                      </span>
                    )}
                    <span>Live Events</span>

                    <svg
                      className="w-5 h-5 ml-2"
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
                  </Link>
                </motion.button>

                {/* Achievements Button */}
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white/20 transition-all shadow-inner hover:shadow-white/20 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={"/achievements"}
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Achievements</span>
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </Link>
                </motion.button>
              </div>
            </div>

            {/* Achievement badges */}
            <div className="mt-12 hidden sm:flex gap-6 justify-center sm:justify-start">
              {[
                { number: "20+", label: "Active Startups" },
                { number: "1000+", label: "Students" },
                { number: "50+", label: "Events/Year" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 "
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-white font-bold">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="text-white/60 text-sm mb-2 hidden sm:block">
            Scroll to explore
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Startup Bulletin Section */}
      <section
        className={`relative py-20 bg-gradient-to-b from-gray-50 to-white ${!notices.length ? "pt-36" : ""}`}
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              E-Cell Bulletin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover upcoming events, funding opportunities, hackathons, and
              important E-Cell announcements.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {loading ? (
              <div className="text-center py-16">
                <div className="inline-block animate-spin h-10 w-10 border-4 border-indigo-600 border-r-transparent rounded-md"></div>
                <p className="mt-4 text-gray-600">
                  Fetching latest opportunities...
                </p>
              </div>
            ) : notices.length === 0 ? (
              <div className="text-center py-16 bg-white shadow-md shadow-gray-200 border border-gray-100 rounded-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Active Announcements
                </h3>
                <p className="text-gray-500">
                  Stay tuned — exciting startup opportunities are coming soon.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {notices.map((notice, index) => (
                  <motion.div
                    key={notice._id}
                    className={`group relative bg-white shadow-md border shadow-gray-200 border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-md`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Urgent Left Border Accent */}
                    {notice.priority === "urgent" && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-red-500"></div>
                    )}

                    <div className="p-6">
                      {/* Category & Priority */}
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide
                    ${categoryColors[notice.category] || "bg-gray-100 text-gray-800"}`}
                        >
                          {categoryLabels[notice.category] || notice.category}
                        </span>

                        {notice.priority === "urgent" && (
                          <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                            Urgent
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {notice.title}
                      </h3>

                      {/* Content */}
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {notice.content}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between flex-wrap gap-3 text-sm">
                        <div className="flex items-center gap-5 text-gray-500">
                          <span>
                            {new Date(notice.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>

                          {notice.venue && (
                            <span className="flex items-center gap-1">
                              📍 {notice.venue}
                            </span>
                          )}
                        </div>

                        <a
                          href={`/notices#${notice._id}`}
                          className="text-indigo-600 font-semibold hover:underline"
                        >
                          Explore →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* View All Button */}
            <div className="text-center mt-12">
              <a
                href="/notices"
                className="inline-flex items-center justify-center rounded bg-indigo-600 text-white px-8 py-3 font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                View All Announcements
                <svg
                  className="w-5 h-5 ml-2"
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
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section - Redesigned */}
      <section className="py-20">
        {/* <div className="container mx-auto px-4 mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entrepreneurship Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students to innovate, build, and scale impactful
              ventures through hands-on entrepreneurial experiences.
            </p>
          </motion.div>
        </div> */}

        {[
          {
            title: "Startup Incubation & Mentorship",
            description:
              "Transform your ideas into scalable ventures with structured mentorship, funding guidance, and access to industry experts and alumni founders.",
            image: "/homepage_images/incubat.jpg",
            stats: [
              { number: "50+", label: "Startup Ideas" },
              { number: "20+", label: "Active Mentors" },
              { number: "10+", label: "Incubated Startups" },
            ],
            color: "from-indigo-600 to-blue-500",
            buttonText: "Explore Incubation",
            link: "/ecell/incubation",
          },
          {
            title: "Hackathons & Innovation Challenges",
            description:
              "Participate in high-impact hackathons, case competitions, and business model challenges designed to test creativity and execution skills.",
            image: "/homepage_images/hack.jpg",
            stats: [
              { number: "15+", label: "Annual Events" },
              { number: "1000+", label: "Participants" },
              { number: "5+", label: "Major Hackathons" },
            ],
            color: "from-slate-600 to-purple-500",
            buttonText: "View Events",
            link: "/ecell/events",
          },
          {
            title: "Workshops & Speaker Sessions",
            description:
              "Learn directly from founders, investors, and industry leaders through masterclasses, networking sessions, and startup bootcamps.",
            image: "/homepage_images/work2.jpg",
            stats: [
              { number: "25+", label: "Speaker Sessions" },
              { number: "10+", label: "Bootcamps" },
              { number: "30+", label: "Industry Experts" },
            ],
            color: "from-orange-600 to-yellow-500",
            buttonText: "Meet Our Speakers",
            link: "/ecell/speakers",
          },
        ].map((activity, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute inset-0">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${activity.color} mix-blend-multiply opacity-90`}
              />
            </div>

            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px] py-20 relative">
                <div className="text-white">
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    {activity.title}
                  </motion.h3>

                  <motion.p
                    className="text-xl mb-8 text-white/90"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    {activity.description}
                  </motion.p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {activity.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm  p-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <div className="text-2xl font-bold">{stat.number}</div>
                        <div className="text-sm text-white/80">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    className="bg-white text-gray-900 px-8 py-3  font-semibold hover:bg-white/90 transition-all rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={activity.link}
                  >
                    {activity.buttonText}
                  </motion.a>
                </div>

                <div className="hidden md:block"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vibrant Entrepreneurship Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured initiatives designed to cultivate innovation,
              leadership, and startup thinking across campus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Startup Incubation Program",
                category: "Incubation",
                description:
                  "End-to-end support for transforming ideas into scalable ventures with mentorship and investor access.",
                image: "/homepage_images/incubation1.jpg",
              },
              {
                name: "Campus Founder Fellowship",
                category: "Leadership",
                description:
                  "A selective cohort program for aspiring student founders to build, validate, and launch startups.",
                image: "/homepage_images/leadership.jpg",
              },
              {
                name: "Investor Connect Series",
                category: "Funding",
                description:
                  "Pitch directly to angel investors, VCs, and alumni entrepreneurs through curated demo days.",
                image: "/homepage_images/funding2.avif",
              },
              {
                name: "Startup Bootcamps",
                category: "Training",
                description:
                  "Intensive workshops covering product-market fit, GTM strategy, branding, and fundraising.",
                image: "/homepage_images/training.png",
              },
              {
                name: "Innovation Challenges",
                category: "Competition",
                description:
                  "Solve real-world industry problems through national-level startup and case competitions.",
                image: "/homepage_images/competition.webp",
              },
              {
                name: "Alumni Founder Network",
                category: "Networking",
                description:
                  "Connect with successful alumni founders for mentorship, partnerships, and collaboration.",
                image: "/homepage_images/networking.jpg",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="h-56 relative">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />

                  {/* Category Badge (Sharp edges) */}
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-3 py-1 uppercase tracking-wide font-semibold">
                    {program.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mt-6">
                    <a
                      href="/programs"
                      className="inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                    >
                      Explore Program →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* from the desk of Incharge*/}
      <section className="py-16 bg-white border-t-4 border-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left Column - Faculty Advisor */}
              <div className="md:w-1/3 bg-gray-50 p-6 border border-gray-200">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 overflow-hidden border-2">
                    <img
                      src="/dinesh.jpg"
                      alt="Faculty Advisor"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-indigo-900 mb-2">
                    Dr. DINESH KUMAR
                  </h3>
                  <p className="text-gray-700 mb-1">
                    Faculty Advisor, Entrepreneurship Cell
                  </p>
                  <p className="text-gray-600 text-sm">NIT Jamshedpur</p>
                </div>
              </div>

              {/* Right Column - Message */}
              <div className="md:w-2/3">
                <div className="border-l-4 border-indigo-700 pl-6">
                  <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                    From the Faculty Advisor&apos;s Desk
                  </h2>

                  <div className="space-y-4 text-gray-800">
                    <p className="leading-relaxed">
                      It is my privilege to welcome you to the Entrepreneurship
                      Cell of NIT Jamshedpur. Our mission is to cultivate
                      innovation, leadership, and a strong startup culture among
                      students.
                    </p>

                    <p className="leading-relaxed">
                      The E-Cell serves as a dynamic platform where ideas are
                      nurtured into viable ventures through mentorship,
                      structured programs, industry exposure, and investor
                      engagement.
                    </p>

                    <p className="leading-relaxed">
                      I encourage every student to think boldly, challenge
                      conventional paths, and embrace entrepreneurship as a
                      means of creating meaningful impact.
                    </p>

                    <div className="mt-8 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm">
                        <span className="font-semibold">Office Hours:</span>{" "}
                        Monday to Friday, 10:00 AM - 5:00 PM
                        <br />
                        <span className="font-semibold">Contact:</span>{" "}
                        dinesh.prod@nitjsr.ac.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*enterpreneurship statics section */}
      {/* <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { number: "30+", label: "Startups Mentored" },
              { number: "15+", label: "Investor Sessions" },
              { number: "2000+", label: "Student Participants" },
              { number: "10+", label: "Funding Successes" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-indigo-200 uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Build the Future?
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Join the Entrepreneurship Cell and turn your ideas into
                impactful ventures. Collaborate with innovators, learn from
                founders, and launch your startup journey.
              </p>

              <Link
                href={"/join"}
                className="bg-indigo-600 text-white px-10 py-3 font-semibold hover:bg-indigo-700 transition-all rounded"
              >
                Join E-Cell
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

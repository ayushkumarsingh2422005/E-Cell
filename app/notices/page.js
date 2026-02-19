"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NoticesPage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  // E-Cell specific categories
  const categories = [
    "all",
    "workshops",
    "hackathons",
    "startup_showcases",
    "mentorship",
    "funding_news",
    "success_stories",
    "webinars",
    "competitions",
  ];

  const categoryLabels = {
    all: "📋 All Updates",
    workshops: "🛠️ Workshops & Training",
    hackathons: "💻 Hackathons",
    startup_showcases: "🚀 Startup Showcases",
    mentorship: "🤝 Mentorship Programs",
    funding_news: "💰 Funding & Grants",
    success_stories: "🏆 Success Stories",
    webinars: "🎥 Webinars & Talks",
    competitions: "🎯 Business Competitions",
  };

  const categoryIcons = {
    workshops: "🛠️",
    hackathons: "💻",
    startup_showcases: "🚀",
    mentorship: "🤝",
    funding_news: "💰",
    success_stories: "🏆",
    webinars: "🎥",
    competitions: "🎯",
  };

  const categoryColors = {
    workshops: "bg-orange-100 text-orange-800 border-orange-200",
    hackathons: "bg-purple-100 text-purple-800 border-purple-200",
    startup_showcases: "bg-green-100 text-green-800 border-green-200",
    mentorship: "bg-blue-100 text-blue-800 border-blue-200",
    funding_news: "bg-yellow-100 text-yellow-800 border-yellow-200",
    success_stories: "bg-pink-100 text-pink-800 border-pink-200",
    webinars: "bg-indigo-100 text-indigo-800 border-indigo-200",
    competitions: "bg-red-100 text-red-800 border-red-200",
  };

  useEffect(() => {
    fetchNotices();
  }, [currentPage, selectedCategory, searchQuery]);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: currentPage,
        category: selectedCategory,
        ...(searchQuery && { search: searchQuery }),
      });

      const response = await fetch(`/api/notices?${queryParams}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch updates");
      }

      setNotices(data.notices);
      setTotalPages(data.pagination.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Stats for E-Cell highlights
  const stats = [
    { label: "Active Startups", value: "12+", icon: "🚀" },
    { label: "Workshops Done", value: "24+", icon: "🛠️" },
    { label: "Mentors", value: "18+", icon: "🤝" },
    { label: "Funds Raised", value: "₹2.5Cr+", icon: "💰" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar  />

      {/* Hero Section with E-Cell Theme */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 pt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-5 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              E-Cell Notice Board
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Your Gateway to Entrepreneurship Opportunities, Events, and
              Success Stories
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search opportunities, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
            <svg
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Explore Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all transform hover:scale-105 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                        : "hover:bg-gray-50 text-gray-700 border border-gray-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category !== "all" && (
                        <span>{categoryIcons[category]}</span>
                      )}
                      {categoryLabels[category]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Featured Event Card */}
              <div className="mt-6 p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900">
                  Upcoming: Startup Pitch Fest
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Win up to ₹1 Lakh in funding
                </p>
                <button className="mt-3 text-sm bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all">
                  Register Now →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-r-transparent"></div>
                <p className="mt-4 text-gray-600">Loading opportunities...</p>
              </div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 text-red-800 p-6 rounded-xl border border-red-200"
              >
                {error}
              </motion.div>
            ) : notices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 bg-white rounded-2xl shadow-xl"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  No Opportunities Found
                </h3>
                <p className="text-gray-600">
                  Check back later for exciting updates!
                </p>
              </motion.div>
            ) : (
              <>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                      : "space-y-4"
                  }
                >
                  <AnimatePresence>
                    {notices.map((notice, index) => (
                      <motion.div
                        key={notice._id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.05 }}
                        className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                          viewMode === "grid" ? "" : "flex"
                        }`}
                      >
                        <div
                          className={`p-6 ${viewMode === "grid" ? "" : "flex-1"}`}
                        >
                          {/* Category and Priority Badges */}
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryColors[notice.category] || "bg-gray-100 text-gray-800"}`}
                            >
                              {categoryIcons[notice.category] || "📌"}{" "}
                              {categoryLabels[notice.category] ||
                                notice.category}
                            </span>
                            {notice.priority === "urgent" && (
                              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium flex items-center border border-red-200">
                                <span className="animate-pulse mr-1">🔴</span>
                                Limited Seats
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {notice.title}
                          </h3>

                          {/* Content Preview */}
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {notice.content}
                          </p>

                          {/* Details Section */}
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
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
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {new Date(notice.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                },
                              )}
                            </span>

                            {notice.venue && (
                              <span className="flex items-center gap-1">
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
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                </svg>
                                {notice.venue}
                              </span>
                            )}

                            {notice.registrationDeadline && (
                              <span className="flex items-center gap-1 text-orange-600">
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
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                Deadline:{" "}
                                {new Date(
                                  notice.registrationDeadline,
                                ).toLocaleDateString()}
                              </span>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center justify-between mt-4">
                            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group">
                              Learn More
                              <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>

                            {notice.files && notice.files.length > 0 && (
                              <a
                                href={notice.files[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
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
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                Brochure
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Optional Image/Poster for Grid View */}
                        {viewMode === "grid" && notice.image && (
                          <div className="h-48 rounded-t-2xl overflow-hidden">
                            <img
                              src={notice.image}
                              alt={notice.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center items-center gap-2 mt-12"
                  >
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-xl bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      ← Previous
                    </button>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-xl transition-all ${
                              currentPage === page
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-110"
                                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                            }`}
                          >
                            {page}
                          </button>
                        ),
                      )}
                    </div>
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-xl bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      Next →
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop!
            </h2>
            <p className="text-white/90 mb-8">
              Get the latest entrepreneurship opportunities directly in your
              inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-xl flex-1 max-w-md border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </main>
  );
}

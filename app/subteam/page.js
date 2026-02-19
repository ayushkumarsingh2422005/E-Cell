"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("web_team");
  const [contacts, setContacts] = useState({
    web_team: [],
    content_team: [],
    creative_team: [],
    incubation_team: [],
    corporate_affairs: [],
    public_relations: [],
    operations_team: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contacts");
      if (!response.ok) throw new Error("Failed to fetch contacts");

      const data = await response.json();

      const organizedContacts = {
        web_team: data.filter((c) => c.category === "web_team"),
        content_team: data.filter((c) => c.category === "content_team"),
        creative_team: data.filter((c) => c.category === "creative_team"),
        incubation_team: data.filter((c) => c.category === "incubation_team"),
        corporate_affairs: data.filter(
          (c) => c.category === "corporate_affairs",
        ),
        public_relations: data.filter((c) => c.category === "public_relations"),
        operations_team: data.filter((c) => c.category === "operations_team"),
      };

      setContacts(organizedContacts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const tabLabels = {
    web_team: "Web Team",
    content_team: "Content Team",
    creative_team: "Creative Team",
    incubation_team: "Incubation Team",
    corporate_affairs: "Corporate Affairs",
    public_relations: "Public Relations",
    operations_team: "Operations Team",
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar whiteBg />
        <div className="flex justify-center items-center min-h-screen">
          <div className="h-12 w-12 rounded-full border-4 border-blue-600 border-r-transparent animate-spin" />
        </div>
        <Footer />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar whiteBg />
        <div className="container mx-auto px-4 py-16">
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar/>

      {/* Hero Section with Background Image */}
      <div className="pt-24 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/ourteam.jpg')" }}
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800/90 to-blue-800/10" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Teams
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100 text-lg">
            Meet the teams driving innovation, creativity, outreach, and
            execution.
          </p>

          {/* Induction Banner */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full border border-white/20 shadow-lg">
            <span className="font-semibold tracking-wide">
              Inductions to Be Held Soon
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white sticky top-16 z-20 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {Object.keys(tabLabels).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2
                  ${
                    activeTab === tab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 py-12">
        {contacts[activeTab].length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
              👥
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Team Members Coming Soon
            </h3>
            <p className="mt-2 text-gray-600 max-w-md mx-auto">
              This team will be revealed after the upcoming induction process.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts[activeTab].map((contact) => (
              <div
                key={contact._id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {contact.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mt-1">
                  {contact.position}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {contact.department}
                </p>

                <div className="mt-4 pt-4 border-t space-y-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    📧 {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="block text-sm text-gray-600 hover:text-blue-600"
                  >
                    📞 {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

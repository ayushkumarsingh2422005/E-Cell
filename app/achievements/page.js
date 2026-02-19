'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  'Startups',
  'Hackathons',
  'Competitions',
  'Incubation',
  'Talks',
  'Other'
];

const categoryColors = {
  Startups: 'bg-green-100 text-green-800',
  Hackathons: 'bg-blue-100 text-blue-800',
  Competitions: 'bg-purple-100 text-purple-800',
  Incubation: 'bg-yellow-100 text-yellow-800',
  Talks: 'bg-pink-100 text-pink-800',
  Other: 'bg-gray-100 text-gray-800'
};

const categoryIcons = {
  Startups: '🚀',
  Hackathons: '💻',
  Competitions: '🏆',
  Incubation: '🌱',
  Talks: '🎤',
  Other: '✨'
};

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState([]);
  const [recentAchievements, setRecentAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ category: '' });
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, [filters]);

  const fetchAchievements = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        ...filters,
        status: 'active'
      });

      const response = await fetch(`/api/achievements?${queryParams}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      const sorted = data.achievements.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setRecentAchievements(sorted.filter(a => a.isRecent));
      setAchievements(sorted.filter(a => !a.isRecent));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[90vh]">
        <Image
          src="/achievements/bg.png"
          alt="E-Cell Achievements"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-800/80 to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            E-Cell Achievements
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Celebrating innovation, entrepreneurship, leadership, and impact created
            by our student founders and innovators.
          </motion.p>

          {/* CATEGORY FILTER */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilters({ category: cat })}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition
                ${filters.category === cat
                  ? 'bg-white text-gray-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {categoryIcons[cat]} {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <Stat value="30+" label="Startups Incubated" />
          <Stat value="100+" label="Competitions Won" />
          <Stat value="50+" label="Events Organized" />
          <Stat value="₹1Cr+" label="Funding Exposure" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 container mx-auto px-4">
        {loading && <Loader />}
        {error && <ErrorBox error={error} />}

        {!loading && recentAchievements.length > 0 && (
          <>
            <SectionTitle title="Recent Highlights" />
            <Grid>
              {recentAchievements.map(a => (
                <AchievementCard
                  key={a._id}
                  achievement={a}
                  onClick={() => setSelectedAchievement(a)}
                />
              ))}
            </Grid>
          </>
        )}

        {!loading && achievements.length > 0 && (
          <>
            <SectionTitle title="All Achievements" />
            <Grid>
              {achievements.map(a => (
                <AchievementCard
                  key={a._id}
                  achievement={a}
                  onClick={() => setSelectedAchievement(a)}
                />
              ))}
            </Grid>
          </>
        )}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

const Stat = ({ value, label }) => (
  <div>
    <h3 className="text-4xl font-extrabold">{value}</h3>
    <p className="text-white/80">{label}</p>
  </div>
);

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
);

const Grid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {children}
  </div>
);

const Loader = () => (
  <div className="flex justify-center py-20">
    <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const ErrorBox = ({ error }) => (
  <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
    {error}
  </div>
);

/* ---------- CARD ---------- */
function AchievementCard({ achievement, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-md cursor-pointer overflow-hidden border hover:shadow-lg transition"
    >
      {achievement.images?.[0] && (
        <div className="relative h-40">
          <Image src={achievement.images[0].url} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="p-5">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[achievement.category]}`}>
          {achievement.category}
        </span>
        <h3 className="mt-3 font-bold text-lg">{achievement.title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- MODAL ---------- */
function AchievementModal({ achievement, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-xl max-w-3xl w-full overflow-hidden"
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        {achievement.images?.[0] && (
          <div className="relative h-64">
            <Image src={achievement.images[0].url} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">{achievement.title}</h3>
          <p className="text-gray-600">{achievement.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

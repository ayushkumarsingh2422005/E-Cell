'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGlobe, FaMapMarkerAlt, FaUserTie, FaBuilding, FaCalendarAlt, FaMoneyBillWave, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const DigiCraftPage = () => {
    return (
        <main className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white pt-24 pb-12 md:pt-0 md:pb-0">
                <div className="absolute inset-0 opacity-20">
                    {/* Abstract background pattern could go here */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/homepage_images/networking.jpg')] bg-cover bg-center filter blur-sm"></div>
                </div>
                <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="p-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 flex-shrink-0"
                    >
                        <Image src="/startups/digicraft.png" alt="DigiCraft Logo" width={180} height={180} className="object-contain" />
                    </motion.div>

                    <div className="text-center md:text-left max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight"
                        >
                            DIGICRAFT INNOVATION <br /><span className="text-blue-400">PRIVATE LIMITED</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6"
                        >
                            Transforming visionary ideas into exceptional digital experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex gap-4 justify-center md:justify-start"
                        >
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg backdrop-blur-sm">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-black hover:border-black transition-all shadow-lg backdrop-blur-sm">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all shadow-lg backdrop-blur-sm">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-lg backdrop-blur-sm">
                                <FaYoutube size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Creative Digital Craftsmen</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                            We craft the future of the web, one pixel at a time. DigiCraft is a diversified digital entity operating across three core verticals, driving innovation in technology, commerce, and media.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            {[
                                { title: "Web Development", desc: "Custom web apps with modern frameworks like React and Next.js." },
                                { title: "Mobile Apps", desc: "Native and cross-platform mobile solutions for iOS and Android." },
                                { title: "Cloud Solutions", desc: "Scalable infrastructure and DevOps services on AWS/Azure." },
                                { title: "UI/UX Design", desc: "Beautiful, intuitive user interfaces that engage users." }
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300"
                                >
                                    <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-600">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Verticals Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Verticals</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Main DigiCraft - Innovation */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:bg-blue-50 transition-colors duration-300"
                        >
                            <div className="h-48 bg-blue-100 relative flex items-center justify-center overflow-hidden group">
                                {/* Placeholder for Main DigiCraft Vector Art */}
                                <div className="absolute inset-0 bg-blue-200/50 flex items-center justify-center">
                                    <span className="text-blue-800 font-semibold opacity-50">Vector Art Here</span>
                                </div>
                                <Image
                                    src="/startups/digi_main.png"
                                    alt="Main DigiCraft Innovation Vector Art"
                                    width={1600}
                                    height={900}
                                    className="object-cover relative z-10 drop-shadow-lg"
                                />
                            </div>
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Main DigiCraft</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our core technology arm specializing in custom web development, cloud solutions, and enterprise software. We build the digital backbone for modern businesses.
                                </p>
                            </div>
                        </motion.div>

                        {/* Marketplace */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:bg-purple-50 transition-colors duration-300"
                        >
                            <div className="h-48 bg-purple-100 relative flex items-center justify-center overflow-hidden group">
                                {/* Placeholder for Marketplace Vector Art */}
                                <div className="absolute inset-0 bg-purple-200/50 flex items-center justify-center">
                                    <span className="text-purple-800 font-semibold opacity-50">Vector Art Here</span>
                                </div>
                                <Image
                                    src="/startups/digi_market.png"
                                    alt="DigiCraft Marketplace Vector Art"
                                    width={1600}
                                    height={900}
                                    className="object-cover relative z-10 drop-shadow-lg"
                                />
                            </div>
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Marketplace</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A dynamic ecosystem for digital assets, developer tools, and SaaS products. Home to our flagship products like Pixel and Excela.
                                </p>
                            </div>
                        </motion.div>

                        {/* Media */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:bg-pink-50 transition-colors duration-300"
                        >
                            <div className="h-48 bg-pink-100 relative flex items-center justify-center overflow-hidden group">
                                {/* Placeholder for Media Vector Art */}
                                <div className="absolute inset-0 bg-pink-200/50 flex items-center justify-center">
                                    <span className="text-pink-800 font-semibold opacity-50">Vector Art Here</span>
                                </div>
                                <Image
                                    src="/startups/digi_media.png"
                                    alt="DigiCraft Media Vector Art"
                                    width={1600}
                                    height={900}
                                    className="object-cover relative z-10 drop-shadow-lg"
                                />
                            </div>
                            <div className="p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Media</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Creative storytelling, branding, and digital media production. We amplify narratives that resonate and engage audiences globally.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pixel</h3>
                                <p className="text-blue-500 font-medium mb-4">Color Analysis Tool</p>
                                <p className="text-gray-600 mb-6">Extract and analyze colors from any image with precision and ease. Perfect for designers and developers looking for the perfect palette.</p>
                                <a href="https://pixel.digicraft.one/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                                    Try Pixel
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Excela</h3>
                                <p className="text-purple-500 font-medium mb-4">Project Scaffolding CLI</p>
                                <p className="text-gray-600 mb-6">Simplify project setup with Excela. Quickly configure backend, frontend, or full-stack projects using tools like TailwindCSS, Vite, and MERN stack.</p>
                                <a href="https://www.npmjs.com/package/excela" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
                                    View on NPM
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Information Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="bg-gray-900 p-6 text-white">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                Company Information
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">Official Registry Details</p>
                        </div>
                        <div className="p-8 grid md:grid-cols-2 gap-y-6 gap-x-12">
                            <div className="space-y-4">
                                <InfoItem label="CIN" value="U62010UP2026PTC241890" icon={<span className="text-blue-500 font-bold">#</span>} />
                                <InfoItem label="Registration Number" value="241890" icon={<span className="text-blue-500 font-bold">#</span>} />
                                <InfoItem label="Date of Incorporation" value="20th January, 2026" />
                                <InfoItem label="Company Category" value="Company limited by Shares" />
                                <InfoItem label="Class of Company" value="Private" />
                            </div>
                            <div className="space-y-4">
                                <InfoItem label="Authorized Capital" value="₹1,00,000" />
                                <InfoItem label="Paid-up Capital" value="₹10,000" />
                                <InfoItem label="RoC" value="RoC-Kanpur" />
                                <InfoItem label="Status" value={<span className="text-green-600 font-bold">Active</span>} />
                                <InfoItem label="Listing Status" value="Unlisted" />
                            </div>
                        </div>

                        <div className="border-t border-gray-100 p-8 bg-gray-50">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Directors & Signatories</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">AK</div>
                                    <div>
                                        <p className="font-bold text-gray-900">AYUSH KUMAR SINGH</p>
                                        <p className="text-xs text-gray-500">Director • Appointed 20 Jan 2026</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">RK</div>
                                    <div>
                                        <p className="font-bold text-gray-900">RAJESH KUMAR SINGH</p>
                                        <p className="text-xs text-gray-500">Director • Appointed 20 Jan 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Registered Contact Details</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Address</p>
                                    <p className="text-gray-800 font-medium">Jamui, Po Jamuhar, Chunar, Mirzapur, Uttar Pradesh, India, 231304</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Website</p>
                                    <a href="https://digicraft.one" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">https://digicraft.one</a>
                                    <br />
                                    <a href="https://marketplace.digicraft.one" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">https://marketplace.digicraft.one</a>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
};

// Helper component for Company Info
const InfoItem = ({ label, value, icon }) => (
    <div className="flex items-start gap-3">
        {icon && <div className="mt-1">{icon}</div>}
        <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
            <p className="text-gray-900 font-medium">{value}</p>
        </div>
    </div>
);

export default DigiCraftPage;

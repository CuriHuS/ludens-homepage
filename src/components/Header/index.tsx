"use client";

import React, { useState } from "react";
import Link from "next/link";
import ApplyButton from "@/components/common/ApplyButton";
import { menuItemList } from "./menuItemList";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ludensLogo from "@/assets/icons/ludens.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-[30px]">
            <nav className="max-w-7xl mx-auto px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-3xl font-bold text-white hover:text-gray-200 transition-colors"
                    >
                        <Image 
                            src={ludensLogo} 
                            alt="logo" 
                            width={80} 
                            height={80} 
                            className="brightness-0 invert"
                            priority
                        />
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white hover:text-gray-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {menuItemList.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-lg font-bold text-gray-300 hover:text-white transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <ApplyButton />

                        </div>
                    </div>
                </div>

                {/* Mobile navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="md:hidden mt-4 pb-4">
                                <div className="flex flex-col gap-4">
                                    {menuItemList.map((item, itemIndex) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * itemIndex }}
                                        >
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="text-lg font-bold text-gray-300 hover:text-white transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1*menuItemList.length }}
                                        className="inline-flex"
                                    >
                                        <ApplyButton />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

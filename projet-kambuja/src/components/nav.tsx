"use client"
import NavLinks from "./navLinks";
import Image from "next/image";
import { useState } from "react";
import { easeInOut } from "framer-motion";
import { AnimatePresence, motion } from "motion/react";

export default function Nav({ onClick }: Readonly<{ onClick?: () => void }>) {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)
    const menuVariants = {
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.5,
                ease: easeInOut,
            }
        },
        visible: {
            height: "100%",
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.5,
                ease: easeInOut,
            }
        }
    };
    return (
        <nav className="relative flex justify-between items-center px-5 md:px-15 py-5">

            {/* menu icon */}
            <AnimatePresence initial={false}> {/* pour éviter l'affichage de la nav lors du premier chargement de la page */}
                <button
                    className="absolute z-20 top-0 -left-10 md:left-5 md:-top-5 cursor-pointer"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {!menuOpen && <Image src="/cog.svg" height={40} width={40} alt="ouvrir le menu" />}
                </button>
            </AnimatePresence>

            {/* menu */}
            <AnimatePresence initial={false}> {/* pour éviter l'affichage de la nav lors du premier chargement de la page */}
                {menuOpen && (
                    <motion.div
                        className="absolute z-10 top-30 left-0 w-full md:w-[292px] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
                        key="menu"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <button
                            className="absolute z-20 flex items-center cursor-pointer top-2 left-2 w-8 h-8"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {menuOpen && <Image src="/x.svg" height={40} width={40} alt="fermer le menu" />} Fermer
                        </button>
                        <NavLinks onClick={() => setMenuOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

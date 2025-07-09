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
                        {menuOpen ? <Image src="/x.svg" height={40} width={40} alt="fermer le menu" /> : <Image src="/cog.svg" height={40} width={40} alt="ouvrir le menu" />}
                    </button>
            </AnimatePresence>

            {/* menu */}
            <AnimatePresence initial={false}> {/* pour éviter l'affichage de la nav lors du premier chargement de la page */}
                {menuOpen && (
                    <motion.div
                        className="absolute z-10 top-20 left-0 w-full lg:w-[20%] lg:-top-12"
                        key="menu"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <NavLinks onClick={() => setMenuOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

'use client'
import Image from "next/image";
import Button from "./button";

export default function Card() {
    return (
        <div className="flex flex-col gap-5">
            <Image src="/male-citizen.png" alt="" width={200} height={300} className="m-auto" />
            <div className="">
                <h1 className="text-center font-bold">Général des armées Kosal</h1>
                <p>Le pays de l'ouest rassemble ses troupes vers notre frontière !</p>
            </div>
            <div className="flex flex-col gap-3 md:w-[30%] m-auto">
                <Button text="Préparer des troupes !" />
                <Button text="Surveillez-les de loin." />
            </div>
        </div>
    )
}
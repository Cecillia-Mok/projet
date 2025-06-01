'use client'
import Image from "next/image";

interface Props {
    value: number;
}


export default function Gauge() { //{ value }: Props
    return (
        <div className="relative w-full h-20 flex flex-col justify-evenly md:w-[50%] lg:w-[40%] mx-auto bg-radial from-[#F1BA76] from-30% to-[#DA933C] to-80%">
            <Image src="/corner.png" alt="" width={35} height={35} className="absolute top-0 left-0 size-6 rotate-90" />
            <Image src="/corner.png" alt="" width={35} height={35} className="absolute top-0 right-0 size-6 rotate-180" />
            <Image src="/corner.png" alt="" width={35} height={35} className="absolute bottom-0 left-0 size-6" />
            <Image src="/corner.png" alt="" width={35} height={35} className="absolute bottom-0 right-0 size-6 rotate-270" />
            <div className="flex  place-content-evenly items-center">
                <Image src="/rumduol.svg" alt="" width={30} height={30} className="" />
                <Image src="/citizen.svg" alt="" width={30} height={30} className="" />
                <Image src="/riel.svg" alt="" width={30} height={30} className="" />
                <Image src="/swords.svg" alt="" width={30} height={30} className="" />
            </div>
            <div className="flex  place-content-evenly items-center">
                <div className="w-10 h-2 bg-[#553920] rounded">
                    <div
                        className="w-[50%] h-2 bg-[#F7EAD9] rounded transition-all duration-500 ease-out"
                    //   style={{ width: `${value}%` }}
                    />
                </div>
                <div className="w-10 h-2 bg-[#553920] rounded">
                    <div
                        className="w-[50%] h-2 bg-[#F7EAD9] rounded transition-all duration-500 ease-out"
                    //   style={{ width: `${value}%` }}
                    />
                </div>
                <div className="w-10 h-2 bg-[#553920] rounded">
                    <div
                        className="w-[50%] h-2 bg-[#F7EAD9] rounded transition-all duration-500 ease-out"
                    //   style={{ width: `${value}%` }}
                    />
                </div>
                <div className="w-10 h-2 bg-[#553920] rounded">
                    <div
                        className="w-[50%] h-2 bg-[#F7EAD9] rounded transition-all duration-500 ease-out"
                    //   style={{ width: `${value}%` }}
                    />
                </div>
            </div>
        </div>
    )
}
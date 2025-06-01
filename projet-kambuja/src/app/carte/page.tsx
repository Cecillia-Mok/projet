'use client'
import Card from "../../components/card";
import Gauge from "../../components/gauge";

export default function Carte() {
    return (
        <section className="h-full flex flex-col gap-15">
            <Gauge></Gauge>
            <Card />
        </section>
    )
}
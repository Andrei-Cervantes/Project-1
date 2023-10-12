import React from "react";
import { OurClients } from "../OurClients";
import { OurProducts } from "../OurProducts";
import { HomeHero } from "../HomeHero";

export const Home = () => {
    return (
        <>
            <HomeHero />
            <OurClients />
            <OurProducts/>
        </>
    )
}
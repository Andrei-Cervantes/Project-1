import React from "react";
import { OurClients } from "../OurClients";
import { OurProducts } from "../OurProducts";
import { HomeHero } from "../HomeHero";
import { HomeBanner } from "../HomeBanner";

export const Home = () => {
    return (
        <>
            <HomeBanner />
            <OurClients />
            <HomeHero />
            <OurProducts/>
        </>
    )
}
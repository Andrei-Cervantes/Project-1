import React from "react";
import { OurClients } from "../OurClients";
import { OurProducts } from "../OurProducts";
import { HomeHero } from "../HomeHero";
import { HomeBanner } from "../HomeBanner";
import { CompanyDesc } from "../CompanyDesc";
import { ModesOfPayment } from "../ModesOfPayment";

export const Home = () => {
    return (
        <>
            <HomeBanner />
            <CompanyDesc />
            <OurClients />
            <HomeHero />
            <OurProducts/>
            <ModesOfPayment />
        </>
    )
}
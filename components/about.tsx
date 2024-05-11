"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center text-lg leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* {" "}
      <span className="font-medium"></span>
      <span className="italic"></span>
      <span className="underline"></span> */}
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      My journey began with hands-on engineering experience at 
        {" "}
        <span className="font-medium">South East Central Railways and Bhilai Steel Plant</span>{" "}, where I honed my skills in maintenance, design, and production. This foundation laid the groundwork for my transition into the dynamic world of sales and marketing.{" "} 
      </p>
      <p className="mb-3">
        At
        <span className="font-medium"> ITC Limited</span>{" "}, I specialized in   
        <span className="italic"> instore marketing and trade loyalty initiatives, </span> playing a pivotal role in driving <span className="italic">{" "}targeted sales growth and optimizing merchandising strategies</span> within the <span className="font-medium">{" "}FMCG sector</span>. My <span className="underline">ability to manage a team</span>, negotiate prime shelf spaces, {" "}and oversee product launches <span className="font-medium">{" "}contributed significantly to our market presence</span> across <span className="underline">{" "}Maharashtra and Chhattisgarh</span>. 
      </p>

      <p>
        Currently, as an<span className="font-medium"> Assistant Manager at Maruti Suzuki</span>, {" "}I <span className="underline">lead a team of Spare Parts Managers and Operational Parts Managers</span>, {" "}steering us toward achieving sales targets and expanding our portfolio of spare parts. My key strengths lie in <span className="italic">B2B marketing, customer satisfaction, and automotive engineering,</span>{" "} allowing me to bridge the gap between technical intricacies and <span className="font-medium">customer-centric solutions.</span>
      </p>
    </motion.section>
  );
}

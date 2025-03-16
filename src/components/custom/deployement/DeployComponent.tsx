"use client";
import React, { useState } from 'react'
import SegmentedControl from "@/components/custom/SegmentedControl";
import Repositories from "@/components/custom/Repositories";
export default function DeployComponent() {
    const [selected, setSelected] = useState("github");

  return (
    <div><SegmentedControl selected={selected} setSelected={setSelected} />
            <Repositories selected={selected} /></div>
  )
}

"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/devices", {
    }).then(res => {
      if (res.ok) {
        res.json().then(data => console.log(data))
      }
    })
  }, [])

  return (
    <main>
      SwitchBot Controller
    </main>
  )
}

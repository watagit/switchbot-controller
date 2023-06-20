"use client";

import { useEffect, useState } from "react";

import { type GetDeviceList } from "~/app/api/devices/route";

export default function Home() {
  const [data, setData] = useState<{ data: GetDeviceList }>();

  useEffect(() => {
    fetch("/api/devices", {}).then((res) => {
      if (res.ok) {
        res.json().then((data) => setData(data));
      }
    });
  }, []);

  if (!data) return <p>loading</p>;
  return (
    <main>
      SwitchBot Controller
      <ul>
        {data.data.body.infraredRemoteList.map((device) => (
          <li key={device.deviceId}>
            <h2>{device.deviceName}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}

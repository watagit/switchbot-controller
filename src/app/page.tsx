"use client";

import useSWR from "swr";

import { type InfraredDeviceList } from "~/app/api/devices/route";
import { fetcher } from "~/util/fetcher";

export default function Home() {
  const { data: infraredDevices, error } = useSWR<InfraredDeviceList>(
    "/api/devices",
    fetcher
  );

  if (error) return <p>error</p>;
  if (!infraredDevices) return <p>loading</p>;
  return (
    <main>
      SwitchBot Controller
      <ul>
        {infraredDevices.map((device) => (
          <li key={device.deviceId}>
            <h2>{device.deviceName}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}

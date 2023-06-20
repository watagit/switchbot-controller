"use client";

import axios from "axios";
import useSWR from "swr";

import { type GetDeviceList } from "~/app/api/devices/route";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error } = useSWR<{ data: GetDeviceList }>(
    "/api/devices",
    fetcher
  );

  if (error) return <p>error</p>;
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

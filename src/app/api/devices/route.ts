import { NextResponse } from "next/server";

import type { InfraredDevice } from "~/type/device";
import { client } from "~/util/client";

export type InfraredDeviceList = Array<InfraredDevice>;

export async function GET(): Promise<NextResponse<InfraredDeviceList>> {
  const res = await client.get("/devices");
  const data = await res.data;

  const response: InfraredDeviceList = data.body.infraredRemoteList;

  return NextResponse.json(response);
}

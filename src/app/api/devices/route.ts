import crypto from "crypto";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

import type { InfraredDevice, NonInfraredDevice } from "~/type/device";

const token = process.env.SWITCHOT_TOKEN!;
const secret = process.env.SWITCHBOT_SECRET!;

export type GetDeviceList = {
  body: {
    deviceList: Array<NonInfraredDevice>,
    infraredRemoteList: Array<InfraredDevice>,
  },
};

export async function GET(): Promise<NextResponse<{ data: GetDeviceList }>> {
  const timestamp = Date.now().toString();
  const nonce = uuidv4();
  const signTerm = crypto.createHmac('sha256', secret)
    .update(Buffer.from(token + timestamp + nonce, 'utf-8'))
    .digest();
  const sign = signTerm.toString('base64')

  const res = await fetch("https://api.switch-bot.com/v1.0/devices", {
    mode: "no-cors",
    headers: {
      Authorization: token,
      sign: sign,
      t: timestamp,
      nonce: nonce,
    }
  });
  const data = await res.json();

  return NextResponse.json({ data })
}

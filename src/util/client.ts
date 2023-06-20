import crypto from "crypto";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { SWITCHBOT_SECRET, SWITCHBOT_TOKEN } from "~/config/env";

const timestamp = Date.now().toString();
const nonce = uuidv4();
const signTerm = crypto
  .createHmac("sha256", SWITCHBOT_SECRET)
  .update(Buffer.from(SWITCHBOT_TOKEN + timestamp + nonce, "utf-8"))
  .digest();
const sign = signTerm.toString("base64");

export const client = axios.create({
  baseURL: "https://api.switch-bot.com/v1.0",
  headers: {
    Authorization: SWITCHBOT_TOKEN,
    sign: sign,
    t: timestamp,
    nonce: nonce,
  },
});

import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const value = await kv.incr("abei-counter");
  res.status(200).json({ value });
}

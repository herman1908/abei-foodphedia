export default async function handler(req, res) {
  const KV_KEY = "abei_visitors";

  let value = Number(await req.headers["x-vercel-kv"]?.get(KV_KEY) || 0);
  value++;

  await req.headers["x-vercel-kv"]?.set(KV_KEY, value);

  res.status(200).json({ value });
}
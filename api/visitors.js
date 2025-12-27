let count = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    count++;
    return res.status(200).json({ value: count });
  }

  return res.status(200).json({ value: count });
}

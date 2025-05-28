
let inventory = [
  { id: 1, name: "Indomie Chicken", stock: 230, price: 3.5 },
  { id: 2, name: "Basmati Rice", stock: 80, price: 45.0 },
  { id: 3, name: "Crackers", stock: 150, price: 6.0 },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(inventory);
  } else if (req.method === "POST") {
    const newItem = { ...req.body, id: Date.now() };
    inventory.push(newItem);
    res.status(201).json(newItem);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

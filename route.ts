
let inventory = [
  { id: 1, name: "Indomie Chicken", stock: 230, price: 3.5 },
  { id: 2, name: "Basmati Rice", stock: 80, price: 45.0 },
  { id: 3, name: "Crackers", stock: 150, price: 6.0 },
];

export async function GET() {
  return Response.json(inventory);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newItem = { ...body, id: Date.now() };
  inventory.push(newItem);
  return Response.json(newItem, { status: 201 });
}

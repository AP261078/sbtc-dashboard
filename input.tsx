export function Input({ placeholder, type = "text", value, onChange }) {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="border p-2 rounded w-full" />;
}
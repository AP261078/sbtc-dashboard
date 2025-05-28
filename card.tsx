export function Card({ children, className = "" }) {
  return <div className={`rounded-2xl shadow p-4 bg-white dark:bg-gray-800 ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
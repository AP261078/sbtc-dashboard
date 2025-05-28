export function Dialog({ children }) { return <div>{children}</div>; }
export function DialogTrigger({ children }) { return children; }
export function DialogContent({ children }) { return <div className="bg-white p-4 rounded shadow-xl absolute top-1/4 left-1/4 w-1/2 z-50">{children}</div>; }
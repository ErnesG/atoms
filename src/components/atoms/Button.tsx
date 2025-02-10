interface ButtonProps  {
    children: string;
    onClick:() => void;
    variant?: "primary" | "secondary";
};

export default function Button ({children, onClick, variant="primary"}: ButtonProps){
    const baseStyle = "px-4 py-2 rounded-lg transition-all";
    const styles = variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-black hover:bg-gray-400";

    return (
        <button className={`${baseStyle} ${styles}`} onClick={onClick}>
            {children}
        </button>
    )
}
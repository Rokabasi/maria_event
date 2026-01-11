interface MenuProps {
  isActive: boolean;
  onClick?: () => void;
}

export default function Menu({ isActive, onClick }: MenuProps) {
  return (
    <div className="relative w-8 h-8 m-2 cursor-pointer" onClick={onClick}>
      {/* Barre 1 */}
      <span
        className={`absolute left-1/2 top-1/2 h-0.5 bg-black transition-all duration-300
          ${isActive
            ? "w-6 -translate-x-1/2 -translate-y-1/2 rotate-45"
            : "w-8 -translate-x-1/2 -translate-y-2"
          }
        `}
      />

      {/* Barre 2 */}
      <span
        className={`absolute left-1/2 top-1/2 h-0.5 bg-black transition-all duration-300
          ${isActive ? "opacity-0" : "w-6 -translate-x-1/2 -translate-y-1/2"}
        `}
      />

      {/* Barre 3 */}
      <span
        className={`absolute left-1/2 top-1/2 h-0.5 bg-black transition-all duration-300
          ${isActive
            ? "w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45"
            : "w-8 -translate-x-1/2 translate-y-2"
          }
        `}
      />
    </div>
  );
}

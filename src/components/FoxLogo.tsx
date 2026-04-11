export default function FoxLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Geometric fox head */}
      <path
        d="M6 8L14 2L20 12L26 2L34 8L30 20L34 32H24L20 38L16 32H6L10 20L6 8Z"
        fill="#FF6B2B"
      />
      <path
        d="M14 2L20 12L26 2L22 10L20 16L18 10L14 2Z"
        fill="#e85a1e"
      />
      {/* Eyes */}
      <circle cx="15" cy="18" r="2" fill="white" />
      <circle cx="25" cy="18" r="2" fill="white" />
      {/* Nose */}
      <path d="M18 24L20 26L22 24L20 23L18 24Z" fill="white" opacity="0.9" />
    </svg>
  );
}

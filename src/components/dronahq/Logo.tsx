interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({ className = "w-8 h-8", showText = true, textClassName = "text-white font-bold text-xl" }: LogoProps) {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#006A67" />
            <stop offset="100%" stopColor="#00B4A8" />
          </linearGradient>
        </defs>

        <rect
          width="100"
          height="100"
          rx="20"
          fill="url(#logoGradient)"
        />

        <path
          d="M30 35 L50 25 L70 35 L70 55 L50 65 L30 55 Z"
          fill="white"
          fillOpacity="0.9"
        />

        <path
          d="M50 35 L50 55"
          stroke="#006A67"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M40 40 L50 35 L60 40"
          stroke="#006A67"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="35" cy="75" r="4" fill="white" fillOpacity="0.9" />
        <circle cx="50" cy="75" r="4" fill="white" fillOpacity="0.9" />
        <circle cx="65" cy="75" r="4" fill="white" fillOpacity="0.9" />
      </svg>
      {showText && (
        <span className={textClassName}>Prompt2Prod</span>
      )}
    </div>
  );
}

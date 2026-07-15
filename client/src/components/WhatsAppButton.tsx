export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971528955780"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Breathing rings */}
      <span
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          backgroundColor: "#25D366",
          animation: "wa-breathe 2.5s ease-in-out infinite",
        }}
      />
      <span
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          backgroundColor: "#25D366",
          animation: "wa-breathe 2.5s ease-in-out infinite 0.6s",
        }}
      />

      {/* Official WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="relative z-10 w-8 h-8"
        fill="none"
      >
        <path
          fill="#fff"
          d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
        />
        <path
          fill="#25D366"
          d="M24 7.2C14.8 7.2 7.2 14.8 7.2 24c0 3.3.9 6.4 2.6 9.1l.4.6-1.7 6.2 6.4-1.7.6.3c2.6 1.5 5.5 2.3 8.5 2.3 9.2 0 16.8-7.6 16.8-16.8S33.2 7.2 24 7.2z"
        />
        <path
          fill="#fff"
          d="M19.4 15.2c-.4-1-.9-1-.9-1s-.7-.1-1.1.1c-.4.2-1.6 1.6-2 2.6-.4 1-.2 2.3.2 3 .4.8 2.1 3.3 4.9 5.7 2.8 2.4 5.2 3.3 6.2 3.6 1 .3 2 .1 2.7-.4.6-.5 1.2-1.4 1.4-1.9.2-.5.1-.9-.1-1.2-.2-.3-2.3-1.3-2.7-1.5-.4-.2-.7-.2-1.1.3-.4.5-.8 1-1.1 1.3-.2.2-.4.2-.7.1-.3-.1-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.5.4-.7.1-.2 0-.5-.1-.7-.1-.2-.9-2.3-1.3-3.1l.6.8z"
        />
      </svg>

      <style>{`
        @keyframes wa-breathe {
          0%   { transform: scale(1);    opacity: 0.55; }
          50%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1);    opacity: 0.55; }
        }
      `}</style>
    </a>
  );
}

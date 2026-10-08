export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden fill="currentColor">
        <path fillRule="evenodd" d="M7 28V4h12a8 8 0 0 1 3.4 15.2L27 28h-6.4l-4.1-7.6H13V28zM13 9.5v6h6a3 3 0 0 0 0-6z" />
      </svg>
    </span>
  );
}

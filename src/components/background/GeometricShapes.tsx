export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Dot grid */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Vertical line top-right */}
      <div
        className="absolute top-20 right-24 w-px h-40 opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(139,92,246,0.6), transparent)' }}
      />

      {/* Vertical line bottom-left */}
      <div
        className="absolute bottom-32 left-16 w-px h-32 opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(96,165,250,0.6), transparent)' }}
      />

      {/* Ring top-left */}
      <div
        className="absolute top-32 left-1/3 w-48 h-48 rounded-full opacity-[0.04]"
        style={{ border: '1px solid rgba(139,92,246,0.8)' }}
      />

      {/* Ring bottom-right */}
      <div
        className="absolute bottom-24 right-1/4 w-32 h-32 rounded-full opacity-[0.04]"
        style={{ border: '1px solid rgba(96,165,250,0.8)' }}
      />
    </div>
  )
}

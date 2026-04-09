import { GeometricShapes } from './GeometricShapes'

export function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Blob 1 — violet, top-left */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full animate-blob-1"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Blob 2 — blue, top-right */}
      <div
        className="absolute -top-16 right-0 w-[400px] h-[400px] rounded-full animate-blob-2"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Blob 3 — pink, center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-blob-3"
        style={{
          background: 'radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Blob 4 — indigo, bottom-left */}
      <div
        className="absolute -bottom-32 -left-16 w-[450px] h-[450px] rounded-full animate-blob-1"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '-7s',
        }}
      />

      {/* Blob 5 — violet, bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full animate-blob-2"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '-14s',
        }}
      />

      <GeometricShapes />
    </div>
  )
}

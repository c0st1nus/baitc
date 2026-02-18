export function StaticBackground({
  mode,
  animated,
}: {
  mode?: string
  animated?: boolean
}) {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-obsidian" />

      {/* Mode-specific gradients with transition */}
      <div
        className="absolute inset-0 transition-opacity duration-800 ease-in-out"
        style={{
          opacity: mode === 'blockchain' ? 1 : 0,
          background:
            'radial-gradient(ellipse at top right, rgba(34,197,94,0.06), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-800 ease-in-out"
        style={{
          opacity: mode === 'ai' ? 1 : 0,
          background:
            'radial-gradient(ellipse at center, rgba(34,197,94,0.04), transparent 70%)',
        }}
      />

      {/* Neutral glow (default) */}
      <div
        className="absolute inset-0 transition-opacity duration-800 ease-in-out"
        style={{
          opacity: !mode || mode === 'neutral' ? 1 : 0,
          background:
            'radial-gradient(ellipse at top right, rgba(34,197,94,0.04), transparent 60%)',
        }}
      />

      {/* Animated gradient orb for medium tier */}
      {animated && (
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background:
              'radial-gradient(circle, rgba(34,197,94,0.3), transparent 70%)',
            animation: 'float-orb 20s ease-in-out infinite',
          }}
        />
      )}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Float orb keyframe inject */}
      {animated && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes float-orb {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(50px, -30px) scale(1.1); }
                50% { transform: translate(-20px, 40px) scale(0.95); }
                75% { transform: translate(30px, 20px) scale(1.05); }
              }
            `,
          }}
        />
      )}
    </div>
  )
}

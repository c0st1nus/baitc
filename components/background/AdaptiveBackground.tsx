'use client'
import dynamic from 'next/dynamic'
import { useDeviceCapability } from '@/hooks/useDeviceCapability'
import { useMode } from '@/context/ModeContext'
import { StaticBackground } from './StaticBackground'

const BlockchainCanvas = dynamic(() => import('./BlockchainCanvas'), {
  ssr: false,
  loading: () => <StaticBackground />,
})

export function AdaptiveBackground() {
  const capability = useDeviceCapability()
  const { mode } = useMode()

  // Low-end: only CSS gradient + grain
  if (capability === 'low') {
    return <StaticBackground mode={mode} />
  }

  // Medium: CSS animation (no Canvas)
  if (capability === 'medium') {
    return <StaticBackground mode={mode} animated />
  }

  // High: full Canvas for blockchain mode, CSS for others
  return (
    <>
      <StaticBackground mode={mode} />
      {mode === 'blockchain' && (
        <div className="transition-opacity duration-800 ease-in-out">
          <BlockchainCanvas />
        </div>
      )}
    </>
  )
}

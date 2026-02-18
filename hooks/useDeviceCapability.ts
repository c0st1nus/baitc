'use client'
import { useEffect, useState } from 'react'

type Capability = 'low' | 'medium' | 'high'

function detectCapability(): Capability {
  const cpuCores = navigator.hardwareConcurrency ?? 2
  const memory = (navigator as any).deviceMemory ?? 2
  const connection = (navigator as any).connection
  const isSaveData = connection?.saveData === true
  const effectiveType = connection?.effectiveType
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced || isSaveData || effectiveType === '2g' || effectiveType === 'slow-2g') {
    return 'low'
  }

  if (cpuCores <= 2 || memory <= 2 || effectiveType === '3g') {
    return 'medium'
  }

  return 'high'
}

export function useDeviceCapability() {
  const [capability, setCapability] = useState<Capability>('medium')

  useEffect(() => {
    setCapability(detectCapability())
  }, [])

  return capability
}

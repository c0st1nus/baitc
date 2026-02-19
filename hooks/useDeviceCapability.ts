 'use client'
import { useEffect, useState } from 'react'

type Capability = 'low' | 'medium' | 'high'

interface NavigatorWithExtensions extends Navigator {
  deviceMemory?: number
  connection?: {
    saveData?: boolean
    effectiveType?: string
  }
}

function detectCapability(): Capability {
  const nav = navigator as NavigatorWithExtensions
  const cpuCores = navigator.hardwareConcurrency ?? 2
  const memory = nav.deviceMemory ?? 2
  const connection = nav.connection
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
  const [capability, setCapability] = useState<Capability | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCapability(detectCapability())
  }, [])

  return capability
}

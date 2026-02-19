'use client'
import { createContext, useContext, useState, useCallback, useEffect } from 'react'

type Lang = 0 | 1 | 2 // 0: EN, 1: RU, 2: KZ

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (arr: readonly [string, string, string]) => string
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(1) // SSR default: RU

  // Hydrate from localStorage / browser after mount
  useEffect(() => {
    const saved = localStorage.getItem('baitc-lang')
    if (saved === '0' || saved === '1' || saved === '2') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(Number(saved) as Lang)
      return
    }
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('kk') || browserLang.startsWith('kz')) {
      setLangState(2)
    } else if (browserLang.startsWith('en')) {
      setLangState(0)
    }
    // else keep RU default
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('baitc-lang', String(l))
    if ('vibrate' in navigator) navigator.vibrate(10)
  }, [])

  const t = useCallback(
    (arr: readonly [string, string, string]) => arr[lang],
    [lang]
  )

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

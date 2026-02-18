'use client'
import { useMemo } from 'react'
import { cn } from '@/lib/utils'

const TOKEN_MAP = [
  {
    regex: /\[([^\]]+)\]/g,
    render: (text: string, i: number) => (
      <span
        key={i}
        className={cn(
          'bg-linear-to-r from-lime-400 to-emerald-500',
          'bg-clip-text text-transparent',
          'drop-shadow-[0_0_8px_rgba(34,197,94,0.35)]',
          'inline-block'
        )}
      >
        {text}
      </span>
    ),
  },
  {
    regex: /\*([^*]+)\*/g,
    render: (text: string, i: number) => (
      <strong key={i} className="font-bold text-white">
        {text}
      </strong>
    ),
  },
  {
    regex: /_([^_]+)_/g,
    render: (text: string, i: number) => (
      <em key={i} className="not-italic text-slate-400">
        {text}
      </em>
    ),
  },
  {
    regex: /~([^~]+)~/g,
    render: (text: string, i: number) => (
      <span key={i} className="line-through opacity-40">
        {text}
      </span>
    ),
  },
  {
    regex: /\|([^|]+)\|/g,
    render: (text: string, i: number) => (
      <span
        key={i}
        className={cn(
          'font-mono text-[10px] uppercase tracking-widest',
          'text-lime-500 leading-none'
        )}
      >
        {text}
      </span>
    ),
  },
] as const

type Segment = { type: 'text'; value: string } | { type: 'node'; node: React.ReactNode }

function parseSmartText(input: string): React.ReactNode[] {
  let segments: Segment[] = [{ type: 'text', value: input }]

  TOKEN_MAP.forEach(({ regex, render }) => {
    segments = segments.flatMap((seg, segIdx) => {
      if (seg.type === 'node') return [seg]

      const parts: Segment[] = []
      let lastIndex = 0
      let match: RegExpExecArray | null
      const re = new RegExp(regex.source, 'g')

      while ((match = re.exec(seg.value)) !== null) {
        if (match.index > lastIndex) {
          parts.push({ type: 'text', value: seg.value.slice(lastIndex, match.index) })
        }
        parts.push({ type: 'node', node: render(match[1], segIdx * 1000 + match.index) })
        lastIndex = match.index + match[0].length
      }

      if (lastIndex < seg.value.length) {
        parts.push({ type: 'text', value: seg.value.slice(lastIndex) })
      }

      return parts.length ? parts : [seg]
    })
  })

  return segments.map((seg) =>
    seg.type === 'text' ? seg.value : seg.node
  )
}

interface SmartTextProps {
  text: string
  as?: keyof React.JSX.IntrinsicElements
  className?: string
}

export function SmartText({ text, as: Tag = 'span', className }: SmartTextProps) {
  const nodes = useMemo(() => parseSmartText(text), [text])
  const withBreaks = nodes.flatMap((node, i) => {
    if (typeof node !== 'string') return [node]
    return node.split('\n').flatMap((line, j, arr) =>
      j < arr.length - 1 ? [line, <br key={`br-${i}-${j}`} />] : [line]
    )
  })
  return <Tag className={className}>{withBreaks}</Tag>
}

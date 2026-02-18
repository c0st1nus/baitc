import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  depth?: 'surface' | 'hover' | 'modal'
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

const depthStyles = {
  surface: 'glass',
  hover: 'glass-hover',
  modal: 'glass-modal',
} as const

export function GlassCard({
  children,
  depth = 'surface',
  className,
  as: Tag = 'div',
}: GlassCardProps) {
  return (
    
    <Tag
      className={cn(
        depthStyles[depth],
        'rounded-2xl transition-all duration-300',
        className
      )}
    >
      {children}
    </Tag>
  )
}

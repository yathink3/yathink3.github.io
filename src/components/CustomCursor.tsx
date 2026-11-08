import React, { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let currentX = -100
    let currentY = -100
    let targetX = -100
    let targetY = -100
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setPos({ x: targetX, y: targetY })
      setVisible(true)

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null
      const isClickable = target?.closest('a, button, input, textarea, [role="button"]')
      setIsHovered(!!isClickable)
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const updateRing = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      setRingPos({ x: currentX, y: currentY })
      animationFrameId = requestAnimationFrame(updateRing)
    }

    animationFrameId = requestAnimationFrame(updateRing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          transition: 'transform 0.04s linear',
        }}
        aria-hidden="true"
      />
      {/* Outer ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-white/60 pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-white/10 border-white'
            : 'w-7 h-7 -ml-3.5 -mt-3.5'
        }`}
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  )
}


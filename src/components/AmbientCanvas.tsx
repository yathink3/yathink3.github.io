import React, { useEffect, useRef } from 'react'

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    canvas.width = W * dpr
    canvas.height = H * dpr
    ctx.scale(dpr, dpr)

    const mouse = { x: -9999, y: -9999 }
    const numPoints = Math.min(75, Math.floor((W * H) / 18000))

    const pts = Array.from({ length: numPoints }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
    }))

    const handleResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const linkDist = 120

      // Update positions
      for (const p of pts) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)

        if (dist < 140) {
          p.vx += (dx / dist) * 0.04
          p.vy += (dy / dist) * 0.04
        }

        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx + 0.08
        p.y += p.vy + 0.04

        if (p.x < 0) p.x += W
        if (p.x > W) p.x -= W
        if (p.y < 0) p.y += H
        if (p.y > H) p.y -= H
      }

      // Draw links
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.14
            ctx.strokeStyle = `rgba(230, 199, 156, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        // Draw particle
        ctx.fillStyle = 'rgba(242, 240, 234, 0.45)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  )
}

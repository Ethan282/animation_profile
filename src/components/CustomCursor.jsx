import React, { useEffect, useState } from 'react'

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-9999"
      style={{ transform: `translate(${position.x - 40}px, ${position.y - 40}px)` }}
    >
      <div className="h-20 w-20 rounded-full bg-linear-to-br from-pink-800 via-purple-800 to-blue-800 blur-3xl opacity-80" />
    </div>
  )
}

export default CustomCursor
'use client'

import { useEffect } from 'react'

interface BodyClassProps {
  className: string
}

export default function BodyClass({ className }: BodyClassProps) {
  useEffect(() => {
    if (!className) return

    const classes = className.split(' ').filter(Boolean)

    classes.forEach(cls => document.body.classList.add(cls))

    return () => {
      classes.forEach(cls => document.body.classList.remove(cls))
    }
  }, [className])

  return null
}

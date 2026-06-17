'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type BoatPreview = {
  id: string
  name: string
  slug: string
  pricePerHour?: number
}

type BookingDraft = {
  boat: BoatPreview | null
  date?: string
  startTime?: string
  endTime?: string
  guests?: number
}

type BookingContextValue = {
  isOpen: boolean
  draft: BookingDraft
  openBooking: (boat?: BoatPreview) => void
  closeBooking: () => void
  updateDraft: (patch: Partial<BookingDraft>) => void
  resetDraft: () => void
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined)

const emptyDraft: BookingDraft = {
  boat: null,
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState<BookingDraft>(emptyDraft)

  const openBooking = useCallback((boat?: BoatPreview) => {
    setDraft((current) => ({
      ...current,
      boat: boat ?? current.boat,
    }))
    setIsOpen(true)
  }, [])

  const closeBooking = useCallback(() => {
    setIsOpen(false)
  }, [])

  const updateDraft = useCallback((patch: Partial<BookingDraft>) => {
    setDraft((current) => ({ ...current, ...patch }))
  }, [])

  const resetDraft = useCallback(() => {
    setDraft(emptyDraft)
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      draft,
      openBooking,
      closeBooking,
      updateDraft,
      resetDraft,
    }),
    [isOpen, draft, openBooking, closeBooking, updateDraft, resetDraft],
  )

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBooking() {
  const context = useContext(BookingContext)

  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }

  return context
}

// Simplified for public demonstration:
// - Only modal state and safe booking draft fields are shown.
// - No customer data, reservation records, payment fields, or private business rules are included.

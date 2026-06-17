'use client'

import { useCallback, useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type FilterKind = 'event' | 'type' | 'harbour'

const knownBoatTypes = ['Yacht', 'Catamaran', 'Speedboat']
const knownEvents = ['Birthday', 'Corporate Event', 'Proposal']

const normalize = (value?: string | null) =>
  (value ?? '').trim().toLowerCase().replace(/\s+/g, ' ')

const fromSlug = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

function readClientSearchParams() {
  if (typeof window === 'undefined') return new URLSearchParams()
  return new URLSearchParams(window.location.search)
}

export function usePublicSafeUrlFilters() {
  const router = useRouter()
  const pathname = usePathname() || '/'

  const currentFilters = useMemo(() => {
    const params = readClientSearchParams()
    const segments = pathname.split('/').filter(Boolean)
    const lastSegment = segments.at(-1) ?? ''
    const pathLabel = fromSlug(lastSegment)

    const eventFromPath = knownEvents.find((event) => normalize(event) === normalize(pathLabel))
    const typeFromPath = knownBoatTypes.find((type) => normalize(type) === normalize(pathLabel))

    return {
      event: params.get('event') || eventFromPath || '',
      type: params.get('type') || typeFromPath || '',
      harbour: params.get('harbour') || (!eventFromPath && !typeFromPath ? pathLabel : ''),
    }
  }, [pathname])

  const setFilter = useCallback(
    (kind: FilterKind, value: string, options?: { replace?: boolean }) => {
      if (typeof window === 'undefined') return

      const next = new URL(window.location.href)
      if (value) {
        next.searchParams.set(kind, value)
      } else {
        next.searchParams.delete(kind)
      }

      const href = `${next.pathname}${next.search ? next.search : ''}`
      options?.replace ? router.replace(href) : router.push(href)
    },
    [router],
  )

  const clearFilters = useCallback(() => {
    if (typeof window === 'undefined') return
    router.replace(window.location.pathname)
  }, [router])

  return { currentFilters, setFilter, clearFilters }
}

// Simplified for public demonstration:
// - Filter labels are generic examples.
// - No production slugs, routes, or CMS records are included.


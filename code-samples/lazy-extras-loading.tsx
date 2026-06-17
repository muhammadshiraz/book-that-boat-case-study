'use client'

import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

type Extra = {
  id: string
  name: string
  category: string
  unitPrice: number
}

const PUBLIC_CMS_BASE_URL = 'https://cms.example.com'

async function fetchExtrasForBoat(boatId: string, signal?: AbortSignal): Promise<Extra[]> {
  const search = new URLSearchParams({
    depth: '1',
    limit: '50',
  })

  search.set('where[boat][equals]', boatId)

  const response = await fetch(`${PUBLIC_CMS_BASE_URL}/api/extras?${search}`, { signal })

  if (!response.ok) {
    throw new Error('Unable to load extras')
  }

  const data = await response.json()
  return Array.isArray(data.docs) ? data.docs : []
}

export function LazyExtrasExample({ boatId }: { boatId: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '320px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const extrasQuery = useQuery({
    queryKey: ['public-demo-extras', boatId],
    queryFn: ({ signal }) => fetchExtrasForBoat(boatId, signal),
    enabled: shouldLoad,
    staleTime: 1000 * 60 * 5,
  })

  return (
    <section ref={containerRef} aria-labelledby="extras-heading">
      <h2 id="extras-heading">Extras</h2>

      {!shouldLoad && <p>Extras will load as this section approaches the viewport.</p>}
      {extrasQuery.isLoading && <p>Loading extras...</p>}
      {extrasQuery.isError && <p>Extras could not be loaded right now.</p>}

      <ul>
        {(extrasQuery.data ?? []).map((extra) => (
          <li key={extra.id}>
            {extra.name} - {extra.category} - AED {extra.unitPrice}
          </li>
        ))}
      </ul>
    </section>
  )
}

// Simplified for public demonstration:
// - UI styling and production dependency rules are removed.
// - The API base URL and returned records are placeholders.


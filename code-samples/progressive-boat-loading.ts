import { useQuery } from '@tanstack/react-query'

type BoatSummary = {
  id: string
  name: string
  slug: string
  pricePerHour: number
}

type BoatResponse = {
  docs: BoatSummary[]
  totalDocs: number
  totalPages: number
}

const INITIAL_BATCH_SIZE = 9
const PUBLIC_CMS_BASE_URL = 'https://cms.example.com'

async function fetchBoats(params: {
  page: number
  limit: number
  signal?: AbortSignal
}): Promise<BoatResponse> {
  const search = new URLSearchParams({
    page: String(params.page),
    limit: String(params.limit),
    sort: 'price',
    depth: '1',
  })

  const response = await fetch(`${PUBLIC_CMS_BASE_URL}/api/boats?${search}`, {
    signal: params.signal,
  })

  if (!response.ok) {
    throw new Error('Unable to load boats')
  }

  return response.json()
}

export function useProgressiveBoatLoading(page = 1, requestedLimit = 100) {
  const initialLimit =
    page === 1 && requestedLimit > INITIAL_BATCH_SIZE ? INITIAL_BATCH_SIZE : requestedLimit
  const shouldLoadRemaining = page === 1 && requestedLimit > initialLimit

  const initialQuery = useQuery({
    queryKey: ['boats', 'initial', page, initialLimit],
    queryFn: ({ signal }) => fetchBoats({ page, limit: initialLimit, signal }),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })

  const remainingQuery = useQuery({
    queryKey: ['boats', 'remaining', page, requestedLimit],
    queryFn: ({ signal }) => fetchBoats({ page, limit: requestedLimit, signal }),
    enabled:
      shouldLoadRemaining &&
      Boolean(initialQuery.data?.totalDocs && initialQuery.data.totalDocs > initialLimit),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  })

  const activeData = remainingQuery.data ?? initialQuery.data

  return {
    boats: activeData?.docs ?? [],
    totalDocs: activeData?.totalDocs ?? 0,
    totalPages: activeData?.totalPages ?? 0,
    isInitialLoading: initialQuery.isLoading,
    isFetchingRemaining: remainingQuery.isFetching,
    hasLoadedAll: !shouldLoadRemaining || Boolean(remainingQuery.data),
    error: initialQuery.error ?? remainingQuery.error,
  }
}

// Simplified for public demonstration:
// - Production API base URLs and population fields are replaced.
// - The hook demonstrates the pattern without exposing private CMS structure.


/**
 * Hydration-safe wrappers around react-responsive.
 *
 * During the static build there is no screen, so react-responsive matches
 * nothing and the pre-rendered HTML omits every media-query-gated block.
 * React 18 errors (#418) if the browser's first render differs from that HTML,
 * so these wrappers match "nothing" on the first client render too and only
 * start evaluating media queries once the page has mounted.
 */
import React, { useEffect, useState } from "react"
import ResponsiveMediaQuery, {
  useMediaQuery as useResponsiveMediaQuery,
} from "react-responsive"

const useHasMounted = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

export const useMediaQuery = (
  ...args: Parameters<typeof useResponsiveMediaQuery>
) => {
  const matches = useResponsiveMediaQuery(...args)
  return useHasMounted() && matches
}

const MediaQuery = (props: React.ComponentProps<typeof ResponsiveMediaQuery>) =>
  useHasMounted() ? <ResponsiveMediaQuery {...props} /> : null

export default MediaQuery

import { useEffect, useMemo, useState } from 'react'

const useMount = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const payload = useMemo(
    () => ({
      isMounted,
    }),
    [isMounted]
  )

  return payload
}

export default useMount

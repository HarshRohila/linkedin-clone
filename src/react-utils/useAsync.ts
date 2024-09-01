import { useEffect, useState } from "react"

function useAsync<T>(asyncFunc: () => Promise<T>) {
  const [result, setResult] = useState<T>()
  const [error, setError] = useState<unknown>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    asyncFunc()
      .then((funcResult) => {
        setResult(funcResult)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { data: result, error, isLoading }
}

export { useAsync }

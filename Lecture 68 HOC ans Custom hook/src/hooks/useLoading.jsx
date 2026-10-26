import { useState } from "react"

function useLoading() {
    const [loading,setLaoding] = useState(true);

    const startLoading = () => setLaoding(true)
    const stopLoading = () => setLaoding(false)
  return (
    loading,
    startLoading,
    stopLoading
  );
}

export default useLoading
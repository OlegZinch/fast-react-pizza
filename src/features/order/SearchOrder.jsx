import { useState } from 'react'
import { useNavigate } from 'react-router'

function SearchOrder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function hahdleSubmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={hahdleSubmit}>
      <input
        type='text'
        placeholder='Search order #'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SearchOrder

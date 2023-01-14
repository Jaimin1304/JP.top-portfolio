import { useParams } from 'react-router-dom'

export default function Project() {
  const { name } = useParams()
  return (
    <div>
      <h1>Project: {name}</h1>
    </div>
  )
}

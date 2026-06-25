import {createFileRoute, useMatchRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/nested/')({ component: Home })

function Home() {
    const match = useMatchRoute()
  return (
    <div className="p-8">
      <pre>{JSON.stringify({route: "/nested", matches: !!match({to: "/nested"})}, null, 2)}</pre>
    </div>
  )
}

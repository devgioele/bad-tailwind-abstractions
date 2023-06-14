import { Good, GoodWithLink } from './Good'
import { Bad } from './Bad'

const App: React.FC = () => {
  return (
    <div className="align-center flex min-h-screen flex-col place-items-center justify-center">
      <Good className="w-40 truncate text-xl font-bold">
        Good good good good good
      </Good>
      <GoodWithLink href="/" className="w-40 truncate text-xl font-bold">
        Good good good good good
      </GoodWithLink>
      <Bad className="w-40 text-xl font-bold">Bad</Bad>
    </div>
  )
}

export default App

import { Header } from './widgets/header'

import { Intro } from './widgets/intro'
import { Offers } from './widgets/offers'
import { SpaceJourney } from './widgets/space-journey'

import { Footer } from './widgets/footer'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Intro />
        <Offers />
        <SpaceJourney />
      </main>

      <Footer />
    </>
  )
}

export default App

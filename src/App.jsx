import Counter from './contexts/Contexts';
import CounterProvider from './contexts/Contexts';

function App() {
  return (
      <>
      <CounterProvider/>
      <Counter/>
      <CounterProvider/>
      </>
  )
}

export default App

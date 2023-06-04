import data from './data'
import Location from './components/Location'
import Header from './components/Header'
import './App.css'

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          {data.map(item => <Location {...item} />)}
        </main>
      </div>
    </>
  )
}
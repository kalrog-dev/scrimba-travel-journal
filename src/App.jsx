import Location from './components/Location'
import Header from './components/Header'
import './App.css'

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Location />
        <Location />
        <Location />
      </div>
    </>
  )
}
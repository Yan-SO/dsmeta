
import SelesCard from "./components/SalesCard"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <div className="dsmeta-Card">
              <SelesCard/>
              <h1>ola mundo</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

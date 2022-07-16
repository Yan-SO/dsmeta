import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelesCard from "./components/SalesCard";
import Header from "./components/Header";

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <div className="dsmeta-Card">
              <SelesCard/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;

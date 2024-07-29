import './App.css'
import {Home} from "./Pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import {CustomerList} from "./Pages/CustomerList.tsx";
import {DefaultLayout} from "./Layout";
import {AddCustomers} from "./Pages/AddCustomers.tsx";

function App() {

  return (
    <>
        <DefaultLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer-list" element={<CustomerList />} />
            <Route path="/customer-add" element={<AddCustomers/>} />
        </Routes>
        </DefaultLayout>
        </>
  )
}

export default App

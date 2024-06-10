import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Database from './pages/Database';
import Payment from './pages/Payment';
import Vault from './pages/Vault';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Notification from './pages/Notification';
import Billing from './pages/Billing';
import PaymentOrder from "./components/block/PaymentOrder";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Dashboard />} />
          <Route path="database" element={<Database />}  />
          <Route path="payment" element={<Payment/>} />
          <Route path="vault" element={<Vault/>} />
          <Route path="notification" element={<Notification />}  />
          <Route path="setting" element={<Settings/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="bill" element={<Billing/>} />
        </Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App

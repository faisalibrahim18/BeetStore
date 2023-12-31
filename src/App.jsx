import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Forgot from "./Auth/FogotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductsList from "./pages/Products/ProductsList";
import ProductsDetail from "./pages/Products/ProductsDetail";
import ProductKeranjang from "./pages/Products/ProductKeranjang";
import Profile from "./pages/Account/Profile";
import CheckOut from "./pages/Products/CheckOut";
import NewPassword from "./Auth/NewPassword";
import LoadingScreen from "./components/Loading/LoadingScreen";
import HistoryTrans from "./pages/History/HistoryTrans";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasikan inisialisasi aplikasi
    setTimeout(() => {
      setLoading(false); // Matikan loading setelah selesai inisialisasi
    }, 1500); // Gantilah ini dengan logika inisialisasi sebenarnya
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <LoadingScreen /> // Tampilkan LoadingScreen selama aplikasi dimuat
        ) : (
          // Setelah selesai inisialisasi, tampilkan rute aplikasi
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/forgotPassword" element={<Forgot />} />
            <Route exact path="/new_Password" element={<NewPassword />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/products/:id" element={<ProductsList />} />
            <Route
              exact
              path="/products/detail/:id"
              element={<ProductsDetail />}
            />
            <Route
              exact
              path="/products/keranjang"
              element={<ProductKeranjang />}
            />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/CheckOut" element={<CheckOut />} />
            <Route exact path="/history" element={<HistoryTrans />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

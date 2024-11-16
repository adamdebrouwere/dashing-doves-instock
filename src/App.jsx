import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse.jsx";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";
import ListItems from "./components/ListItems/ListItems";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
<<<<<<< HEAD
import EditInventory from "./components/EditInventory/EditInventory.jsx"



=======
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
>>>>>>> develop


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main__card">
        <Routes>
          <Route path="/" element={<ListItems items="warehouses" />} />
          <Route path="/warehouses" element={<Navigate to="/" />} />
          <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
          <Route path="/warehouses/add-new" element={<AddNewWarehouse />} />
           <Route path="/inventory" element={<ListItems items="inventories" />} />
           <Route path="/inventory/:id/edit" element={<EditInventory/>}/>

        {/* Path to edit inventory
          <Route path="/inventory/:inventoryId/edit" element={<InventoryDetails />} /> */}

          <Route path="*" element={<NotFoundPage />} />


        </Routes>
      </div>
      <Footer />


    </BrowserRouter>
  );
}

export default App;

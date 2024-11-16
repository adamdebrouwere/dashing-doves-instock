import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse.jsx";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";
import ListItems from "./components/ListItems/ListItems";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItem from "./components/InventoryItem/InventoryItem.jsx";
import AddNewItem from "./components/AddNewItem/AddNewItem.jsx";
import EditItem from "./components/EditItem/EditItem.jsx";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main__card">
        <Routes>
          <Route path="/" element={<ListItems items="warehouses" />} />
          <Route path="/warehouses" element={<Navigate to="/" />} />
          <Route path="/warehouses/add-new" element={<AddNewWarehouse />} />
          <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />

          <Route path="/inventory" element={<ListItems items="inventories" />} />
          <Route path="/inventory/add-new" element={<AddNewItem />} />
          <Route path="/inventory/:itemId" element={<InventoryItem />} />
          <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
          <Route path="/inventory/:id/edit" element={<EditItem />} />
          {/* Path to edit inventory <Route path="/inventory/:inventoryId/edit" element={<InventoryDetails />} /> */}
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

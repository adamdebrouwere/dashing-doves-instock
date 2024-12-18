import { useState, useEffect } from "react";
import axios from "axios";
import WarehouseItem from "../WarehouseItem/WarehouseItem";
import PagesHeader from "../PagesHeader/PagesHeader";
import InventoryItem from "../InventoryItem/InventoryItem";
import TableHeader from "../TableHeader/TableHeader";

function ListItems({ items, display, isForWarehouseDetails, warehouse }) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (warehouse) {
      const filterByWarehouse = list.filter(
        (item) => item.warehouse_name === warehouse.warehouse_name
      );
      setFilteredList(filterByWarehouse);
    }
  }, [warehouse, list]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/${items}`
        );
        const sortedList = response.data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setList(sortedList);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };
    getItems();
  }, [items]);

  const deleteItem = async (itemType, id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/${itemType}/${id}`
      );
      if (response.status === 204) {
        setList((prevList) => prevList.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error(`Error deleting ${itemType}`, error);
    }
  };

  return (
    <>
      {items === "warehouses" && (
        <>
          <PagesHeader title="warehouses" />
          <TableHeader page="warehouses" />
          {list.map((listItem, index) => (
            <div key={listItem.id}>
              <WarehouseItem
                warehouse={listItem}
                onDelete={() => deleteItem("warehouses", listItem.id)}
                isFirst={index === 0}
              />
            </div>
          ))}
        </>
      )}

      {items === "inventories" && (
        <>
          <PagesHeader title="inventory" button="Item" display={display} />
          {filteredList.length > 0 && (
            <TableHeader
              page="inventories"
              isForWarehouseDetails={isForWarehouseDetails}
            />
          )}
          {!warehouse && list && list.length > 0 && (
            <>
              <TableHeader
                page="inventories"
                isForWarehouseDetails={isForWarehouseDetails}
              />
              {list.map((listItem, index) => (
                <div key={listItem.id}>
                  <InventoryItem
                    inventory={listItem}
                    isFirst={index === 0}
                    isForWarehouseDetails={isForWarehouseDetails}
                    onDelete={() => deleteItem("inventories", listItem.id)}
                  />
                </div>
              ))}
            </>
          )}
          {warehouse &&
            filteredList &&
            filteredList.length > 0 &&
            filteredList.map((listItem, index) => (
              <div key={listItem.id}>
                <InventoryItem
                  inventory={listItem}
                  isFirst={index === 0}
                  isForWarehouseDetails={isForWarehouseDetails}
                  onDelete={() => deleteItem("inventories", listItem.id)}
                />
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default ListItems;

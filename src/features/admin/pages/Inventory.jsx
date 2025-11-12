import { useDispatch } from "react-redux";
import Dropdown from "../../../component/common/Dropdown";
import SearchBar from "../../../component/common/SearchBar";
import FloatBtn from "../../../component/common/FloatBtn";
import { popupInstance } from "../../../constant/enum";
import { openPopup } from "../../../reducer/popupSlice";
import DateRangePicker from "../../../component/common/DateRangePicker";
import { getAllMovement } from "../api/inventoryService";
import { useEffect, useState } from "react";
import InventoryMovementList from "../component/InventoryMovementList";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await getAllMovement();
        console.log(response);
        if (response.status === 200) {
          setInventory(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchInventory();
  }, []);

  const handlePopup = (content) => {
    dispatch(openPopup(content));
  };

 const handleDownloadCSV = () => {
  if (!inventory || inventory.length === 0) return;

  const headers = [
    "ID", "Type", "Inventory ID", "Menu Item", "Quantity", "UOM",
    "Quantity Change", "Created By", "Created Date", "Updated By", "Updated Date"
  ];

  const rows = inventory.map(m => [
    m.inventoryMovementId ?? "",
    m.inventoryMovementType ?? "",
    m.inventoryResponse?.inventoryId ?? "",
    m.inventoryResponse?.menuItem?.menuName ?? "",
    m.inventoryResponse?.quantity ?? "",
    m.inventoryResponse?.uom ?? "",
    m.quantityChange ?? "",
    m.createdBy?.userName ?? "",
    m.createdDate ? new Date(m.createdDate).toLocaleString() : "",
    m.inventoryResponse?.updatedBy?.userName ?? "",
    m.inventoryResponse?.updatedDate ?? ""
  ]);

  // Wrap each field in quotes to prevent breaking rows
  const csvContent = [
    headers.map(h => `"${h}"`).join(","),
    ...rows.map(row => row.map(v => `"${v}"`).join(","))
  ].join("\r\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `inventory_movements_${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};


  return (
    <div className="flex flex-col gap-6 p-2 h-screen">
      <header className="flex justify-between gap-2">
        {/* <SearchBar />
        <Dropdown /> */}
        <DateRangePicker />
        <button onClick={handleDownloadCSV} className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
          Download CSV
        </button>
      </header>

      {/* LIST VIEW */}
    <div className="overflow-y-auto h-[110vh]">
  <InventoryMovementList inventoryMovements={inventory} />
</div>


      {/* Call to action */}
      <div className="absolute z-[999] right-8 bottom-20">
        <FloatBtn onClick={() => handlePopup(popupInstance.INVENTORY)} />
      </div>
    </div>
  );
};

export default Inventory;
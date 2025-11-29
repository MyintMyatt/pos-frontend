import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../../component/common/Dropdown";
import SearchBar from "../../../component/common/SearchBar";
import FloatBtn from "../../../component/common/FloatBtn";
import { popupInstance } from "../../../constant/enum";
import { openPopup } from "../../../reducer/popupSlice";
import DateRangePicker from "../../../component/common/DateRangePicker";

import { useEffect, useState } from "react";
import InventoryMovementList from "../component/InventoryMovementList";
import { useGetMenus } from "../../sales&payment/hooks/useGetMenus";
import { setMenu } from "../../../reducer/menuSlice";
import { useGetInventory } from "../hooks/useGetInventory";
import { clearRefresh } from "../../../reducer/inventorySlice";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
const [sorted,setSorted]=useState();

 const { needsRefresh } = useSelector(state => state.inventory);






  const {data:InventoryData,loading,reFetchInventory}=useGetInventory();

  console.log(InventoryData?.data);
useEffect(() => {
  if (InventoryData?.data) {
    const sortedList = [...InventoryData.data].sort((a, b) => b.inventoryMovementId-a.inventoryMovementId);

    console.log("LIST",sortedList);
    
    setSorted(sortedList);
  }
}, [InventoryData]);


useEffect(() => {
  if (needsRefresh) {
    reFetchInventory();
    dispatch(clearRefresh());
  }
}, [needsRefresh]);
  
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState({
    start: "",
    end: ""
  });

  const handleRangeChange = (range) => {
    console.log("Selected Range:", range);
    setDateRange(range);
  };


  const filteredInventory = sorted?.filter(item => {
  if (!dateRange.start || !dateRange.end) return true;

  const itemDate = new Date(item.createdDate);
  const start = new Date(dateRange.start);
  const end = new Date(dateRange.end);

  end.setHours(23,59,59,999);

  return itemDate >= start && itemDate <= end;
});



  const handlePopup = (content) => {
    dispatch(openPopup(content));
  };

 const handleDownloadCSV = () => {
  if (!filteredInventory || filteredInventory.length === 0) return;

  const headers = [
    "ID", "Type", "Category", "Menu",  "UOM","Prev Quantity",
    "Quantity Change", "Updated Quantity","Created By", "Created Date"
  ];

  const rows = filteredInventory.map(m => [
    m.inventoryMovementId ?? "",
    m.inventoryMovementType ?? "",
    m.currentInventoryStock?.menu.category.categoryName ?? "",
    m.currentInventoryStock?.menu.menuName ?? "",
    m.currentInventoryStock?.uom  ?? "",
    m.beforeQty ?? "",
    m.quantityChange ?? "",
    m.afterQty ?? "",
    m.createdBy?.userName ?? "",
    m.createdDate ? new Date(m.createdDate).toLocaleString() : "",
  
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
  a.download = `inventory_movements_${Date.now().toLocaleString()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

const {data}=useGetMenus(0,"",40)

dispatch(setMenu(data?.data.content))



  return (
    <div className="flex flex-col gap-1 p-2 h-screen">
      <header className="flex justify-between gap-2">
        {/* <SearchBar />
        <Dropdown /> */}
        <DateRangePicker onChange={handleRangeChange} startDate={dateRange.start} endDate={dateRange.end} />
        <button onClick={handleDownloadCSV} className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
          Download CSV
        </button>
      </header>

      {/* LIST VIEW */}
    <div className="overflow-y-auto mb-3 h-[100vh]">
  <InventoryMovementList inventoryMovements={filteredInventory} />
</div>


      {/* Call to action */}
      <div className="absolute z-[999] right-8 bottom-20">
        <FloatBtn onClick={() => handlePopup(popupInstance.INVENTORY)} />
      </div>
    </div>
  );
};

export default Inventory;
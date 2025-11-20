import { useForm } from "react-hook-form";
import { getAllSales } from "../../sales&payment/api/saleService";
import { useEffect, useState } from "react";
import SearchBar from "../../../component/common/SearchBar";
import Dropdown from "../../../component/common/Dropdown";
import SalesHistoryList from "../component/SalesHistoryList";
import DateRangePicker from "../../../component/common/DateRangePicker";
import { useGetAllSales } from "../hooks/useFecthSales";

const SaleHistory = () => {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);



  const {sales}=useGetAllSales();

  const handleDateChange = (range) => {
    setDateRange(range);
    console.log("Selected date range:", range);
  };


  useEffect(() => {
    if (!dateRange.start || !dateRange.end) {
      setFilteredData(data); // show all if no range
      return;
    }

    const filtered = data.filter((item) => {
      const salesDate = new Date(item.saleDate); 
      const start = new Date(dateRange.start);
      const end = new Date(dateRange.end);
      return salesDate >= start && salesDate <= end;
    });

    setFilteredData(filtered);
  }, [dateRange, data]);

  return (
    <div className="flex flex-col gap-6 p-2">
      <header className="flex justify-between">
        {/* <SearchBar /> */}
        <DateRangePicker
          startDate={dateRange.start}
          endDate={dateRange.end}
          onChange={handleDateChange}
          placeholder="Pick start and end dates"
          className="max-w-sm"
        />
      </header>

      {/* LIST VIEW */}
      <div className="overflow-auto h-[90vh] bg-amber-200">
        <SalesHistoryList data={filteredData} />
      </div>
    </div>
  );
};

export default SaleHistory;

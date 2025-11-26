import { useEffect, useState } from "react";
import SalesHistoryList from "../component/SalesHistoryList";
import DateRangePicker from "../../../component/common/DateRangePicker";
import { useGetSale } from "../../sales&payment/hooks/useGetSale";


const SaleHistory = () => {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const [filteredData, setFilteredData] = useState([]);




  const {data}=useGetSale();
  console.log("C",data?.data.content);
  


  // const handleDateChange = (range) => {
  //   setDateRange(range);
  //   console.log("Selected date range:", range);
  // };


  // useEffect(() => {
  //   if (!dateRange.start || !dateRange.end) {
  //     setFilteredData(data?.data.content); // show all if no range
  //     return;
  //   }

  //   const filtered = sales.filter((item) => {
  //     const salesDate = new Date(item.saleDate); 
  //     const start = new Date(dateRange.start);
  //     const end = new Date(dateRange.end);
  //     return salesDate >= start && salesDate <= end;
  //   });

  //   setFilteredData(filtered);
  // }, [dateRange, sales]);





  return (
    <div className="flex flex-col gap-6 p-2">
      <header className="flex justify-between">
        {/* <SearchBar /> */}
        {/* <DateRangePicker
          startDate={dateRange.start}
          endDate={dateRange.end}
          onChange={handleDateChange}
          placeholder="Pick start and end dates"
          className="max-w-sm"
        /> */}
      </header>

      {/* LIST VIEW */}
      <div className=" h-[90vh]">
        <SalesHistoryList data={data?.data.content} />
      </div>
    </div>
  );
};

export default SaleHistory;

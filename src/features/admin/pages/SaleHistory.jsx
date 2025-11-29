import { useEffect, useState } from "react";
import SalesHistoryList from "../component/SalesHistoryList";
import DateRangePicker from "../../../component/common/DateRangePicker";
import { useGetSale } from "../../sales&payment/hooks/useGetSale";

const SaleHistory = () => {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [filteredData, setFilteredData] = useState([]);

  const { data } = useGetSale();
  
  // SAFELY GET CONTENT
  const sales = data?.data?.content || [];

  // SORT sales by DESC (salesId)
  
  
const sortedSales = [...sales].sort((a, b) => {
  const numA = parseInt(a.salesId.replace(/\D/g, ""));
  const numB = parseInt(b.salesId.replace(/\D/g, ""));
  return numB - numA; // DESC
});


  console.log("T",sortedSales);
  

  const handleDateChange = (range) => {
    setDateRange(range);
  };

  // Filter with date range
  useEffect(() => {
    if (!dateRange.start || !dateRange.end) {
      setFilteredData(sortedSales); // show sorted all list
      return;
    }

    const start = new Date(dateRange.start);
    const end = new Date(dateRange.end);

    const filtered = sortedSales.filter((item) => {
      const salesDate = new Date(item.saleDate);
      return salesDate >= start && salesDate <= end;
    });

    setFilteredData(filtered);
  }, [dateRange, data]);

  // CSV DOWNLOAD FIXED
 const handleDownloadCSV = () => {
  const headers = [
    "Sales ID",
    "Sale Date",
    "Cashier",
    "Sub Total($)",
    "Total Amount($)",
    "Items"
  ];

  const rows = filteredData.map((sale) => {
    const itemsFormatted = sale.items
      .map(
        (item) =>
          `${item.menuName} (Price: ${item.price}, Qty: ${item.quantity})`
      )
      .join(" | "); // CSV-friendly separator

    return [
      sale.salesId,
      sale.saleDate,
      sale.createdBy?.userName || "-",
      sale.subTotal,
      sale.totalAmount,
      itemsFormatted
    ];
  });

  const csvContent = [
    headers.map((h) => `"${h}"`).join(","),

    ...rows.map((r) =>
      r
        .map((v) => `"${String(v).replace(/"/g, '""')}"`) // escape quotes
        .join(",")
    )
  ].join("\r\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = link;
  a.download = `sales_history_${Date.now()}.csv`;
  a.click();

  URL.revokeObjectURL(link);
};



  console.log("S",sortedSales);
  

  return (
    <div className="flex flex-col p-2">
      <header className="flex justify-between mx-3">
        <DateRangePicker
          startDate={dateRange.start}
          endDate={dateRange.end}
          onChange={handleDateChange}
          placeholder="Select date"
          className="max-w-sm"
        />

        <button
          className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
          onClick={handleDownloadCSV}
        >
          DOWNLOAD CSV
        </button>
      </header>

      {/* LIST VIEW */}
      <div>
        <SalesHistoryList data={filteredData} />
      </div>
    </div>
  );
};

export default SaleHistory;

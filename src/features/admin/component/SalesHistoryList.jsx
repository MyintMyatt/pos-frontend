import React from "react";

const SalesHistoryList = ({ data = [] }) => {

  const handleDownloadCSV = () => {
    const headers = ["Sales ID", "Sale Date", "Cashier", "Sub Total", "Total Amount"];
    const rows = data.map((sale) => [
      sale.salesId,
      sale.saleDate,
      sale.createdBy?.userName || "-",
      sale.subTotal,
      sale.totalAmount,
    ]);

    const csvContent = [
      headers.map((h) => `"${h}"`).join(","),
      ...rows.map((row) => row.map((v) => `"${v}"`).join(",")),
    ].join("\r\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sales_history_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-screen overflow-y-scroll bg-white text-slate-900 p-6 rounded-lg space-y-4">

      <div className="flex items-center justify-between sticky top-0 bg-white py-2 border-b border-slate-200 z-10">
        <h2 className="text-xl font-bold">Sales History</h2>
        <button
          onClick={handleDownloadCSV}
          className="px-3 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-100 transition"
        >
          Download CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-300 text-slate-500 text-sm">
              <th className="p-3">Sales ID</th>
              <th className="p-3">Sale Date</th>
              <th className="p-3">Cashier</th>
              <th className="p-3">Sub Total</th>
              <th className="p-3">Total Amount</th>
              <th className="p-3">Items</th>
            </tr>
          </thead>

          <tbody>
            {data.map((sale) => (
              <tr key={sale.salesId} className="border-b border-slate-200 hover:bg-slate-100 transition">
                <td className="p-3 text-sm">{sale.salesId}</td>
                <td className="p-3 text-sm">{sale.saleDate}</td>
                <td className="p-3 text-sm">{sale.createdBy?.userName || "-"}</td>
                <td className="p-3 text-sm">{sale.subTotal}</td>
                <td className="p-3 text-sm font-semibold">{sale.totalAmount}</td>
                <td className="p-3 text-sm">
                  <details className="cursor-pointer select-none">
                    <summary className="text-slate-500 hover:text-slate-900">View</summary>
                    <ul className="mt-2 space-y-1 text-slate-600 text-xs">
                      {sale.items?.map((item, index) => (
                        <li key={index}>
                          {item.menuName} — Qty: {item.quantity} — Price: {item.price}
                        </li>
                      ))}
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SalesHistoryList;

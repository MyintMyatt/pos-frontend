import React from "react";

const SalesHistoryList = ({ data = [] }) => {
  return (
    <div className="w-full h-screen  bg-white text-slate-900 p-6 rounded-lg space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-300 text-slate-500 text-sm">
              <th className="p-3">Sales ID</th>
              <th className="p-3">Sale Date</th>
              <th className="p-3">Cashier</th>
              <th className="p-3">Sub Total($)</th>
              <th className="p-3">Total Amount($)</th>
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
                <td className="p-3 text-sm font-semibold">{sale.totalAmount.toFixed(2)}</td>
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

import React from "react";

// Example props structure:
// const inventoryMovements = [
//   {
//     inventoryMovementId: 1,
//     inventoryMovementType: "RESTOCK",
//     createdBy: { userName: "Orion" },
//     createdDate: "2025-11-07T13:34:24.318256",
//     inventoryResponse: {
//       inventoryId: "INV251100001",
//       menuItem: { menuName: "Cake" },
//       quantity: 3,
//       uom: "Qty",
//       updatedBy: { userName: "lwin" },
//       updatedDate: "2025-11-07"
//     },
//     quantityChange: 20
//   },
// ];

const InventoryMovementList = ({ inventoryMovements = [] }) => {




  return (
    <div className="w-full overflow-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 text-sm">
              <th className="p-3">ID</th>
              <th className="p-3">Type</th>
              <th className="p-3">Category</th>
              <th className="p-3">Menu</th>
              <th className="p-3">UOM</th>
               <th className="p-3">Previous Quantity</th>
              <th className="p-3">Quantity Change</th>
               <th className="p-3">Updated Quantity</th>
              <th className="p-3">Created By</th>
              <th className="p-3">Created Date</th>
             
            </tr>
          </thead>
          <tbody>
            {inventoryMovements.map((movement) => (
              <tr key={movement.inventoryMovementId} className="border-b border-slate-200 hover:bg-slate-100 transition">
                <td className="p-3 text-slate-900 font-medium">{movement.inventoryMovementId}</td>
                <td className="p-3 text-slate-700 text-sm">{movement.inventoryMovementType}</td>
                <td className="p-3 text-slate-700 text-sm">{movement.currentInventoryStock?.menu.category.categoryName}</td>
                <td className="p-3 text-slate-700 text-sm">{movement.currentInventoryStock?.menu.menuName}</td>
                <td className="p-3 text-slate-700 text-sm">{movement.currentInventoryStock?.uom}</td>
                <td className="p-3 text-slate-700 text-sm">{movement.beforeQty}</td>
                <td className="p-3 text-slate-700 text-sm font-medium">{movement.quantityChange}</td>
                 <td className="p-3 text-slate-700 text-sm">{movement.afterQty}</td>
                <td className="p-3 text-slate-700 text-sm">{movement.createdBy?.userName}</td>
                <td className="p-3 text-slate-700 text-sm">{new Date(movement.createdDate).toLocaleDateString()}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryMovementList;

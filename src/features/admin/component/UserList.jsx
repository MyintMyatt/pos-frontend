import React from "react";

// Example props structure:
// const users = [
//   {
//     userId: "UID25110001",
//     userName: "Orion",
//     userEmail: "user@example.com",
//     role: "ADMIN",
//     permissions: ["READ", "DELETE", "WRITE", "UPDATE"],
//     profileImgUrl: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
//     accountIsActive: true,
//     accountNotLocked: true,
//     createdDate: "2025-11-07"
//   },
// ];

const UserList = ({ users = [] }) => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold text-slate-900">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 text-sm">
              <th className="p-3">Profile</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Permissions</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId} className="border-b border-slate-200 hover:bg-slate-100 transition">
                <td className="p-3">
                  <img
                    src={user.profileImgUrl || "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"}
                    alt={user.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="p-3 text-slate-900 font-medium">{user.userName}</td>
                <td className="p-3 text-slate-700 text-sm">{user.userEmail}</td>
                <td className="p-3 text-slate-900 font-medium">{user.role}</td>
                <td className="p-3 text-slate-700 text-sm">
                  {user.permissions?.join(", ")}
                </td>
                <td className="p-3 text-sm">
                  {user.accountIsActive && user.accountNotLocked ? (
                    <span className="text-green-600 font-medium">Active</span>
                  ) : (
                    <span className="text-red-600 font-medium">Inactive</span>
                  )}
                </td>
                <td className="p-3 text-slate-700 text-sm">{user.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

import { Pencil, Trash2 } from "lucide-react";

export default function UserList({ users = [], loading = false, onEdit, onDelete }) {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="max-h-[600px] overflow-y-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">User</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Role</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">Email</th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading
                ? skeletonRows.map((_, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                        <div className="flex flex-col gap-1">
                          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                          <div className="w-32 h-3 bg-gray-200 rounded animate-pulse" />
                        </div>
                      </td>

                      <td className="px-4 py-4 flex gap-2">
                        <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
                        <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
                      </td>

                      <td className="px-4 py-4">
                        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
                      </td>

                      <td className="px-4 py-4 flex flex-wrap gap-1">
                        <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
                        <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
                        <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
                      </td>

                      <td className="px-4 py-4 text-center flex justify-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                      </td>
                    </tr>
                  ))
                : users.map((user) => (
                    <tr key={user.userId} className="border-b hover:bg-gray-50 transition">
                      {/* USER */}
                      <td className="px-4 py-4 flex items-center gap-3">
                        <img
                          src={user.profileImgUrl}
                          alt="profile"
                          className="w-10 h-10 rounded-full object-cover border"
                        />
                        <div>
                          <p className="font-medium text-gray-800">{user.userName}</p>
                          <p className="text-xs text-gray-500">{user.userId}</p>
                        </div>
                      </td>

                      {/* STATUS */}
                      <td className="px-4 py-4">
                        <div className="flex gap-2">
                          <span
                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                              user.accountIsActive
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {user.accountIsActive ? "Active" : "Inactive"}
                          </span>

                       
                        </div>
                      </td>

                      {/* ROLE */}
                      <td className="px-4 py-4 font-medium text-gray-700">{user.role}</td>

                      {/* PERMISSIONS */}
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1">
                         {user.userEmail}
                        </div>
                      </td>

                      {/* ACTIONS */}
                      <td className="px-4 py-4 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => onEdit(user.userId)}
                            className="p-2 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"
                          >
                            <Pencil size={18} className="text-gray-700" />
                          </button>

                          <button
                            onClick={() => onDelete(user.userId)}
                            className="p-2 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100 transition"
                          >
                            <Trash2 size={18} className="text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

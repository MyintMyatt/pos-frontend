import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { EllipsisVertical } from "lucide-react";
import Loading from "@/component/Loading";

export const UserList = ({ users, loading, updateFunc }) => {
    const [ellipisOpenIndex, setEllipisOpenIndex] = useState(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const ellipsisRef = useRef([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                ellipsisRef.current.every((ref) => !ref || !ref.contains(event.target))
            ) {
                setEllipisOpenIndex(null);
            }
        };
       /* document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);*/
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);

    }, []);

    const handleEllipsisClick = (index, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({ top: rect.bottom + window.scrollY, left: rect.left });
        setEllipisOpenIndex(ellipisOpenIndex === index ? null : index);
    };

    if (loading) return <Loading />;
    if (users.length === 0) return <p>No users found</p>;

    return (
        <div className="p-4 overflow-x-auto">
           <div className='flex flex-wrap items-center justify-between'>
               <h2 className="font-bold text-xl">Registered User List</h2>
               <input type={"text"} className='border-1 border-gray-400 rounded-md px-3 py-2 max-w-md' placeholder='Search.....' />
           </div>
            <table className="min-w-full mt-5">
                <thead>
                <tr>
                    <th className="px-4 py-6 bg-gray-100 border-b">No</th>
                    <th className="px-4 py-6 bg-gray-100 border-b">Name</th>
                    <th className="px-4 py-6 bg-gray-100 border-b">Email</th>
                    <th className="px-4 py-6 bg-gray-100 border-b">Role</th>
                    <th className="px-4 py-6 bg-gray-100 border-b">Permission</th>
                    <th className="px-4 py-6 bg-gray-100 border-b">Status</th>
                    <th className="px-4 py-6 bg-gray-100 border-b">Created Date</th>
                    <th className="px-4 py-6 bg-gray-100 border-b">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((u, index) => (
                    <tr key={u.userEmail} className="hover:bg-gray-100">
                        <td className="px-4 py-3 border-b">{index + 1}</td>
                        <td className="px-4 py-3 border-b">{u.userName}</td>
                        <td className="px-4 py-3 border-b">{u.userEmail}</td>
                        <td className="px-4 py-3 border-b">{u.role.toLowerCase()}</td>
                        <td className="px-4 py-3 border-b">
                            {u.permissions?.length
                                ? u.permissions.map((p) => p.toLowerCase()).join(", ")
                                : "-"}
                        </td>
                        <td className="px-4 py-3 border-b">
                <span
                    className={`px-2 py-1 text-xs rounded-full ${
                        u.accountIsActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                  {u.accountIsActive ? "Active" : "Inactive"}
                </span>
                        </td>
                        <td className="px-4 py-3 border-b">{u.createdDate}</td>
                        <td className="px-4 py-3 border-b">
                            <div
                                ref={(el) => (ellipsisRef.current[index] = el)}
                                className="relative"
                            >
                                <button
                                    onClick={(e) => handleEllipsisClick(index, e)}
                                    className="p-1 rounded-full"
                                >
                                    <EllipsisVertical size={20} />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {ellipisOpenIndex !== null &&
                createPortal(
                    <div
                        className="absolute z-[9999] bg-white shadow-lg rounded-lg ring-1 ring-black/5 w-40"
                        style={{
                            top: position.top,
                            left: position.left - 120, // Adjust horizontal offset
                        }}
                    >
                        <ul className="py-1 text-sm text-gray-500">
                            <li>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                                    onClick={() => updateFunc(users[ellipisOpenIndex])}
                                >
                                    Edit
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                                    Delete
                                </button>
                            </li>
                            <hr className="text-gray-200" />
                            <li>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                                    Account Disabled
                                </button>
                            </li>
                        </ul>
                    </div>,
                    document.body
                )}
        </div>
    );
};

import React from "react";

const PERMISSIONS = [
  { label: "Read", value: "read" },
  { label: "Write", value: "write" },
  { label: "Update", value: "update" },
  { label: "Delete", value: "delete" },
];

export default function PermissionsCheckbox({ values = [], onChange }) {
  const handleToggle = (value) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">Permissions</label>

      <div className="flex flex-col gap-1">
        {PERMISSIONS.map((perm) => (
          <label key={perm.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={values.includes(perm.value)}
              onChange={() => handleToggle(perm.value)}
              className="
                h-4 w-4 rounded border-slate-300 text-slate-900 
                focus:ring-slate-900/50 focus:ring-2
              "
            />
            <span className="text-slate-900">{perm.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

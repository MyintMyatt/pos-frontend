export const exportToCSV = (data, filename) => {
  if (!data || !data.length) {
    alert("No data available to export.");
    return;
  }

  // Extract table headers
  const headers = Object.keys(data[0]);

  // Convert to CSV string
  const csvRows = [
    headers.join(","), // header row
    ...data.map(row => headers.map(field => JSON.stringify(row[field], replacer)).join(","))
  ];

  function replacer(key, value) {
    if (value === null || value === undefined) return "";
    return value;
  }

  const csvString = csvRows.join("\n");

  // Create downloadable file
  const blob = new Blob([csvString], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `${filename}.csv`);
  a.click();
  window.URL.revokeObjectURL(url);
};

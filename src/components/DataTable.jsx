import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { useAuth } from '../contexts/AuthContext';
import { Download, Edit, Trash2 } from 'lucide-react';

export default function DataTable({ columns, data, title, onEdit, onDelete }) {
  const { isAdmin, isEditor } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    XLSX.writeFile(workbook, `${title.replace(/\s+/g, '_')}_Export.xlsx`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors"
        >
          <Download size={16} />
          Export to Excel
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="p-4 font-medium">{col.header}</th>
              ))}
              {(isAdmin || isEditor) && <th className="p-4 font-medium text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="p-4 text-gray-700">
                    {row[col.accessor]}
                  </td>
                ))}
                {(isAdmin || isEditor) && (
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button onClick={() => onEdit(row)} className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-md">
                      <Edit size={16} />
                    </button>
                    {isAdmin && (
                      <button onClick={() => onDelete(row)} className="text-red-600 hover:bg-red-50 p-1.5 rounded-md">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 flex items-center justify-between text-sm text-gray-600 border-t border-gray-100">
        <div>
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, data.length)} of {data.length} entries
        </div>
        <div className="flex gap-1">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="px-3 py-1 border rounded-md disabled:opacity-50 hover:bg-gray-50"
          >
            Prev
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="px-3 py-1 border rounded-md disabled:opacity-50 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

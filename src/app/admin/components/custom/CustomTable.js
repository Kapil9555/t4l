'use client';

import { useEffect, useState, useRef } from 'react';
import { Search, Eye, Pencil, Trash2, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import TablePagination from './TablePagination';

const statusStyles = {
  Active: 'text-green-700 bg-green-100',
  Pending: 'text-yellow-700 bg-yellow-100',
  Cancel: 'text-red-700 bg-red-100',
};

export default function CustomTable({
  title = 'Table',
  columns = [],
  data = [],
  showSearch = true,
  actions = [],
  onRowClick,
  onDeleteClick,
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 5,
  onPageChange = () => {},
  onLimitChange = () => {},
  onSearchChange = () => {},
  selectable = false,
  showStatus = true,
  showImage = true,
  showColumnToggle = false,
  showCategoryFilter = false,
  categoryOptions = [],
  onCategoryChange = () => {},
  showSort = false,
  sortOptions = [],
  onSortChange = () => {},
}) {
  const [search, setSearch] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(columns.map((c) => c.key));
  const allSelected = selectedRows.length === data.length;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [isColumnDropdownOpen, setIsColumnDropdownOpen] = useState(false);
  const columnToggleRef = useRef(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearchChange(search);
    }, 400);
    return () => clearTimeout(delayDebounce);
  }, [search, onSearchChange]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (columnToggleRef.current && !columnToggleRef.current.contains(event.target)) {
        setIsColumnDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
  };

  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="bg-gradient-to-tr from-blue-50 to-white p-6 rounded-xl shadow-md w-full overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <h2 className="text-lg font-semibold text-blue-900">{title}</h2>

        <div className="flex items-center gap-3">
          {showColumnToggle && (
            <div className="relative" ref={columnToggleRef}>
              <button
                onClick={() => setIsColumnDropdownOpen((prev) => !prev)}
                className="px-3 py-1 border rounded text-sm text-blue-700 bg-white hover:bg-blue-50 flex items-center gap-1"
              >
                <SlidersHorizontal size={16} /> Columns
              </button>
              {isColumnDropdownOpen && (
                <div className="absolute right-0 z-10 bg-white mt-2 shadow rounded p-2 border text-sm space-y-1">
                  {columns.map((col) => (
                    <label key={col.key} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={visibleColumns.includes(col.key)}
                        onChange={() => toggleColumn(col.key)}
                        className="accent-blue-600"
                      />
                      {col.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {showCategoryFilter && (
            <select
              className="text-sm border rounded px-3 py-1 text-slate-700"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                onCategoryChange(e.target.value);
              }}
            >
              <option value="">All Categories</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          )}

          {showSort && (
            <select
              className="text-sm border rounded px-3 py-1 text-slate-700"
              value={selectedSort}
              onChange={(e) => {
                setSelectedSort(e.target.value);
                onSortChange(e.target.value);
              }}
            >
              <option value="">Sort By</option>
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          )}

          {showSearch && (
            <div className="relative">
              <Search className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-4 py-2 text-sm border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full text-sm text-left text-slate-700">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              {selectable && (
                <th className="px-4 py-3 font-semibold">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    className="accent-blue-600"
                  />
                </th>
              )}
              {columns.map(
                (col) =>
                  visibleColumns.includes(col.key) && (
                    <th key={col.key} className="px-4 py-3 font-semibold">
                      {col.label}
                    </th>
                  )
              )}
              {actions.length > 0 && <th className="px-4 py-3 text-right font-semibold">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick && onRowClick(row)}
                className="border-b last:border-none even:bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {selectable && (
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(idx)}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleSelectRow(idx);
                      }}
                      className="accent-blue-600"
                    />
                  </td>
                )}
                {columns.map(
                  (col) =>
                    visibleColumns.includes(col.key) && (
                      <td key={col.key} className="px-4 py-4 whitespace-nowrap">
                        {col.key === 'user' ? (
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 relative">
                              <Image
                                src={row.user.image}
                                alt={row.user.name}
                                fill
                                className="rounded-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{row.user.name}</p>
                              <p className="text-xs text-slate-500">{row.user.role}</p>
                            </div>
                          </div>
                        ) : col.key === 'status' && showStatus ? (
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[row.status]}`}>
                            {row.status}
                          </span>
                        ) : col.key === 'image' && showImage ? (
                          <div className="w-12 h-12">
                            <Image
                              src={row[col.key]}
                              alt="Image"
                              width={48}
                              height={48}
                              className="rounded object-cover"
                            />
                          </div>
                        ) : (
                          row[col.key]
                        )}
                      </td>
                    )
                )}
                {actions.length > 0 && (
                  <td className="px-4 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      {actions.includes('view') && (
                        <button className="text-blue-500 hover:text-blue-700">
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                      {actions.includes('edit') && (
                        <button className="text-amber-500 hover:text-amber-700">
                          <Pencil className="w-4 h-4" />
                        </button>
                      )}
                      {actions.includes('delete') && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteClick && onDeleteClick(row);
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="mt-6">
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
            onLimitChange={onLimitChange}
          />
        </div>
      )}
    </div>
  );
}

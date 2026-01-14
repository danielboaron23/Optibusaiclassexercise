import React from 'react';

interface TableBlockProps {
  columns: string[];
  rows: Record<string, string | number>[];
  title?: string;
}

export const TableBlock: React.FC<TableBlockProps> = ({ columns, rows, title }) => {
  return (
    <div className="w-full my-2">
      {title && (
        <h3 className="text-[16px] font-semibold text-[#dfe1e5] mb-3">{title}</h3>
      )}
      <div className="bg-[#22272e] border border-[#464b59] rounded-[8px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#303745] border-b border-[#464b59]">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left text-[14px] font-bold text-[#dfe1e5] border-r border-[#464b59] last:border-r-0"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-[#464b59] last:border-b-0 hover:bg-[#2a2f37] transition-colors"
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 py-2 text-[14px] text-[#bdc1c9] border-r border-[#464b59] last:border-r-0"
                    >
                      {row[column] ?? '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

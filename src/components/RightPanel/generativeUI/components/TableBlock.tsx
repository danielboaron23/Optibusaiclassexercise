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
        <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      )}
      <div className="rounded-[8px] overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 text-left text-[14px] font-bold"
                    style={{ color: 'var(--text-primary)', borderRight: index < columns.length - 1 ? '1px solid var(--border-primary)' : 'none' }}
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
                  className="transition-colors"
                  style={{ borderBottom: rowIndex < rows.length - 1 ? '1px solid var(--border-primary)' : 'none' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-table-alt)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 py-2 text-[14px]"
                      style={{ color: 'var(--text-secondary)', borderRight: colIndex < columns.length - 1 ? '1px solid var(--border-primary)' : 'none' }}
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

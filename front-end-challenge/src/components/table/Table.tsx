type TableProps = {
  headers: string[]
  data: Object[]
  containerClassName?: string
  headerClassName?: string
  rowClassName?: string
}

export const Table = ({
  headers,
  data,
  containerClassName,
  headerClassName,
  rowClassName,
}: TableProps) => {
  const colCount = headers.length

  return (
    <div className={containerClassName}>
      <div className={`grid grid-cols-${colCount || ''} ${headerClassName || ''}`}>
        {headers.map((header) => (
          <div className='font-bold'>{header}</div>
        ))}
      </div>
      {data.map((row) => (
        <div
          key={Object.values(row)[0]}
          className={`grid grid-cols-${colCount} border-t border-t-neutral-900
          ${rowClassName || ''} `}
        >
          {Object.values(row).map((col) => (
            <div key={col}>{col}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

import Loader from "../Loader";
import NoData from "../NoData";

function Table({ tableProps, isLoading }: any) {
  const columns = tableProps?.columns;
  const rows = tableProps?.rows;
  console.log("rows", rows);
  const renderRows = () => {
    return rows.map((item: any, index: number) => {
      const row = Object.values(item);
      return (
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          {row.map((val: any) => {
            return (
              <td key={val} className="px-6 py-4">
                {val}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  return (
    <>
      <div className="heading-x-large mb-3">Table</div>
      <div className="relative overflow-x-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {rows.length > 0 ? (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {columns.map((col: string) => (
                      <th scope="col" className="px-6 py-3" key={col}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
              </table>
            ) : (
              <NoData />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Table;

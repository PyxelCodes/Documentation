export const Table = ({ p }: { p: any[] }) => {
  return (
    <div className="table">
      <table className="field-table">
        <thead>
          <tr>
            <th className="field-th">Field</th>
            <th className="field-th">Type</th>
            <th className="field-th">description</th>
          </tr>
        </thead>
        <tbody>
          {p.map((x) => {
            return (
              <tr>
                <td>{x[0]}</td>
                <td>
                  <code className="type">
                    {' '}
                    {typeof x[1] == 'string' ? (
                      x[1]
                    ) : (
                      <a href={`#${x[1][1]}`}> {x[1][0]} </a>
                    )}{' '}
                  </code>
                </td>
                <td> {x[2]} </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

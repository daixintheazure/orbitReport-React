const Table = ({ sat }) => {
  const satInfo = sat.map(stuff => {
    return (
      <div>
        <tr>
          <td>{stuff.name}</td>
        </tr>
      </div>

    );
  });
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Lanunch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr key={sat.id}>
          {satInfo}
        </tr>
        <tr>
          <td>hi</td>
        </tr>
        </tbody>
      </table>
  );
};

export default Table;
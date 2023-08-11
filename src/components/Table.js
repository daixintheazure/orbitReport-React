const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Header TBD</th>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Lanunch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr key={sat.id}>
          <td>{sat[0].name}</td>
        </tr>
        </tbody>
      </table>
  );
};

export default Table;
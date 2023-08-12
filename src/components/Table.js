import './styling.css';

const Table = ({ sat }) => {
  const satInfo = sat.map(stuff, id => {
    return (
        <tr key={id}>
          <td>{stuff.name}</td>
          <td>{stuff.type}</td>
          <td>{stuff.launchDate}</td>
          <td>{stuff.orbitType}</td>
        </tr>
    );
  });
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <th>Type of Satellite</th>
          <th>Lanunch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {satInfo}
        </tbody>
      </table>
  );
};

export default Table;
import './styling.css';

const Table = ({ sat }) => {
  const satInfo = sat.map(function(stuff) {
    return (
        <tr>
          <td>{stuff.name}</td>
          <td>{stuff.type}</td>
          <td>{stuff.launchDate}</td>
          <td>{stuff.orbitType}</td>
        </tr>
  )})
    
  

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
          {satInfo}
        </tbody>
      </table>
  );
};

export default Table;
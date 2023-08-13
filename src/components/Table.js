import './styling.css';

const Table = ({ sat }) => {
  function status (props){
    if(props){
      return( 
        "Active"
      );
    } else if (!props){
      return(
        "Inactive"
      );
    }
  }
  const satInfo = sat.map(function(stuff, id) {
    return (
        <tr key={id}>
          <td>{stuff.name}</td>
          <td>{stuff.type}</td>
          <td>{stuff.launchDate}</td>
          <td>{status(stuff.operational)}</td>
        </tr>
  )});
    
  

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
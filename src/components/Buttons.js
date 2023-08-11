import satData from "./satData";

const Buttons = (props) => {
  const displaySats = props.displaySats;
  console.log(displaySats);
  const sat = satData;
  console.log(sat);

  
  
  

  return (
    <div>
      {displaySats.map(function(sat, id){
    return <button onClick={() => props.filterByType(sat)} key={id}>{sat} Orbit</button>
  })}
      
      <button onClick={() => props.setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;
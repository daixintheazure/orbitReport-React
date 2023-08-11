import satData from "./satData";

const Buttons = (props) => {
  props.setSat(props.displaySats);
  console.log(props.sat);

  return (
    <div>
      
      <button>place holder</button>
      <button>All Orbits</button>
      </div>
  );
};

export default Buttons;
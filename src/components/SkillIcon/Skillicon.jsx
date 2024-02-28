import { useEffect } from "react";
import "./skillicon.css";

export const Skillicon = (props) => {
  
  useEffect(() => {
    console.group('Skill Icon');
    console.log("name: ", props.name);
    console.log("icon: ", props.icon);
    console.groupEnd();
  }, [])

  return (  
    <img
      className="skillicon"
      src={`${props.icon}`}
      alt={props.name}
    />
  );
};
import { useState } from "react";
import StudentList from "./components/StudentList";
function Toggle() {
  const [value, setvalue] = useState(false)
  const handleToggle= ()=>setvalue(!value)
  return (
    <>
    <button onClick={handleToggle}>{value? "hide students":"show students"}</button> <br /> <br />

    {value && <StudentList/>}
     </>
      
  );
}

export default Toggle
import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import useRef from "react";
import AppointmentInfo from "./components/expandable";
function App() {
  return (
    <div>
      <AppointmentInfo whichType="Upcoming" whichBoo={false} />
      <Button onClick={() => alert("Placeholder")} align="center">
        return home
      </Button>
    </div>
  );
}

export default App;

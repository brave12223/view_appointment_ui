import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import useRef from "react";
import AppointmentInfo from "./components/expandable";
function App() {
  let heading = "Appointments";
  let items = ["12pm doctors", "1pm doctors", "2pm doctors"];
  const [alertText, setAlertText] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const handleSelectItem = (item: string) => {
    setAlertVisible(false);
    setAlertText(item);
    setAlertVisible(true);
    console.log(alertText);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>{alertText}</Alert>
      )}
      <AppointmentInfo />
    </div>
  );
}

export default App;

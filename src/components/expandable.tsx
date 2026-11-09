import { Fragment, useState } from "react";

interface Props {
  appointment: {
    id: number;
    name: string;
    date: string;
    time: string;
    done: boolean;
    user: string;
  };
  whichType?: "Upcoming" | "Completed";
  whichBoo?: boolean;
}
let whichBoo: boolean;
const sampleAppointments = [
  {
    id: 1,
    name: "Consultation",
    date: "November 10, 2026",
    time: "10:00 AM",
    done: false,
    user: "Taylor Smith",
  },
  {
    id: 2,
    name: "Follow-up",
    date: "November 12, 2026",
    time: "2:30 PM",
    done: false,
    user: "Jordan Lee",
  },
  {
    id: 3,
    name: "Annual checkup",
    date: "October 28, 2026",
    time: "9:00 AM",
    done: true,

    user: "Morgan Chen",
  },
];

function ExpandableAppointment({ appointment, whichType, whichBoo }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `appointment-${appointment.id}-details`;
  return (
    <Fragment>
      <tr>
        <th
          scope="row"
          style={{ padding: "12px", borderBottom: "1px solid #ddd" }}
        >
          <button
            type="button"
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            onClick={() => setIsExpanded((expanded) => !expanded)}
            style={{
              padding: 0,
              border: 0,
              background: "transparent",
              color: "#1558a6",
              font: "inherit",
              textAlign: "left",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <span aria-hidden="true">{isExpanded ? "− " : "+ "}</span>
            {appointment.name}
          </button>
        </th>
        <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
          {appointment.date}
        </td>
        <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
          {appointment.time}
        </td>
        <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
          {appointment.done ? "Completed" : "Upcoming"}
        </td>
      </tr>
      <tr id={detailsId} hidden={!isExpanded}>
        <td colSpan={4} style={{ padding: "12px 24px", background: "#f5f7fa" }}>
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "max-content 1fr",
              gap: "8px 16px",
              margin: 0,
            }}
          >
            <dt>Appointment</dt>
            <dd style={{ margin: 0 }}>{appointment.name}</dd>
            <dt>Date</dt>
            <dd style={{ margin: 0 }}>{appointment.date}</dd>
            <dt>Time</dt>
            <dd style={{ margin: 0 }}>{appointment.time}</dd>
            <dt>Booked by</dt>
            <dd style={{ margin: 0 }}>{appointment.user}</dd>
            <dt>Status</dt>
            <dd style={{ margin: 0 }}>
              {appointment.done ? "Completed" : "Upcoming"}
            </dd>
          </dl>
        </td>
      </tr>
    </Fragment>
  );
}

function AppointmentInfo({
  appointments = sampleAppointments,
  whichType,
  whichBoo,
}: {
  appointments?: Props["appointment"][];
  whichType?: Props["whichType"];
  whichBoo?: Props["whichBoo"];
}) {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>{whichType} Appointments</h1>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th
                scope="col"
                style={{ padding: "12px", borderBottom: "2px solid #ccc" }}
              >
                Appointment
              </th>
              <th
                scope="col"
                style={{ padding: "12px", borderBottom: "2px solid #ccc" }}
              >
                Date
              </th>
              <th
                scope="col"
                style={{ padding: "12px", borderBottom: "2px solid #ccc" }}
              >
                Time
              </th>
              <th
                scope="col"
                style={{ padding: "12px", borderBottom: "2px solid #ccc" }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) =>
              appointment.done == whichBoo ? (
                <ExpandableAppointment
                  key={appointment.id}
                  appointment={appointment}
                  whichType={whichType}
                  whichBoo={whichBoo}
                />
              ) : null,
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AppointmentInfo;

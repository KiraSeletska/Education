import "./Day.css";

export const Day = ({ children, onClick }) => {
  return (
    <div className="Day" onClick={onClick}>
      {" "}
      {children}
    </div>
  );
};

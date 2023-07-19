import StudentComponent from "./components/StudentInfoComponent";
import React from "react";
const students=[
  {
      id:1,
      name:"Nguyễn Văn A",
      Age:30,
      Address: "Hà Nội",
  },
  {
      id:2,
      name:"Nguyễn Anh Nhàn",
      Age:28,
      Address: "Đà Nẵng",
  }

];

class App extends React.Component {
  render() {
    return (
      <div>
        <StudentComponent students={students} />
      </div>
    );
  }
}
export default App;
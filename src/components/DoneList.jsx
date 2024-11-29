import { useContext } from "react";
import { TodoContext } from "../App";

const DoneList = () => {
  const { state } = useContext(TodoContext);
  const doneList = state.filter((todoItem) => todoItem.done);

  return (
    <div>
      {doneList.map((doneItem) => {
        return <div>{doneItem.text}</div>;
      })}
    </div>
  );
};

export default DoneList;

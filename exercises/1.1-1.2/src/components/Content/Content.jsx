import Part from "components/Part/Part";

const Content = (props) => {
  return (
    <>
      <Part part={props.exercises[0].part} exercises={props.exercises[0].exercises} />
      <Part part={props.exercises[1].part} exercises={props.exercises[1].exercises} />
      <Part part={props.exercises[2].part} exercises={props.exercises[2].exercises} />
    </>
  );
};

export default Content

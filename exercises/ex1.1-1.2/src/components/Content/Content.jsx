import Part from "components/Part/Part";

const Content = (props) => {
  return (
    <>
      {props.exercises.map((part, key) => {
          return <Part part={part.part} exercises={part.exercises} key={key}/>
      })}
    </>
  );
};

export default Content

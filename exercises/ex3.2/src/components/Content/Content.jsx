import Part from "components/Part/Part";

const Content = ({parts}) => {
  return (
    <>
      {parts.map((part) => {
          return <Part name={part.name} exercises={part.exercises} key={part.id}/>
      })}
    </>
  );
};

export default Content

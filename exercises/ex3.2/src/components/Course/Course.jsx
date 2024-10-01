import Header from "components/Header/Header";
import Content from "components/Content/Content";
import Total from "components/Total/Total";

const Course = ({course}) => {

    const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);

    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total total={total}/>
        </div>
    );
}

export default Course;
import data from "./data";
import Question from "./question";
const Content = () => {
  return (
    <div>
      {data.map((el) => (
        <Question {...el} />
      ))}
    </div>
  );
};
export default Content;

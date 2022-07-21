import { useEffect, useState } from "react";
import { fetchUniversities } from "../../helpers/http";
import styles from "./Form.module.css";
import Button from "../Button/Button";
const Form = ({ setUniversity }) => {
  const [inputValue, setInputValue] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (event) => {
    setSubmit((prev) => !prev);
    event.preventDefault();
  };
  useEffect(() => {
    const getUniversities = async (name) => {
      try {
        const universities = await fetchUniversities(name);
        setUniversity(universities.data);
      } catch (e) {}
    };
    {
      inputValue !== "" && getUniversities(inputValue.toLowerCase());
    }
  }, [submit]);
  return (
    <form className={styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <Button
        onClick={(event) => {
          setInputValue("");
          setUniversity([]);
          event.preventDefault();
        }}
      >
        reset
      </Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};
export default Form;

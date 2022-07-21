import axios from "axios";
export const fetchUniversities = async (country) => {
  return await axios.get(
    `http://universities.hipolabs.com/search?country=${country}`
  );
};

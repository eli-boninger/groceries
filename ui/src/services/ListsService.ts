import axios from "axios";

const getLists = async () => {
  try {
    const res = await axios.get("/lists", { withCredentials: true });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

export { getLists };

import axios from "axios";

const signIn = async (email: string, password: string) => {
  try {
    const res = await axios.post("/session", {
      email_address: email,
      password,
    });
    if (res.status === 401) {
      return { errorMessage: "Incorrect username or password", success: false };
    } else {
      return { success: true };
    }
  } catch (e) {
    return { errorMessage: "Error" };
  }
};

export { signIn };

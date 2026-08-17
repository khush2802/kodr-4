import { useContextData } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { nanoid } from "nanoid";

export const useAuth = () => {
  const {
    registeredUser,
    setRegisteredUser,
    toggle,
    setToggle,
    logedInUser,
    setLogedInUser,
  } = useContextData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // LOGIN
  const loginHandler = (data) => {
    const user = registeredUser.find(
      (val) =>
        val.email === data.email &&
        val.password === data.password
    );

    console.log("Found user:", user);

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "logedInUser",
      JSON.stringify(user)
    );

    setLogedInUser(user);

    toast.success("Logged in successfully");

    reset();
  };

  // REGISTER
  const registerHandler = (data) => {
    const user = {
      ...data,
      id: nanoid(),
    };

    const updatedData = [...registeredUser, user];

    setRegisteredUser(updatedData);

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(updatedData)
    );

    toast.success("User registered successfully!");

    setToggle((prev) => !prev);

    reset();
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,

    toggle,
    setToggle,

    registeredUser,
    setRegisteredUser,

    logedInUser,
    setLogedInUser,

    loginHandler,
    registerHandler,
  };
};
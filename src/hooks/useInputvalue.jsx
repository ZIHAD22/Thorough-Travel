import { useState } from "react";

const useInputValue = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setInputValue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  console.log(process.env.REACT_APP_apiKey);

  return {
    name: inputValue.name,
    email: inputValue.email,
    password: inputValue.password,
    confirmPassword: inputValue.confirmPassword,
    agree: inputValue.agree,
    handleInputBlur,
  };
};

export default useInputValue;

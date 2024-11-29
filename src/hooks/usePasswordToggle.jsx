import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const Icon = visible ? (
    <FaRegEyeSlash onClick={() => setVisible((visible) => !visible)} />
  ) : (
    <FaRegEye onClick={() => setVisible((visible) => !visible)} />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle;

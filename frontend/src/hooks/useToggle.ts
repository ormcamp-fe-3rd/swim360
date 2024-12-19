import { useState } from "react";

function useToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const handleUIToggle = () => setIsOpen(!isOpen);
  return {
    isOpen,
    handleUIToggle,
  };
}

export default useToggle;

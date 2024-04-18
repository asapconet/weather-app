// DebouncedInput.tsx
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import useDebounce from "../hooks/useDebounce";
import ApInput from "./Input";

type DebouncedInputProps = {
  onChange: (value: string | number | readonly string[]) => void;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<typeof ApInput>, "onChange">;

const DebouncedInput = ({
  onChange,
  value,
  delay = 500,
  ...props
}: DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState(value || "");
  const debouncedInputValue = useDebounce(inputValue, 300);

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current(debouncedInputValue);
  }, [debouncedInputValue]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
    // Call the onChange prop with the updated value
    onChange(e.target.value);
  };

  return <ApInput {...props} value={inputValue} onChange={handleInputChange} />;
};

export default DebouncedInput;

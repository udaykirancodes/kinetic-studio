import { useVideoStore } from "@/lib/store";
import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useDebouncer } from "@tanstack/react-pacer";
import React, { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

type FrameInputProps = {
  value: string;
  index: number;
};
export const FrameInput: React.FC<FrameInputProps> = ({ value, index }) => {
  const { toggleSelect } = useVideoStore();
  const updateText = useVideoStore((state) => state.updateText);
  const [currentText, setCurrentText] = useState(value);

  useEffect(() => {
    setCurrentText(value);
  }, [value]);

  // Initialize each utility
  const debouncer = useDebouncer(updateText, {
    key: "my-debouncer",
    wait: 500,
  });

  return (
    <InputGroup>
      <InputGroupInput
        id="input-group-url"
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
          debouncer.maybeExecute(index, e.target.value);
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          toggleSelect(index);
        }}
      />
      {!value.length && (
        <InputGroupAddon align="inline-end">
          <HugeiconsIcon className="text-red-500" icon={Alert02Icon} />
        </InputGroupAddon>
      )}
    </InputGroup>
  );
};

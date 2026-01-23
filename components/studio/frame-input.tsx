import { useVideoStore } from "@/lib/store";
import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
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
  const { updateText, toggleSelect } = useVideoStore();
  return (
    <InputGroup>
      <InputGroupInput
        id="input-group-url"
        value={value}
        onChange={(e) => {
          const newText = e.target.value;
          updateText(index, newText);
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

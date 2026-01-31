import { useVideoStore } from "@/lib/store";
import { Alert02Icon, Delete01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useDebouncer } from "@tanstack/react-pacer";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";

type FrameInputProps = {
  value: string;
  index: number;
  selected?: boolean;
};
export const FrameInput: React.FC<FrameInputProps> = ({
  value,
  index,
  selected = false,
}) => {
  const { toggleSelect, deleteFrame } = useVideoStore();
  const updateText = useVideoStore((state) => state.updateText);
  const [currentText, setCurrentText] = useState(value);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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
      {selected && (
        <InputGroupAddon align="inline-end">
          <AlertDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
          >
            <InputGroupButton
              type="button"
              variant="ghost"
              size="icon-xs"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDeleteDialogOpen(true);
              }}
              aria-label="Delete frame"
            >
              <HugeiconsIcon
                className="text-destructive hover:text-destructive"
                icon={Delete01Icon}
              />
            </InputGroupButton>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete frame?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently remove this frame. This action cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteFrame(index);
                    setDeleteDialogOpen(false);
                  }}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </InputGroupAddon>
      )}
      {!value.length && !selected && (
        <InputGroupAddon align="inline-end">
          <HugeiconsIcon className="text-red-500" icon={Alert02Icon} />
        </InputGroupAddon>
      )}
    </InputGroup>
  );
};

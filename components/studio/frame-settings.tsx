"use client";
import { useVideoStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Control, Controller, Path, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../ui/field";
import { InputGroup, InputGroupInput } from "../ui/input-group";
import { NoFrameSelected } from "./empty";
import { FrameFormValues, frameSchema } from "./frame-schema";

type FormField = {
  name: Path<FrameFormValues>;
  label: string;
  placeholder: string;
  type: string;
  description?: string;
};

const fields: FormField[] = [
  {
    name: "text",
    label: "Text",
    placeholder: "Embrace the lush",
    type: "text",
    description: "Enter the text for the frame",
  },
  {
    name: "time",
    label: "Time",
    placeholder: "0.53",
    type: "number",
    description: "Enter the time for the frame",
  },
  {
    name: "backgroundColor",
    label: "Background Color",
    placeholder: "white",
    type: "text",
    description: "Enter the background color for the frame",
  },
  {
    name: "textColor",
    label: "Text Color",
    placeholder: "black",
    type: "text",
    description: "Enter the text color for the frame",
  },
];

export const FrameSettings = () => {
  const frames = useVideoStore((state) => state.frames);
  const updateSelectedFrame = useVideoStore(
    (state) => state.updateSelectedFrame
  );

  const selectedFrame = frames.find((frame) => frame.selected);
  const [isLoading, setIsLoading] = useState(false);

  // Create the form
  const form = useForm<FrameFormValues>({
    resolver: zodResolver(frameSchema),
    defaultValues: {
      text: selectedFrame?.text || "",
      time: 0,
      backgroundColor: "",
      textColor: "",
    },
  });

  useEffect(() => {
    form.reset({
      text: selectedFrame?.text || "",
      time: selectedFrame?.time || 0,
      backgroundColor: selectedFrame?.backgroundColor || "",
      textColor: selectedFrame?.textColor || "",
    });
  }, [form, selectedFrame]);

  const handleSubmit = (data: FrameFormValues) => {
    setIsLoading(true);
    updateSelectedFrame(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  if (!selectedFrame) {
    return <NoFrameSelected />;
  }

  return (
    <>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="my-2 min-w-full space-y-2"
      >
        {fields.map((field) => (
          <FieldInput
            key={field.name}
            label={field.label}
            name={field.name}
            control={form.control}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}
        <div className="flex w-full items-center justify-between pt-2">
          <Button
            type="reset"
            size={"sm"}
            onClick={() => form.reset()}
            variant={"secondary"}
            className="cursor-pointer"
          >
            Reset
          </Button>
          <Button
            type="submit"
            size={"sm"}
            className="cursor-pointer"
            disabled={isLoading}
          >
            Submit{" "}
            {isLoading && (
              <LoaderCircle className="size-3 animate-spin text-xs" />
            )}
          </Button>
        </div>
      </form>
    </>
  );
};

export const FieldInput = ({
  label,
  name,
  control,
  placeholder,
  type,
}: {
  label: string;
  name: Path<FrameFormValues>;
  control: Control<FrameFormValues>;
  placeholder: string;
  type: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldContent>
            <FieldLabelAndDescription
              name={name}
              label={label}
              description={""}
              required={true}
            />
            {/* Field */}
            <InputGroup>
              <InputGroupInput
                placeholder={placeholder}
                type={type}
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                step={0.1}
              />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )}
    />
  );
};
export const FieldLabelAndDescription = ({
  name,
  label,
  description,
  required,
}: {
  name: string;
  label: string;
  required?: boolean;
  description?: string;
}) => {
  return (
    <>
      <FieldLabel className="text-xs" htmlFor={name}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </FieldLabel>
      {description && (
        // margin bottom is added to remove the default margin added by Markdown Viewer
        <FieldDescription className="text-xs" style={{ marginBottom: 0 }}>
          {description}
        </FieldDescription>
      )}
    </>
  );
};

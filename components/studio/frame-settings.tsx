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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { NoFrameSelected } from "./empty";
import { FrameFormValues, frameSchema } from "./frame-schema";

type FormField = {
  name: Path<FrameFormValues>;
  label: string;
  placeholder: string;
  type: string;
  description?: string;
  step?: number;
  required?: boolean;
};

const fields: FormField[] = [
  {
    name: "text",
    label: "Text",
    placeholder: "Embrace the lush",
    type: "text",
    description: "Enter the text for the frame",
    required: true,
  },
  {
    name: "type",
    label: "Effect",
    placeholder: "text-one",
    type: "select",
    description: "text-one: single block. text-multiple: word by word.",
    required: true,
  },
  {
    name: "fontSize",
    label: "Font Size (px)",
    placeholder: "96",
    type: "number",
    description: "Optional: override font size for this frame",
    step: 1,
    required: false,
  },
  {
    name: "time",
    label: "Time",
    placeholder: "0.53",
    type: "number",
    description: "Enter the time for the frame",
    step: 0.1,
    required: true,
  },
  {
    name: "backgroundColor",
    label: "Background Color",
    placeholder: "white",
    type: "text",
    description: "Enter the background color for the frame",
    required: true,
  },
  {
    name: "textColor",
    label: "Text Color",
    placeholder: "black",
    type: "text",
    description: "Enter the text color for the frame",
    required: true,
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
      type: selectedFrame?.type || "text-one",
      fontSize: selectedFrame?.fontSize,
    },
  });

  useEffect(() => {
    form.reset({
      text: selectedFrame?.text || "",
      time: selectedFrame?.time || 0,
      backgroundColor: selectedFrame?.backgroundColor || "",
      textColor: selectedFrame?.textColor || "",
      type: selectedFrame?.type || "text-one",
      fontSize: selectedFrame?.fontSize,
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
        {fields.map((field) =>
          field.type === "select" ? (
            <FieldSelect
              key={field.name}
              label={field.label}
              name={field.name}
              control={form.control}
              required={field.required}
            />
          ) : (
            <FieldInput
              key={field.name}
              label={field.label}
              name={field.name}
              control={form.control}
              placeholder={field.placeholder}
              type={field.type}
              step={field.step}
              required={field.required}
            />
          )
        )}
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
            disabled={isLoading || !form.formState.isDirty}
          >
            Update{" "}
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
  step,
  required = true,
}: {
  label: string;
  name: Path<FrameFormValues>;
  control: Control<FrameFormValues>;
  placeholder: string;
  type: string;
  step?: number;
  required?: boolean;
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
              required={required}
            />
            {/* Field */}
            <InputGroup>
              <InputGroupInput
                placeholder={placeholder}
                type={type}
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                step={step}
              />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        </Field>
      )}
    />
  );
};

export const FieldSelect = ({
  label,
  name,
  control,
  required = true,
}: {
  label: string;
  name: Path<FrameFormValues>;
  control: Control<FrameFormValues>;
  required?: boolean;
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
              required={required}
            />
            <Select
              value={field.value as string}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select animation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text-one">text-one</SelectItem>
                <SelectItem value="text-multiple">text-multiple</SelectItem>
              </SelectContent>
            </Select>
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

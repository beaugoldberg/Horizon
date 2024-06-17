import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { paymentSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";

const formSchema = paymentSchema();

interface CustomInputPaymentForm {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInputPaymentForm = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputPaymentForm) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="border-t border-gray-200">
          <div className="payment-transfer_form-item py-5">
            <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
              {label}
            </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-12 text-red-500" />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomInputPaymentForm;

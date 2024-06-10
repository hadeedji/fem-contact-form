import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import icon_checkbox_checked from "/assets/icon-checkbox-checked.svg";
import icon_checkbox_unchecked from "/assets/icon-checkbox-unchecked.svg";
import icon_check from "../assets/check.svg";

import { Button } from "./components/button";
import { Input } from "./components/input";

const InputField = ({
  label,
  type = "text",
  required = false,
  register,
  errors,
  ...props
}) => {
  const _label = label.toLowerCase().replace(/ /g, "_");
  const error = errors[_label]?.type == "required";

  return (
    <label className="group block cursor-pointer space-y-100 text-body-sm">
      <div className="space-x-100 text-grey-900 group-focus-within:text-green-600">
        <span>{label}</span>
        {required && <span className="text-green-600">*</span>}
      </div>
      <Input
        type={type}
        {...register(_label, { required })}
        aria-invalid={error}
        {...props}
      />
      {error && <p className="text-red">This field is required</p>}
    </label>
  );
};

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-green-200 px-200 py-400">
      <Toast.Provider>
        <Toast.Viewport className="fixed left-0 top-0 flex w-full justify-center p-300" />
        <div className="rounded-2xl bg-white p-300 text-grey-900">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              setToastOpen(true);
            })}
          >
            <h1 className="text-heading">Contact Us</h1>

            <div className="mt-400 space-y-300">
              <div className="flex flex-col gap-300 sm:flex-row sm:gap-200">
                <InputField
                  register={register}
                  errors={errors}
                  label="First Name"
                  required
                />
                <InputField
                  register={register}
                  errors={errors}
                  label="Last Name"
                  required
                />
              </div>
              <InputField
                register={register}
                errors={errors}
                label="Email Address"
                type="email"
                required
              />

              <div className="space-y-200">
                <div className="space-x-100">
                  <label className="text-body-sm">Query Type</label>
                  <span className="text-body-sm text-green-600">*</span>
                </div>

                <Controller
                  control={control}
                  name="query_type"
                  rules={{ required: true }}
                  render={({
                    field: { onChange, value },
                    fieldState: { invalid },
                  }) => (
                    <RadioGroup.Root
                      className="space-y-200"
                      value={value}
                      onValueChange={onChange}
                    >
                      <div className="flex flex-col gap-200 sm:flex-row">
                        {["General Enquiry", "Support Request"].map((label) => (
                          <RadioGroup.Item
                            className="group w-full rounded-lg border-[1px] border-grey-500 px-300 py-150 text-left hover:border-green-600 data-[state='checked']:border-green-600 data-[state='checked']:bg-green-200"
                            value={label.toLowerCase().replace(/ /g, "_")}
                            key={label}
                          >
                            <label className="flex cursor-pointer items-center justify-start gap-150 hover:text-green-600 group-data-[state='checked']:text-green-600">
                              <span className="relative size-300 rounded-full border-2 border-solid border-grey-500 bg-transparent group-data-[state='checked']:border-green-600">
                                <span className="absolute left-1/2 top-1/2 size-150 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-transparent group-data-[state='checked']:bg-green-600"></span>
                              </span>
                              <span className="text-body-md text-grey-900 group-hover:text-green-600 group-data-[state='checked']:text-green-600">
                                {label}
                              </span>
                            </label>
                          </RadioGroup.Item>
                        ))}
                      </div>
                      {invalid && (
                        <p className="text-body-sm text-red">
                          Please select a query type
                        </p>
                      )}
                    </RadioGroup.Root>
                  )}
                />
              </div>

              <InputField
                register={register}
                errors={errors}
                label="Message"
                type="textarea"
                rows="3"
                required
              />
            </div>

            <Controller
              control={control}
              name="consent_given"
              rules={{ validate: (value) => value }}
              render={({
                field: { onChange, value },
                fieldState: { invalid },
              }) => (
                <div className="my-500 space-y-100 ">
                  <label className="flex cursor-pointer items-center">
                    <Checkbox.Root
                      checked={value}
                      onCheckedChange={onChange}
                      className="size-300 flex-shrink-0"
                      style={{
                        backgroundImage: `url("${icon_checkbox_unchecked}")`,
                      }}
                    >
                      <Checkbox.Indicator>
                        <img src={icon_checkbox_checked} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <div className="mx-200 space-x-100 text-body-sm text-grey-900">
                      <span>I consent to being contacted by the team</span>
                      <span className="text-green-600">*</span>
                    </div>
                  </label>
                  {invalid && (
                    <p className="text-body-sm text-red">
                      To submit this form, please consent to being contacted
                    </p>
                  )}
                </div>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
        <Toast.Root
          className="space-y-100 rounded-xl bg-grey-900 p-300"
          open={toastOpen}
          onOpenChange={setToastOpen}
        >
          <Toast.Title className="flex space-x-100 text-body-md font-bold text-white">
            <img src={icon_check} />
            <span>Message Sent!</span>
          </Toast.Title>
          <Toast.Description className="text-body-sm text-green-200">
            Thanks for completing the form. We'll be in touch soon!
          </Toast.Description>
        </Toast.Root>
      </Toast.Provider>
    </div>
  );
}

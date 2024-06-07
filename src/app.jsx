import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Checkbox from "@radix-ui/react-checkbox";

import icon_checkbox_checked from "../assets/icon-checkbox-checked.svg";
import icon_checkbox_unchecked from "../assets/icon-checkbox-unchecked.svg";

import { Button } from "./components/button";
import { Input } from "./components/input";

const InputField = ({ label, type = "text", required = false, ...props }) => {
  return (
    <label className="group block cursor-pointer space-y-100">
      <div className="space-x-100 text-body-sm text-grey-900 group-focus-within:text-green-600">
        <span>{label}</span>
        {required && <span className="text-green-600">*</span>}
      </div>
      <Input
        name={label.toLowerCase().replace(/ /g, "_")}
        type={type}
        required={required}
        {...props}
      />
    </label>
  );
};

export default function App() {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="min-h-dvh bg-green-200 px-200 py-400">
      <div className="rounded-2xl bg-white p-300 text-grey-900">
        <form action="">
          <h1 className="text-heading">Contact Us</h1>

          <div className="mt-400 space-y-300">
            <InputField label="First Name" required />
            <InputField label="Last Name" required />
            <InputField label="Email Address" type="email" required />

            <div className="space-y-200">
              <div className="space-x-100">
                <label className="text-body-sm">Query Type</label>
                <span className="text-body-sm text-green-600">*</span>
              </div>

              <RadioGroup.Root className="space-y-200" name="query_type">
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
              </RadioGroup.Root>
            </div>

            <InputField label="Message" type="textarea" rows="4" required />
          </div>

          <div className="my-500 flex items-center">
            <Checkbox.Root
              className="flex-shrink-0"
              checked={checkbox}
              onCheckedChange={setCheckbox}
              required
              id="c1"
            >
              <img
                width="24px"
                height="24px"
                src={checkbox ? icon_checkbox_checked : icon_checkbox_unchecked}
              />
            </Checkbox.Root>
            <label
              className="mx-200 cursor-pointer space-x-100 text-body-sm text-grey-900"
              htmlFor="c1"
            >
              <span>I consent to being contacted by the team</span>
              <span className="text-green-600">*</span>
            </label>
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}

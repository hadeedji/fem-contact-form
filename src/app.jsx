import * as RadioGroup from "@radix-ui/react-radio-group";

const InputField = ({ label, type = "text", required = false, ...props }) => {
  return (
    <label className="group block cursor-pointer space-y-100">
      <div className="space-x-100">
        <span className="text-body-sm text-grey-900 group-focus-within:text-green-600">
          {label}
        </span>
        {required && <span className="text-body-sm text-green-600">*</span>}
      </div>
      <input
        className="block w-full cursor-pointer rounded-lg border-[1px] border-grey-500 px-300 py-150 text-body-md focus:border-green-600 group-hover:border-green-600"
        name={label.toLowerCase().replace(/ /g, "_")}
        required={required}
        type={type}
        autoComplete="off"
        {...props}
      />
    </label>
  );
};

export default () => {
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
          </div>
        </form>
      </div>
    </div>
  );
};

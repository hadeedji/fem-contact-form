import { cn } from "../utils";

const Input = React.forwardRef(({ type, className, ...props }, ref) => {
  const Component = type == "textarea" ? "textarea" : "input";

  return (
    <Component
      className={cn(
        "block w-full cursor-pointer rounded-lg border-[1px] border-grey-500 px-300 py-150 text-body-md focus:border-green-600 group-hover:border-green-600",
        className,
      )}
      type={type}
      ref={ref}
      {...props}
    />
  );
});

export { Input };

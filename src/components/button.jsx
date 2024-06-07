import { cn } from "../utils";

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "w-full rounded-lg bg-green-600 py-200 text-center text-body-md font-bold text-white hover:bg-grey-900",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

export { Button };

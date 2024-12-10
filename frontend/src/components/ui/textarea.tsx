import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & { maxLength?: number }
>(({ className, maxLength = 300, ...props }, ref) => {
  const [charCount, setCharCount] = React.useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    props.onChange?.(e); // 기존 onChange 핸들러 호출
  };

  return (
    <div className="relative w-full">
      <textarea
        className={cn(
          "resize-none flex min-h-[320px] w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-base dark:border-gray-800 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
          className
        )}
        maxLength={maxLength}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
      <div className="absolute bottom-3 right-3 text-sm text-gray-500 pointer-events-none">
        {charCount}/{maxLength}
      </div>
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

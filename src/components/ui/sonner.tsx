import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#f5f1eb] group-[.toaster]:text-[#222] group-[.toaster]:border-[#d8d2c8] group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-[#222]",
          actionButton: "group-[.toast]:bg-[#657b78] group-[.toast]:text-[#222]",
          cancelButton: "group-[.toast]:bg-[#f5f1eb] group-[.toast]:text-[#222]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };

import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  backgroundImage?: string;
  gradientColors?: string;
  className?: string;
  id?: string; // Added id prop
}

export const PageWrapper = ({
  children,
  backgroundImage,
  gradientColors = "rgba(0, 77, 77, 0.65), rgba(0, 179, 122, 0.7)",
  className = "",
  id, // Added id to destructuring
}: PageWrapperProps) => {
  return (
    <section
      id={id}
      className={`relative ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(${gradientColors}), url('${backgroundImage}')`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </section>
  );
};
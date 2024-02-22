import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  price,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  price?: string | React.ReactNode;
  link: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-[#374151] border-white/[0.1] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <Link to={link}>
        <div className="group-hover/bento:translate-x-2 transition duration-200 text-white">
          {price}
          <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-xs text-neutral-300">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};

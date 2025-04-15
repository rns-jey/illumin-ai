import { cn } from "@/lib/utils";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={cn(
        "relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 ring-yellow-300 transition-colors outline-none hover:border-yellow-200/40 hover:text-yellow-300 focus:ring-2",
        className,
      )}
      {...restProps}
    />
  );
}

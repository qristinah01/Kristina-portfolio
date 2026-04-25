import Image from "next/image";

export function Avatar({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/images/avatar.jpg"
      alt="Kristina Hakobyan"
      width={size}
      height={size}
      className="rounded-full object-cover"
    />
  );
}

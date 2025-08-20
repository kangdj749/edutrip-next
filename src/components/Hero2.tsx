import Image from "next/image"

export default function HeroBg() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/bgedutrip2.png"
        alt="Background"
        fill
        priority
        className="object-cover object-top"
      />
    </div>
  )
}

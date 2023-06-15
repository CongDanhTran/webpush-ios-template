import useDeviceInfo from "@/hooks/useDeviceInfo"
import React, { useState } from "react"
import Info from "./info"
import * as Collapsible from "@radix-ui/react-collapsible"
import Image from "next/image"

export default function Footer() {
  const [open, setOpen] = useState(false)
  const info = useDeviceInfo()
  return (
    <footer className="flex-shrink-0" style={{ transition: "all 0.7s ease" }}>
      <Collapsible.Root className="h-full" open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger asChild>
          <div
            className="bg-gray-800 h-10 flex justify-center px-2 cursor-pointer"
            title="Toggle device details"
          >
            {open ? (
              <Image
                src="/arrow-down.svg"
                width={20}
                height={20}
                alt="arrow-down"
              />
            ) : (
              <Image
                src="/arrow-up.svg"
                width={20}
                height={20}
                alt="arrow-up"
              />
            )}
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content>
          {info && <Info info={info} />}
        </Collapsible.Content>
      </Collapsible.Root>
    </footer>
  )
}

"use client" // Tells the router this is a client side component
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gh from '../lib/images/gh.png'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

export default function Home() {
  const [count, setCount] = useState("CountDown");
  const [itemType, setItemType] = useState("");

  function decCount() {
    const num = Number(count)

    if (num > 0) {
      setCount(num - 1)
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card className="p-5">
          <div className="text-5xl capitalize text-center p-2">{count} {itemType}</div>
          <div className="flex gap-2">
            <Input 
              type="number"
              placeholder="Enter Starting #"
              onChange={(e) => setCount(e.target.value)} 
              className="w-1/3 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <Input
              type="text"
              placeholder="Enter Item Type"
              onChange={(e) => setItemType(e.target.value)}
              className="w-2/3 text-center" />
          </div>
          <Button variant="secondary" size="lg" onClick={decCount}>Decrement</Button>
        </Card>
        <div className="flex items-center justify-center">
          <Link href="https://github.com/w-allan">
            <Image src={gh} alt="Github Logo" width={30} className="m-2"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

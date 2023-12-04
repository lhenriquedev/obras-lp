"use client";

import * as Accordion from "@radix-ui/react-accordion";

import {
  ChevronDownIcon,
  MinusCircle,
  PlusCircle,
  PlusSquare,
} from "lucide-react";

import { useState } from "react";

interface FaqProps {}
export function Faq(props: FaqProps) {
  const [value, setValue] = useState("");

  return (
    <section className="py-4 md:py-24 h-full  relative bg-pattern bg-cover bg-no-repeat">
      <div className="max-w-3xl px-4 w-full mx-auto relative">
        <div className="flex flex-col mb-8 justify-center items-center gap-2 max-w-sm mx-auto text-center">
          <h2 className="text-primary-800 uppercase text-sm font-medium">
            FAQ
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold">
            Perguntas frequentes
          </h1>
        </div>

        <div className="w-full">
          <Accordion.Root
            type="single"
            className="flex flex-col gap-4"
            value={value}
            onValueChange={setValue}
          >
            <Accordion.Item
              className="w-full bg-primary-50/30 p-4"
              value="item-1"
            >
              <Accordion.Header className="">
                <Accordion.Trigger className="w-full font-bold flex gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-lg text-primary-500">
                      01
                    </span>
                    <p className="inline-block text-gray-900">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  {value === "item-1" ? (
                    <MinusCircle className="text-primary-600" />
                  ) : (
                    <PlusCircle className="text-primary-600" />
                  )}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="py-2">
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor quo sapiente architecto laudantium sit voluptatem,
                  corrupti ipsa! Quo aperiam corporis ex corrupti ab? Ipsa
                  deleniti sunt molestias cum impedit necessitatibus veritatis
                  ex natus minus nemo!
                </p>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              className="w-full bg-primary-100/30 p-4"
              value="item-2"
            >
              <Accordion.Header className="">
                <Accordion.Trigger className="w-full font-bold flex gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-lg text-primary-500">
                      02
                    </span>
                    <p className="inline-block text-gray-900">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  {value === "item-2" ? (
                    <MinusCircle className="text-primary-600" />
                  ) : (
                    <PlusCircle className="text-primary-600" />
                  )}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="py-2">
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor quo sapiente architecto laudantium sit voluptatem,
                  corrupti ipsa! Quo aperiam corporis ex corrupti ab? Ipsa
                  deleniti sunt molestias cum impedit necessitatibus veritatis
                  ex natus minus nemo!
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}

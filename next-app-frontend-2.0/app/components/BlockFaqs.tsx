import React from "react";
import { Typography } from "@/app/MTailwind";

// const faqs = [
//   {
//     title: "How do I order?",
//     desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
//   },
//   {
//     title: "How can i make the payment?",
//     desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
//   },
// ];

export function BlockFaqs({ title, headline, faqs }: any) {
  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto">
        <div className="mb-10 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl !leading-snug lg:text-[40px]"
          >
            {title}
          </Typography>
          <Typography
            as={"div"}
            className="mx-auto font-normal text-[18px] !text-gray-500 lg:max-w-3xl"
          >
            {headline}
          </Typography>
        </div>
        <div className="max-w-3xl mx-auto grid gap-10">
          {faqs?.map(({ title, answer }: any) => (
            <div key={title}>
              <Typography color="blue-gray" className="pb-6 text-[20px] font-bold">
                {title}
              </Typography>
              <div className="border-t border-gray-200 pt-4">
                <Typography className="font-normal !text-gray-500">
                  {answer}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlockFaqs;
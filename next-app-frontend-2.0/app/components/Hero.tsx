"use client"
import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@/app/MTailwind";
// import Image from "next/image";


function Hero({ title, headline, content, image}: any) {  

  // title = JSON.stringify(title)
  // title = JSON.parse(title)
  return (
    <>
      <header className="bg-white p-8">
        <div className="grid w-full place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary" 
            //dangerouslySetInnerHTML={{__html: title}} 
            >{title}</Typography>
              
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
              // dangerouslySetInnerHTML={{__html: headline}} 
            >{headline}</Typography>
              
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              {content}
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" />
                <Button
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                >
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={`http://0.0.0.0:8055/assets/${image?.id}`}
          // width={500}
          // height={500}
          className="h-[50vh] w-full object-contain border rounded-lg mt-10"
          alt="Picture of the author"
        />
      </header>
    </>
  );
}

export default Hero;
import { Typography } from '@/app/MTailwind'
import React from 'react'

const BlockVideo = ({title, headline, video_url}: any) => {
  return (
    <>
        <section className="px-8 py-20">
            <div className="container mx-auto">
                <div className="mb-14 text-center ">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 text-4xl !leading-snug lg:text-[40px]"
                >
                    {title}
                </Typography>
                <Typography
                as={"div"}
                    className="mx-auto font-normal mb-10 text-[18px] !text-gray-500 lg:max-w-3xl"
                >
                    {headline}
                </Typography>


                    <video className="h-full w-full rounded-lg" controls>
                        <source src={video_url} type="video/mp4" />
                        {/* <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" /> */}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    </>
  )
}

export default BlockVideo
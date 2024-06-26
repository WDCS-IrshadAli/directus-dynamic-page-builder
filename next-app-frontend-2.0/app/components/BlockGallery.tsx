import { Typography } from '@/app/MTailwind'
import Image from 'next/image'
import React from 'react'

const BlockGallery = ({ title, headline, gallery_items }: any) => {
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
                    // as={"div"}
                    as={"div"}
                    className="mx-auto font-normal mb-10 text-[18px] !text-gray-500 lg:max-w-3xl"
                >
                    {headline}
                </Typography>


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {gallery_items?.map((curElem: any, index: number) => (
                        <div key={index}>
                            <img
                                className="h-40 w-full rounded-lg object-cover object-center"
                                src={`http://0.0.0.0:8055/assets/${curElem?.directus_files_id}`}
                                alt="gallery-photo"
                                width="400"
                                height="400"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default BlockGallery
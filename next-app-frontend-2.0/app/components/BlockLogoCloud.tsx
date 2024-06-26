import { Button, Card, CardBody, Typography } from "@/app/MTailwind";

export function BlockLogoCloud({ title, headline, logos }: any) {
  return (
    <section className="pb-8 px-8 lg:pb-20">
      <div className="container !mx-auto text-center place-content-center grid">
        {/* <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base"
        >
          More than 50+ brands trust us
        </Typography> */}
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl"
        >
          {title}
        </Typography>
        <Typography
        as={"div"}
          variant="lead"
          className="mx-auto max-w-5xl !text-gray-500 lg:px-8 mb-10"
        >
          {headline}
        </Typography>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-row flex-wrap items-center justify-center gap-6">
            

            {
                logos?.map((curElem: any, index: number) => {
                    return (
                        <Card key={index} shadow={false} className="bg-[#FAFAFA] px-10">
                            <CardBody>
                                <img
                                    src={`http://0.0.0.0:8055/assets/${curElem?.directus_files_id}`}
                                    alt="logo"
                                    className="w-40"
                                />
                                {/* <Typography variant="small" className="font-normal text-gray-500">
                                coinbase.com
                                </Typography> */}
                            </CardBody>
                        </Card>
                    )
                })
            }


          </div>
        </div>
      </div>
      <Button className="mt-6 mx-auto flex" variant="outlined">see all projects</Button>
    </section>
  );
}

export default BlockLogoCloud;
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@/app/MTailwind";
import HTMLReactParser from "html-react-parser/lib/index";
import { sanitize } from "isomorphic-dompurify";
   
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  // parsing string to html
  const Parser = (string: any) => {
    const clear = sanitize(string);
    return HTMLReactParser(clear)
  }
   
  export function BlockSteps({ title, headline, steps }: any) {
    return (
      
      <>
      <header className="bg-white p-8">
        <div className="grid w-full place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                >
                        {title}
                </Typography>
                <Typography
                  as={"div"}
                  variant="lead"
                  className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
                >
                  {headline}
                </Typography>
                
                <div className="flex flex-row flex-wrap justify-around gap-5 items-center mt-10">
                {
                    steps?.map((curElem: any, index: number) => {
                        return (
                            <>
                                <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
                                    <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                    >
                                    <Avatar
                                        size="lg"
                                        variant="square"
                                        className="bg-blue-500 object-contain"
                                        src={`http://0.0.0.0:8055/assets/${curElem?.image}`}
                                        alt="avatar image"
                                    />
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                        <Typography variant="h5" color="blue-gray">
                                            {curElem?.title}
                                        </Typography>
                                        {/* <div className="5 flex items-center gap-0">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div> */}
                                        </div>
                                        {/* <Typography color="blue-gray">Frontend Lead @ Google</Typography> */}
                                    </div>
                                    </CardHeader>   
                                    <CardBody className="mb-6 p-0">
                                    <Typography as={"div"} className="text-justify">
                                        {Parser(curElem?.content)}
                                    </Typography>
                                    </CardBody>
                                </Card>
                            </>
                        )
                    })
                }
                </div>
                


            </div>
        </div>
    </header>

        
      
      </>

    );
  }
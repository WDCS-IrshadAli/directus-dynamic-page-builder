import { Typography } from "@/app/MTailwind";

export function RichText({ title, headline, content }: any) {
  return (
    <section className="p-8">
      <div className="mx-auto max-w-screen-md">
        {/* <img
          src={`https://www.material-tailwind.com/img/content2.jpg`}
          alt="team work"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        /> */}
        <Typography
          variant="small"
          className="font-medium !text-blue-500"
        >
          #{title}
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="my-4 font-black text-4xl !leading-snug"
        >
          {headline}...
        </Typography>
        <div className="font-normal !text-gray-500">
          {content}
        </div>

      </div>
    </section>
  );
}


export default RichText;
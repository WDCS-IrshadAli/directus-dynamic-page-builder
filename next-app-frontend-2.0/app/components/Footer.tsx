import { Typography } from "@/app/MTailwind";
import Link from "next/link";
// const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer({ getNavLinksData }: any) {
  return (
    <footer className="px-8 pt-10 pb-28">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {getNavLinksData?.data?.map((curElem: any, index: number) => (
            <ul key={index}>
              <li>
                <Link key={index} href={curElem?.permalink}>
                    <Typography
                    // as="a"
                    // href="#"
                    color="white"
                    className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                    >
                        {curElem?.title}
                    </Typography>
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Webclues
        </Typography>
      </div>
    </footer>
  );
}
export default Footer;
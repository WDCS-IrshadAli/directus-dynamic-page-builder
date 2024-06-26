import React from 'react'
import BlockFaqs from '@/app/components/BlockFaqs';
import BlockGallery from '@/app/components/BlockGallery';
import BlockLogoCloud from '@/app/components/BlockLogoCloud';
import BlockQuote from '@/app/components/BlockQuote';
import { BlockSteps } from '@/app/components/BlockSteps';
import BlockVideo from '@/app/components/BlockVideo';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import NavbarComponent from '@/app/components/NavbarComponent';
import { RichText } from '@/app/components/RichText';
import { getNavLinks, getPage } from '@/app/lib/action';
import {sanitize} from 'isomorphic-dompurify';
import htmlParser from 'html-react-parser';

// parsing string to html
const parser = (string: any) => {
  const clear = sanitize(string);
  return htmlParser(clear)
}

// dynamic page builder
const DynamicPagesBuilder = async ({ params }: any) => {
    const URI: string = params?.pages;
    const getPageData: any = await getPage(URI);

    const blocks: any = getPageData?.data[0]?.blocks;
    const sortedBlocks: any = blocks?.sort((a: any, b: any) => a?.sort - b?.sort);
    const pageBuilder: any = sortedBlocks?.map((curElem: any, index: number) => {
        if (curElem?.hide_block===true) return;
        let componentElement = null;

        switch (curElem?.collection) {
        case "block_hero":
            componentElement = (
            <div>
                <Hero title={curElem?.item?.title} headline={parser(`<div key=${index}>${curElem?.item?.headline}</div>`)} content={curElem?.item?.content} image={curElem?.item?.image} />
            </div>
            )
            break;

        case "block_richtext":
            componentElement = (
            <div>
                <RichText title={curElem?.item?.title} headline={curElem?.item?.headline} content={parser(curElem?.item?.content)} />
            </div>
            )
            break;

        case "block_quote":
            componentElement = (
            <div>
                <BlockQuote title={curElem?.item?.title} subtitle={curElem?.item?.subtitle} content={parser(curElem?.item?.content)} />
            </div>
            )
            break;

        case "block_faqs":
            componentElement = (
            <div>
                <BlockFaqs title={curElem?.item?.title} headline={parser(curElem?.item?.headline)} faqs={curElem?.item?.faqs} />
            </div>
            )
            break;

        case "block_video":
            componentElement = (
            <div>
                <BlockVideo title={curElem?.item?.title} headline={parser(curElem?.item?.headline)} video_url={curElem?.item?.video_url} />
            </div>
            )
            break;

        case "block_gallery":
          componentElement = (
          <div>
              <BlockGallery title={curElem?.item?.title} headline={parser(curElem?.item?.headline)} gallery_items={curElem?.item?.gallery_items} />
          </div>
          )
          break;

        case "block_logocloud":
          componentElement = (
          <div>
              <BlockLogoCloud title={curElem?.item?.title} headline={parser(curElem?.item?.headline)} logos={curElem?.item?.logos} />
          </div>
          )
          break;

        case "block_steps":
          componentElement = (
          <div>
              <BlockSteps title={curElem?.item?.title} headline={parser(curElem?.item?.headline)} steps={curElem?.item?.steps} />
          </div>
          )
          break;

        default:
            componentElement=null;
        }

        return (
        <>
            <React.Fragment key={index}>
                {componentElement}
            </React.Fragment>
        </>
        )
    })
    

    // navlinks data 
    const getNavLinksData: any = await getNavLinks();

  return (
    <>
        <NavbarComponent getNavLinksData={getNavLinksData} />
        <div>
        {
          pageBuilder?.map((curElem: any, index: number) => {
            
            return (
              <div key={index}>
                {curElem}
              </div>
            )
          })
        }
      </div>
      <Footer getNavLinksData={getNavLinksData} />
    </>
  )
}

export default DynamicPagesBuilder
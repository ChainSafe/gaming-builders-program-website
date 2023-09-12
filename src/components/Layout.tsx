
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar"

const RootLayout = ({ children }:any) => {
  return (
    <div>
      <Head>
        <title>Builders Program - ChainSafe Gaming</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Build your next web3 game with ChainSafe Gaming SDK through our Builders Program. Get funding, guidance, and support. Apply to join waitlist."
        />
        {/*<!-- OG Meta Tags -->*/}
        <meta
          property='og:url'
          content='https://builders.gaming.chainsafe.io/'
          key='ogurl'
        />
        <meta
          property='og:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/73764230-eea4-4d79-71a7-721a06a87e00/public'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='ChainSafe Gaming Marketplace'
          key='ogsitename'
        />
        <meta
          property='og:title'
          content='Gaming-focussed NFT marketplace | ChainSafe Gaming'
          key='ogtitle'
        />
        <meta
          property='og:description'
          content="Build your next web3 game with ChainSafe Gaming SDK through our Builders Program. Get funding, guidance, and support. Apply to join waitlist."
          key='ogdesc'
        />
        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ChainSafeth' />
        <meta
          name='twitter:title'
          content='Gaming-focussed NFT marketplace | ChainSafe Gaming'
        />
        <meta
          name='twitter:description'
          content="Build your next web3 game with ChainSafe Gaming SDK through our Builders Program. Get funding, guidance, and support. Apply to join waitlist."
        />
        <meta
          name='twitter:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/73764230-eea4-4d79-71a7-721a06a87e00/public'
        />
        <script
          defer
          data-domain='builders.gaming.chainsafe.io'
          src='https://plausible.io/js/script.outbound-links.js'></script>
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7667626.js"></script>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default RootLayout
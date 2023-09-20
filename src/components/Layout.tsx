
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar"

const RootLayout = ({ children }:any) => {
  return (
    <div>
      <Head>
        <title>Builder&apos;s Program - ChainSafe Gaming</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Build your next web3 game with ChainSafe Gaming SDK through our Builder's Program. Get funding, guidance, and support. Apply to join waitlist."
        />
        {/*<!-- OG Meta Tags -->*/}
        <meta
          property='og:url'
          content='https://builders.gaming.chainsafe.io/'
          key='ogurl'
        />
        <meta
          property='og:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/d54df2fc-0b20-4f10-29f1-a95d424f9a00/public'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='ChainSafe Gaming Builders Program'
          key='ogsitename'
        />
        <meta
          property='og:title'
          content="Builder's Program - ChainSafe Gaming"
          key='ogtitle'
        />
        <meta
          property='og:description'
          content='Build your next web3 game with ChainSafe Gaming SDK through our Builders Program. Get funding, guidance, and support. Apply to join waitlist.'
          key='ogdesc'
        />
        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ChainSafeth' />
        <meta
          name='twitter:title'
          content="Builder's Program - ChainSafe Gaming"
        />
        <meta
          name='twitter:description'
          content="Build your next web3 game with ChainSafe Gaming SDK through our Builder's Program. Get funding, guidance, and support. Apply to join waitlist."
        />
        <meta
          name='twitter:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/d54df2fc-0b20-4f10-29f1-a95d424f9a00/public'
        />
        {/* <script
          defer
          data-domain='builders.gaming.chainsafe.io'
          src='https://plausible.io/js/script.outbound-links.js'></script> */}
        <script
          type='text/javascript'
          id='hs-script-loader'
          async
          defer
          src='//js.hs-scripts.com/7667626.js'></script>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout
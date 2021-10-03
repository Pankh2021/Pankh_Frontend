import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark">
        <title>Pankh</title>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script async>{`var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {mode: "async", widgetcode:"c67a69eaea978f89fb9c60b37f182035d6a501fb3571d86046607d6bebb1b62849e4d86c71444eae2c32e6366483673c", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript"; s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");`}</Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

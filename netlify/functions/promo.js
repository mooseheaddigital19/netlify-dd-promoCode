// netlify/functions/promo.js

exports.handler = async (event) => {
  // read ?locale=XX
  const locale = (event.queryStringParameters || {}).locale?.toUpperCase();

  // read discount percent from env (default to 10 if unset)
  const discount = process.env.PROMO_DISCOUNT || '10';

  // pick the right code
  const code = locale === "CA"
    ? process.env.PROMO_CODE_CA
    : process.env.PROMO_CODE_US;

  // build the sentence
   // const sentence = locale === "CA"
   //  ? `Use code ${code} at checkout for 10% off sitewide – $500 CAD minimum for free shipping in Canada.`
   //  : `Use code ${code} at checkout for 10% off sitewide.`;

  const sentence = locale === "CA"
    ? `Use code ${code} at checkout for ${discount}% off sitewide – $500 CAD minimum for free shipping in Canada.`
    : `Use code ${code} at checkout for ${discount}% off sitewide.`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<p style="text-align:center;margin:0;line-height:35px;font-size:26px;color: #3d5567;" class="promo">${sentence}</p>`
  };
};

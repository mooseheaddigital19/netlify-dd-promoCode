// netlify/functions/promo.js

exports.handler = async () => {
  // You can override this default in Netlify’s UI later
  const codeUS = process.env.PROMO_CODE_US || "SUMMER25USA";
  const codeCA = process.env.PROMO_CODE_CA || "SUMMER25CA";
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    //body: `<span class="promo">${codeUS}</span>`
    //body: `<p style="text-align: center; margin: 0; line-height: 35px; font-size: 26px;color: #3d5567;" class="promo">{% if contact.data.locale == "CA" %}Use code <b>${codeCA}</b> at checkout for 20% off sitewide – $500 CAD minimum for free shipping.{% else %}Use code <b>${codeUS}</b> at checkout for 20% off sitewide.{% endif %}</p>`
    body: `<p style="text-align: center; margin: 0; line-height: 35px; font-size: 26px;color: #3d5567;" class="promo">Use code <b>${codeUS}</b> at checkout for 20% off sitewide - $500 CAD minimum for free shipping.</p>`
  };
};

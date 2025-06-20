// netlify/functions/promo.js

exports.handler = async () => {
  // You can override this default in Netlify’s UI later
  const code = process.env.PROMO_CODE || "SUMMER25";
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    //body: `<span class="promo">${code}</span>`
    body: `<p style="text-align: center; margin: 0; line-height: 35px; font-size: 26px;" class="promo">{% if contact.data.locale == "CA" %}Use code <b>CANDAY</b> at checkout for 20% off sitewide – $500 CAD minimum for free shipping.{% else %}Use code <b>${code}</b> at checkout for 20% off sitewide.{% endif %}</p>`
  };
};

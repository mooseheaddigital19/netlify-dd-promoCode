// netlify/functions/promo.js

exports.handler = async () => {
  // You can override this default in Netlify’s UI later
  const code = process.env.PROMO_CODE || "SUMMER25";
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<span class="promo">${code}</span>`
  };
};

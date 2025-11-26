// netlify/functions/nearest-store.js

// Map of country/state (or province) -> array of store objects
// Each store has: name, address (one line), phone, url
const stores = {
  // ---------- UNITED STATES ----------

  "US:AZ": [
    {
      name: "Scottsdale Organic Mattress Gallery",
      address: "18529 N Scottsdale Rd STE 129, Scottsdale, AZ 85255",
      phone: "(480) 634-5338",
      url: "https://stores.naturepedic.com/az/scottsdale/n-scottsdale-rd.html"
    }
  ],

  "US:CA": [
    {
      name: "Irvine Organic Mattress Gallery",
      address: "8603 Irvine Center Dr, Irvine, CA 92618",
      phone: "(949) 932-0869",
      url: "https://stores.naturepedic.com/ca/irvine/irvine-center-dr.html"
    },
    {
      name: "Los Angeles Organic Mattress Gallery",
      address: "144 S Robertson Blvd, Los Angeles, CA 90048",
      phone: "(310) 271-1055",
      url: "https://stores.naturepedic.com/ca/losangeles/s-robertson-blvd.html"
    },
    {
      name: "La Jolla Organic Mattress Gallery",
      address: "7629 Girard Ave Suite C-2, La Jolla, CA 92037",
      phone: "(858) 352-6465",
      url: "https://stores.naturepedic.com/ca/lajolla/girard-ave.html"
    }
  ],

  "US:CO": [
    {
      name: "Denver Organic Mattress Gallery",
      address: "290 Fillmore St, Denver, CO 80206",
      phone: "(303) 388-8265",
      url: "https://stores.naturepedic.com/co/denver/filmore-st.html"
    }
  ],

  "US:CT": [
    {
      name: "Greenwich Organic Mattress Gallery",
      address: "79 East Putnam Ave, Greenwich, CT 06830",
      phone: "(203) 340-9988",
      url: "https://stores.naturepedic.com/ct/greenwich/east-putnam-ave.html"
    }
  ],

  "US:FL": [
    {
      name: "West Palm Beach Organic Mattress Gallery",
      address: "1880 Okeechobee Blvd Suite B, West Palm Beach, FL 33409",
      phone: "(561) 791-6091",
      url: "https://stores.naturepedic.com/fl/westpalmbeach/okeechobee-blvd.html"
    }
  ],

  "US:GA": [
    {
      name: "Atlanta Organic Mattress Gallery",
      address: "3167 Peachtree Road NE Suite D-1, Atlanta, GA 30305",
      phone: "(404) 549-2012",
      url: "https://stores.naturepedic.com/ga/atlanta/peachtree-road-ne.html"
    }
  ],

  "US:IL": [
    {
      name: "Chicago Organic Mattress Gallery",
      address: "643 Central Avenue, Highland Park, IL 60035",
      phone: "(847) 926-7295",
      url: "https://stores.naturepedic.com/il/highlandpark/central-avenue.html"
    }
  ],

  "US:MD": [
    {
      name: "North Bethesda Organic Mattress Gallery",
      address: "11802 Rockville Pike Suite A, Rockville, MD 20852",
      phone: "(240) 242-3131",
      url: "https://stores.naturepedic.com/md/rockville/rockville-pike.html"
    }
  ],

  "US:MA": [
    {
      name: "Boston Organic Mattress Gallery",
      address: "252 Newbury St 1st Floor, Boston, MA 02116",
      phone: "(857) 957-0151",
      url: "https://stores.naturepedic.com/ma/boston/newbury-st.html"
    },
    {
      name: "Wellesley Organic Mattress Gallery",
      address: "444 Washington St, Wellesley, MA 02482",
      phone: "(781) 237-0540",
      url: "https://stores.naturepedic.com/ma/wellesley/washington-st.html"
    }
  ],

  "US:MN": [
    {
      name: "Minneapolis Organic Mattress Gallery",
      address: "14200 Wayzata Blvd, Minnetonka, MN 55305",
      phone: "(952) 855-7492",
      url: "https://stores.naturepedic.com/mn/minnetonka/wayzata-blvd.html"
    }
  ],

  "US:NC": [
    {
      name: "Charlotte Organic Mattress Gallery",
      address: "3920 Sharon Rd #110, Charlotte, NC 28211",
      phone: "(704) 835-1057",
      url: "https://stores.naturepedic.com/nc/charlotte/sharon-rd.html"
    }
  ],

  "US:NY": [
    {
      name: "Brooklyn Organic Mattress Gallery",
      address: "85 N 3RD ST, Brooklyn, NY 11249",
      phone: "(347) 227-7614",
      url: "https://stores.naturepedic.com/ny/brooklyn/n-3rd-st.html"
    },
    {
      name: "NYC Organic Mattress Gallery",
      address: "245 E 60th St #1, New York, NY 10022",
      phone: "(212) 371-8690",
      url: "https://stores.naturepedic.com/ny/newyork/e-60th-st.html"
    }
  ],

  "US:OH": [
    {
      name: "Cleveland Organic Mattress Gallery",
      address: "16925 Park Circle Dr, Chagrin Falls, OH 44023",
      phone: "(800) 917-3342",
      url: "https://stores.naturepedic.com/oh/chagrinfalls/park-circle-dr.html"
    }
  ],

  "US:OR": [
    {
      name: "Portland Organic Mattress Gallery",
      address: "530 NW 11th Ave, Portland, OR 97209",
      phone: "(971) 888-5250",
      url: "https://stores.naturepedic.com/or/portland/nw-11th-ave.html"
    }
  ],

  "US:TN": [
    {
      name: "Nashville Organic Mattress Gallery",
      address: "3708 Hillsboro Pike Suite B, Nashville, TN 37215",
      phone: "(615) 864-7642",
      url: "https://stores.naturepedic.com/tn/nashville/hillsboro-pike.html"
    }
  ],

  "US:TX": [
    {
      name: "Dallas Organic Mattress Gallery",
      address: "5450 W Lovers Lane Ste 230, Dallas, TX 75209",
      phone: "(972) 925-0758",
      url: "https://stores.naturepedic.com/tx/dallas/lovers-lane.html"
    },
    {
      name: "Frisco Organic Mattress Gallery",
      address: "5355 Dallas Parkway Suite 630, Frisco, TX 75034",
      phone: "(469) 362-6101",
      url: "https://stores.naturepedic.com/tx/frisco/dallas-parkway.html"
    },
    {
      name: "Southlake Organic Mattress Gallery",
      address: "1151 East Southlake Boulevard Ste 320, Southlake, TX 76092",
      phone: "(817) 410-8788",
      url: "https://stores.naturepedic.com/tx/southlake/east-southlake-boulevard.html"
    }
  ],

  "US:WA": [
    {
      name: "Bellevue Organic Mattress Gallery",
      address: "1038 116th Ave NE Ste 330, Bellevue, WA 98004",
      phone: "(425) 362-6536",
      url: "https://stores.naturepedic.com/wa/bellevue/116th-ave-ne.html"
    }
  ],


  // ---------- CANADA ----------

  "CA:ON": [
    {
      name: "Toronto Leaside Organic Mattress Gallery",
      address: "1617 Bayview Avenue, East York, Ontario M4G3B5",
      phone: "416-322-9090",
      url: "https://www.naturepedic.ca/leaside"
    },
    {
      name: "Toronto Oakville Organic Mattress Gallery",
      address: "346 Lakeshore Rd E, Oakville, Ontario L6J 1J6",
      phone: "905-338-7928",
      url: "https://www.naturepedic.ca/oakville"
    }
  ],

  "CA:BC": [
    {
      name: "Vancouver Organic Mattress Gallery",
      address: "1588 West Broadway, Vancouver, British Columbia V6J5K9",
      phone: "604-742-0066",
      url: "https://www.naturepedic.ca/vancouver"
    }
  ]
};


// Helper: generic fallback HTML (store locator)
function fallbackHtml() {
  return `
    <div style="font-family: Arial, sans-serif; font-size:16px; line-height:1.4;color: rgb(66, 85, 99);">
      <p style="font-family: Arial, sans-serif; font-size:16px; line-height:1.4;color: rgb(66, 85, 99);text-align: center;">With organic mattress and bedding stores across the U.S. and Canada, we’re here to help you create your dream bedroom in a mattress showroom space as refreshing as a good night’s sleep.</p>
            <!--Padding and border combo button with gradient background-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
            <tr>
            <td align="center" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:11px 20px;background:rgb(66, 85, 99); ">
            <a href="https://stores.naturepedic.com/" style="background: none; color:#ffffff;font-family:Arial, sans-serif;font-size:16px;line-height:120%;Margin:0;text-decoration:none;text-transform:none;display:inline-block;">
            FIND A STORE NEAR YOU
            </a>
            </td>
            </tr>
            </table>
            <p>&nbsp;</p>

      
    </div>
  `;
}

// Normalize raw country string → "US" or "CA"
function normalizeCountry(input = "") {
  const c = input.trim().toLowerCase();

  const map = {
    "united states": "US",
    "united states of america": "US",
    "us": "US",
    "u.s.": "US",
    "u.s": "US",
    "usa": "US",
    "america": "US",
    "american": "US",

    "canada": "CA",
    "ca": "CA",
    "c.a.": "CA",
    "can": "CA"
  };

  return map[c] || input.toUpperCase().trim();
}


// Normalize raw state/province → canonical code ("CA", "NY", "ON", etc.)
function normalizeRegion(input = "") {
  const s = input.trim().toLowerCase();

  const map = {
    // States
    "arizona": "AZ",
    "az": "AZ",

    "california": "CA",
    "ca": "CA",

    "colorado": "CO",
    "co": "CO",

    "connecticut": "CT",
    "ct": "CT",

    "florida": "FL",
    "fl": "FL",

    "georgia": "GA",
    "ga": "GA",

    "illinois": "IL",
    "il": "IL",

    "maryland": "MD",
    "md": "MD",

    "massachusetts": "MA",
    "ma": "MA",

    "minnesota": "MN",
    "mn": "MN",

    "north carolina": "NC",
    "n. carolina": "NC",
    "nc": "NC",

    "new york": "NY",
    "ny": "NY",

    "ohio": "OH",
    "oh": "OH",

    "oregon": "OR",
    "or": "OR",

    "tennessee": "TN",
    "tn": "TN",

    "texas": "TX",
    "tx": "TX",

    "washington": "WA",
    "wa": "WA",

    // Provinces
    "ontario": "ON",
    "on": "ON",

    "british columbia": "BC",
    "b.c.": "BC",
    "bc": "BC"
  };

  return map[s] || input.toUpperCase().trim();
}


exports.handler = async (event) => {
  try {
    const params = event.queryStringParameters || {};

    const countryRaw = params.country || "";
    const stateRaw = params.state || "";
    // postcode is available if you want to use it later, but not used right now
    const postcodeRaw = params.postcode || "";

    const country = normalizeCountry(countryRaw);
    const state = normalizeRegion(stateRaw);
    const postcode = postcodeRaw.trim();             // not used yet

    const key = `${country}:${state}`;
    const stateStores = stores[key];

    // If we don't have any stores for this region, show the store locator fallback
    if (!stateStores || stateStores.length === 0) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "text/html; charset=UTF-8" },
        body: fallbackHtml()
      };
    }

    // Build the HTML for all stores in that state/province
    const multiple = stateStores.length > 1;
    const headingText = multiple
      ? "Your nearest Naturepedic Organic Mattress Gallery locations:"
      : "Your nearest Naturepedic Organic Mattress Gallery:";

    const storesHtml = stateStores
      .map((store) => {
        const safePhone = store.phone ? store.phone : "";
        return `
          <div style="margin-bottom:20px;line-height:1.4;">
            <p style="margin:0 0 4px 0; color: rgb(66, 85, 99);font-size: 16px;text-align: center;line-height:1.4;"><strong>${store.name}</strong></p>
            <p style="margin:0 0 2px 0; color: rgb(66, 85, 99);font-size: 16px;text-align: center;">${store.address}</p>
            ${
              safePhone
                ? `<p style="margin:0 0 15px 0; color: rgb(66, 85, 99);font-size: 16px;text-align: center;">${safePhone}</p>`
                : ""
            }
            <!--Padding and border combo button with gradient background-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
            <tr>
            <td align="center" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:11px 20px;background:rgb(66, 85, 99); ">
            <a href="${store.url}" style="background: none; color:#ffffff;font-family:Arial, sans-serif;font-size:16px;line-height:120%;Margin:0;text-decoration:none;text-transform:none;display:inline-block;">
            VIEW STORE
            </a>
            </td>
            </tr>
            </table>
            
          </div>
        `;
      })
      .join("");

    // <p style="font-family: Arial, sans-serif; font-size:16px; line-height:1.4;color: rgb(66, 85, 99);font-size:18px;"><strong>${headingText}</strong></p>
    const html = `
      <div style="font-family: Arial, sans-serif; font-size:16px; line-height:1.4;">  
        ${storesHtml}
      </div>
    `;

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html; charset=UTF-8" },
      body: html
    };
  } catch (e) {
    // On any error, quietly fall back to generic locator
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html; charset=UTF-8" },
      body: fallbackHtml()
    };
  }
};

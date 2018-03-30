# gatsby-plugin-google-remarketing

Easily add Google Remarketing tag to your Gatsby site.

## Install

`npm install --save gatsby-plugin-google-remarketing`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-remarketing`,
      options: {
        google_conversion_id: "YOUR_GOOGLE_CONVERSION_ID",
        google_remarketing_only: "IS_REMARKETING_ONLY",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
```

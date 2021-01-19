import React from "react"

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents
    return setComponents([
      <script type="text/javascript" key={`gatsby-plugin-google-remarketing-variables`} dangerouslySetInnerHTML={{
        __html: `
            /* <![CDATA[ */
            var google_conversion_id = "${pluginOptions.google_conversion_id}";
            var google_custom_params = window.google_tag_params;
            var google_remarketing_only = "${pluginOptions.google_remarketing_only}";
            /* ]]> */
        `
      }}>
      </script>,
      <script key={`gatsby-plugin-google-remarketing-script`} type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>,
      <noscript key={`gatsby-plugin-google-remarketing-no-script`} dangerouslySetInnerHTML={{
        __html: `
          <div style="display: inline;">
            <img height="1" width="1" style="borderStyle: none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/${pluginOptions.google_conversion_id}/?guid=ON&amp;script=0"/>
          </div>
        `
      }}>
      </noscript>
    ])
  }
  return null
}
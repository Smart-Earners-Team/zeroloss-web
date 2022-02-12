import React from "react";
import ResponsiveLayout from "../common/components/responsive-layout";

/**
 * Applies site wide paddings or margins to dashboard content
 *
 * @param {*} { children }
 * @return {*}
 */
const ContentLayout = ({ children }) => {
  return (
    <ResponsiveLayout
      desktopComponent={<div className="px-5 print-layout">{children}</div>}
      mobileComponent={
        <div className="responsive-padding print-layout">{children}</div>
      }
    />
  );
};

export default ContentLayout;

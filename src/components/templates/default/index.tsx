import * as React from "react";

import Template from "./styles";

interface ITemplateProps {
  children: React.ReactNode;
}

const DefaultTemplate: React.SFC<ITemplateProps> = ({ children }) => (
  <Template>
    {children}
  </Template>
);

export default DefaultTemplate;

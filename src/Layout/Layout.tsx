import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";
import * as Styled from "./Layout.styled";
import { SideNav } from "../components";

const Layout = () => {
  return (
    <Styled.Page>
      <Styled.PageContent>
        <Row>
          <Col xs={4} sm={4} md={3}>
            <SideNav />
          </Col>
          <Col xs={8} sm={8} md={9}>
            <Outlet />
          </Col>
        </Row>
      </Styled.PageContent>
    </Styled.Page>
  );
};

export default Layout;

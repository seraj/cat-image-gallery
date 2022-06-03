import styled from "styled-components";

export const Page = styled.div`
  display: flex;
`;
export const PageContent = styled("main")`
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
`;

export const ScrollableContent = styled("div")`
  overflow: auto;
`;
export const Loader = styled("div")`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
`;

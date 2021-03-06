import { css } from '@emotion/react';

export const flex = (hasHeader) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${hasHeader ? 'calc(100% - 56px)' : '100vh'}
`;

export const content = css`
  width: 300px;
  background-color: #fff;
  border-radius: 6px;
`;

export const navStyle = css`
  padding: 18px 20px;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
`;

export const sideNavWidth = css`
  width: 250px;
  height: calc(100vh - 56px);
`;
export const yen = (style) => css`
  margin-left: 6px;
  ${style}
`;

export const lineHeightH5 = css`
  line-height: 42px;
`;

export const alignCenter = css`
  text-align: center;
`;
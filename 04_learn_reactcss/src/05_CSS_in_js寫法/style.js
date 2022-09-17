import styled from 'styled-components';
import { primaryColor, largeSize } from './style/variables';

// 1. 基本使用
export const AppWrapper = styled.div`
  .footer {
    border: 1px solid orange;
  }
`;

// 2. 子元素單獨抽取到一個樣式組件
// 3. 可以接收外部傳入的props
// 4. 可以通過 attrs 給標籤模板字符串提供屬性
// 5. 從一個單獨的文件引入
export const SectionWrapper = styled.div.attrs((props) => ({
  tColor: (props) => props.color || 'blue',
}))`
  border: 1px solid red;
  .title {
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.tColor};
    &:hover {
      background-color: purple;
    }
  }

  .content {
    font-size: ${largeSize}px;
    color: ${primaryColor};
  }
`;

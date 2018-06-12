import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

injectGlobal`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css?family=Dosis');
  
  body {
    font-family: 'Dosis', sans-serif;
    font-size: 24px;
    line-height: 1.6;
  }
`;

export default () => <h1>Hello.</h1>;

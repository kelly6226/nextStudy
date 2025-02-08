import styled from 'styled-components';
import { Div } from '@/styles/layouts/Tag';

const Default = styled(Div)`
  white-space: pre-line;

  word-break: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  letter-spacing: -0.1px;
`;

const Font = styled(Default)`
`;

const LinkedText = styled(Default)`
  text-decoration: underline;
  cursor: pointer;
`;

export { Font, LinkedText };

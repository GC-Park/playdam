import styled from 'styled-components';
import { FontSize, propToValue } from '../../../utils/styles';
import { theme } from '../../../themes';

export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge';

export interface TextProps {
  variant?: TextVariant;
  color?: string;
  fontSize?: FontSize;
  fontWeight?: string;
  lineHeight?: string;
  textDecoration?: string;
  letterSpacing?: string;
  display?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  whiteSpace?: string;
  wordBreak?: string;
  children?: React.ReactNode;
}

const variants = {
  extraSmall: {
    fontSize: 'extraSmall',
    lineHeight: '16px',
    letterSpacing: '0.4px',
  },
  small: {
    fontSize: 'small',
    lineHeight: '20px',
    letterSpacing: '0.4px',
  },
  medium: {
    fontSize: 'medium',
    lineHeight: '24px',
    letterSpacing: '0.4px',
  },
  mediumLarge: {
    fontSize: 'mediumLarge',
    lineHeight: '24px',
    letterSpacing: '0.4px',
  },
  large: {
    fontSize: 'large',
    lineHeight: '28px',
    letterSpacing: '0.4px',
  },
  extraLarge: {
    fontSize: 'extraLarge',
    lineHeight: '32px',
    letterSpacing: '0.4px',
  },
};

const Text = styled.span<TextProps>`
  ${({ variant, fontSize, letterSpacing, lineHeight }) => {
    if (variant && variants[variant]) {
      const styles = [];
      const fontSizeStyle = propToValue(
        'font-size',
        variants[variant].fontSize,
        theme,
      );
      const letterSpacingStyle = propToValue(
        'letter-spacing',
        variants[variant].letterSpacing,
        theme,
      );
      const lineHeightStyle = propToValue(
        'line-height',
        variants[variant].lineHeight,
        theme,
      );

      // 결과가 undefined가 아닌 경우에만 styles 배열에 추가합니다.
      fontSizeStyle && styles.push(fontSizeStyle);
      letterSpacingStyle && styles.push(letterSpacingStyle);
      lineHeightStyle && styles.push(lineHeightStyle);

      return styles.join('\n');
    }
  }}
  ${({ color }) => propToValue('color', color, theme)};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ overflowX }) => overflowX && `overflow-x: ${overflowX};`}
  ${({ overflowY }) => overflowY && `overflow-y: ${overflowY};`}
  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}
  ${({ wordBreak }) => wordBreak && `word-break: ${wordBreak};`}
`;

export default Text;

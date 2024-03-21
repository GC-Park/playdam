import { theme } from "../themes";

export type AppTheme = typeof theme;

type FontSizeThemeKeys = keyof typeof theme.fontSizes;

export type FontSize = FontSizeThemeKeys | (string & {});

//원하는 형태
//propToValue('font-size', '32px', theme) => font-size: 32px 
//propToValue('font-size', 'extraLarge', theme) => font-size: 32px
export function propToValue<T>(key: string, prop: T, theme?: AppTheme) {
  if (key === undefined) return undefined;
  return `${key} : ${themeToValue(key, prop, theme)};`
}

function themeToValue<T>(key: string, prop?: T, theme?: AppTheme) {
  if (theme && prop && key === 'font-size') {
    // fontSizes에 직접 액세스하여 값을 얻습니다.
    const fontSizeValue = theme.fontSizes[prop as FontSizeThemeKeys];
    if (fontSizeValue) {
      return fontSizeValue;
    }
  }
  if (prop === undefined) return;
  return prop;
}
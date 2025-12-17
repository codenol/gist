/**
 * Token Parser для работы с design tokens
 * 
 * Этот модуль предоставляет утилиты для загрузки, парсинга и использования
 * design tokens из JSON файла в формате W3C Design Tokens.
 * 
 * @example
 * ```typescript
 * import { loadDesignTokens, getTokenValue } from './tokenParser';
 * 
 * const tokens = loadDesignTokens();
 * const spacingValue = getTokenValue('spacing.primitives.200'); // "8px"
 * const semanticSpacing = getTokenValue('spacing.semantic.interactive.padding-x'); // "16px"
 * ```
 */

import designTokens from './design-tokens.json';

/**
 * Тип для design tokens структуры
 */
export type DesignTokens = typeof designTokens;

/**
 * Загружает и возвращает design tokens из JSON файла
 * 
 * @returns Объект с токенами
 * @example
 * ```typescript
 * const tokens = loadDesignTokens();
 * console.log(tokens.spacing.primitives['50']); 
 * // { value: "2px", type: "spacing", $description: "...", ... }
 * ```
 */
export function loadDesignTokens(): DesignTokens {
  return designTokens;
}

/**
 * Разрешает ссылки между токенами (например, {spacing.primitives.400})
 * 
 * @param tokenPath - путь к токену в формате "spacing.primitives.400" или "spacing.semantic.interactive.padding-x"
 * @returns Разрешённое значение токена (например, "16px", "#00BEC8")
 * @throws {Error} Если токен не найден
 * 
 * @example
 * ```typescript
 * resolveTokenReference("spacing.primitives.400"); // "16px"
 * resolveTokenReference("spacing.semantic.interactive.padding-x"); 
 * // "16px" (через ссылку на spacing.primitives.400)
 * ```
 */
export function resolveTokenReference(tokenPath: string): string {
  const parts = tokenPath.split('.');
  let current: any = designTokens;

  // Проходим по пути к токену
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      throw new Error(`Token not found: ${tokenPath}`);
    }
  }

  // Если это объект токена, возвращаем его value
  if (current && typeof current === 'object' && 'value' in current) {
    const value = current.value as string;
    
    // Проверяем, является ли значение ссылкой на другой токен
    // Формат ссылки: {spacing.primitives.400}
    if (value.startsWith('{') && value.endsWith('}')) {
      const referencedPath = value.slice(1, -1); // Убираем { и }
      return resolveTokenReference(referencedPath); // Рекурсивно разрешаем ссылку
    }
    
    return value;
  }

  throw new Error(`Token value not found: ${tokenPath}`);
}

/**
 * Получает финальное значение токена (разрешает все ссылки)
 * 
 * @param tokenPath - путь к токену в формате "spacing.primitives.400" или "spacing.semantic.interactive.padding-x"
 * @returns Финальное значение токена (например, "16px", "#00BEC8", "400")
 * @throws {Error} Если токен не найден
 * 
 * @example
 * ```typescript
 * getTokenValue("spacing.primitives.400"); // "16px"
 * getTokenValue("spacing.semantic.interactive.padding-x"); // "16px" (через ссылку)
 * getTokenValue("color.primitives.accent.500"); // "#00BEC8"
 * getTokenValue("typography.fontWeight.regular"); // "400"
 * ```
 */
export function getTokenValue(tokenPath: string): string {
  return resolveTokenReference(tokenPath);
}

/**
 * Получает полную информацию о токене (value, type, description и т.д.)
 * 
 * @param tokenPath - путь к токену
 * @returns Объект с информацией о токене
 * @throws {Error} Если токен не найден
 * 
 * @example
 * ```typescript
 * const tokenInfo = getTokenInfo("spacing.primitives.400");
 * // { value: "16px", type: "spacing", $description: "...", ... }
 * ```
 */
export function getTokenInfo(tokenPath: string): any {
  const parts = tokenPath.split('.');
  let current: any = designTokens;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      throw new Error(`Token not found: ${tokenPath}`);
    }
  }

  if (current && typeof current === 'object' && 'value' in current) {
    return current;
  }

  throw new Error(`Token not found: ${tokenPath}`);
}

/**
 * Генерирует CSS custom properties из JSON токенов
 * 
 * @returns Строка с CSS переменными
 * @example
 * ```typescript
 * const css = generateCSSCustomProperties();
 * // :root {
 * //   --spacing-50: 2px;
 * //   --spacing-100: 4px;
 * //   ...
 * // }
 * ```
 */
export function generateCSSCustomProperties(): string {
  let css = '/**\n';
  css += ' * Design Tokens - Идеальная система токенов\n';
  css += ' * Автоматически сгенерировано из design-tokens.json\n';
  css += ' * \n';
  css += ' * ВАЖНО: Не редактировать вручную! Изменения вносятся в JSON файл.\n';
  css += ' */\n\n';
  css += ':root {\n';

  // Генерируем CSS переменные для spacing примитивов
  css += '  /* ============================================\n';
  css += '     SPACING TOKENS - Примитивы\n';
  css += '     ============================================ */\n\n';
  
  const spacingPrimitives = designTokens.spacing.primitives;
  for (const [key, token] of Object.entries(spacingPrimitives)) {
    const value = getTokenValue(`spacing.primitives.${key}`);
    const description = (token as any).$description || '';
    css += `  /**\n`;
    css += `   * ${description}\n`;
    css += `   */\n`;
    css += `  --spacing-${key}: ${value};\n\n`;
  }

  // Генерируем CSS переменные для spacing семантических
  css += '  /* ============================================\n';
  css += '     SPACING TOKENS - Семантические\n';
  css += '     ============================================ */\n\n';
  
  const spacingSemantic = designTokens.spacing.semantic;
  const generateSemanticSpacing = (obj: any, prefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object' && 'value' in value) {
        const token = value as any;
        const tokenPath = `spacing.semantic.${prefix}${key}`;
        const resolvedValue = getTokenValue(tokenPath);
        const description = token.$description || '';
        const cssKey = prefix ? `${prefix.replace('.', '-')}-${key}` : key;
        css += `  /**\n`;
        css += `   * ${description}\n`;
        css += `   */\n`;
        css += `  --spacing-${cssKey.replace(/\./g, '-')}: ${resolvedValue};\n\n`;
      } else if (value && typeof value === 'object') {
        generateSemanticSpacing(value, `${prefix}${key}.`);
      }
    }
  };
  generateSemanticSpacing(spacingSemantic, '');

  // Генерируем CSS переменные для radius примитивов
  css += '  /* ============================================\n';
  css += '     RADIUS TOKENS - Примитивы\n';
  css += '     ============================================ */\n\n';
  
  const radiusPrimitives = designTokens.radius.primitives;
  for (const [key, token] of Object.entries(radiusPrimitives)) {
    const value = getTokenValue(`radius.primitives.${key}`);
    const description = (token as any).$description || '';
    css += `  /**\n`;
    css += `   * ${description}\n`;
    css += `   */\n`;
    css += `  --radius-${key}: ${value};\n\n`;
  }

  // Генерируем CSS переменные для radius семантических
  css += '  /* ============================================\n';
  css += '     RADIUS TOKENS - Семантические\n';
  css += '     ============================================ */\n\n';
  
  const radiusSemantic = designTokens.radius.semantic;
  const generateSemanticRadius = (obj: any, prefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object' && 'value' in value) {
        const token = value as any;
        const tokenPath = `radius.semantic.${prefix}${key}`;
        const resolvedValue = getTokenValue(tokenPath);
        const description = token.$description || '';
        const cssKey = prefix ? `${prefix.replace('.', '-')}-${key}` : key;
        css += `  /**\n`;
        css += `   * ${description}\n`;
        css += `   */\n`;
        css += `  --radius-${cssKey.replace(/\./g, '-')}: ${resolvedValue};\n\n`;
      } else if (value && typeof value === 'object') {
        generateSemanticRadius(value, `${prefix}${key}.`);
      }
    }
  };
  generateSemanticRadius(radiusSemantic, '');

  // Генерируем CSS переменные для color примитивов
  css += '  /* ============================================\n';
  css += '     COLOR TOKENS - Примитивы\n';
  css += '     ============================================ */\n\n';
  
  const generateColorPrimitives = (obj: any, prefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object' && 'value' in value) {
        const token = value as any;
        const tokenPath = `color.primitives.${prefix}${key}`;
        const resolvedValue = getTokenValue(tokenPath);
        const description = token.$description || '';
        const cssKey = prefix ? `${prefix}-${key}` : key;
        css += `  /**\n`;
        css += `   * ${description}\n`;
        css += `   */\n`;
        css += `  --color-${cssKey.replace(/\./g, '-')}: ${resolvedValue};\n\n`;
      } else if (value && typeof value === 'object') {
        generateColorPrimitives(value, `${prefix}${key}.`);
      }
    }
  };
  generateColorPrimitives(designTokens.color.primitives, '');

  // Генерируем CSS переменные для color семантических
  css += '  /* ============================================\n';
  css += '     COLOR TOKENS - Семантические\n';
  css += '     ============================================ */\n\n';
  
  const colorSemantic = designTokens.color.semantic;
  const generateSemanticColor = (obj: any, prefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object' && 'value' in value) {
        const token = value as any;
        const tokenPath = `color.semantic.${prefix}${key}`;
        const resolvedValue = getTokenValue(tokenPath);
        const description = token.$description || '';
        const cssKey = prefix ? `${prefix.replace('.', '-')}-${key}` : key;
        css += `  /**\n`;
        css += `   * ${description}\n`;
        css += `   */\n`;
        css += `  --color-${cssKey.replace(/\./g, '-')}: ${resolvedValue};\n\n`;
      } else if (value && typeof value === 'object') {
        generateSemanticColor(value, `${prefix}${key}.`);
      }
    }
  };
  generateSemanticColor(colorSemantic, '');

  // Генерируем CSS переменные для typography
  css += '  /* ============================================\n';
  css += '     TYPOGRAPHY TOKENS\n';
  css += '     ============================================ */\n\n';
  
  // fontSize
  const fontSize = designTokens.typography.fontSize;
  for (const [key, token] of Object.entries(fontSize)) {
    const value = getTokenValue(`typography.fontSize.${key}`);
    const description = (token as any).$description || '';
    css += `  /**\n`;
    css += `   * ${description}\n`;
    css += `   */\n`;
    css += `  --font-size-${key}: ${value};\n\n`;
  }

  // fontWeight
  const fontWeight = designTokens.typography.fontWeight;
  for (const [key, token] of Object.entries(fontWeight)) {
    const value = getTokenValue(`typography.fontWeight.${key}`);
    const description = (token as any).$description || '';
    css += `  /**\n`;
    css += `   * ${description}\n`;
    css += `   */\n`;
    css += `  --font-weight-${key}: ${value};\n\n`;
  }

  // lineHeight
  const lineHeight = designTokens.typography.lineHeight;
  for (const [key, token] of Object.entries(lineHeight)) {
    const value = getTokenValue(`typography.lineHeight.${key}`);
    const description = (token as any).$description || '';
    css += `  /**\n`;
    css += `   * ${description}\n`;
    css += `   */\n`;
    css += `  --line-height-${key}: ${value};\n\n`;
  }

  css += '}\n';
  return css;
}

/**
 * Экспортирует все токены в удобном формате для использования в коде
 */
export const tokens = {
  spacing: {
    primitives: {
      '50': getTokenValue('spacing.primitives.50'),
      '100': getTokenValue('spacing.primitives.100'),
      '200': getTokenValue('spacing.primitives.200'),
      '300': getTokenValue('spacing.primitives.300'),
      '400': getTokenValue('spacing.primitives.400'),
      '500': getTokenValue('spacing.primitives.500'),
      '600': getTokenValue('spacing.primitives.600'),
      '700': getTokenValue('spacing.primitives.700'),
    },
    semantic: {
      interactive: {
        paddingX: getTokenValue('spacing.semantic.interactive.padding-x'),
        paddingY: getTokenValue('spacing.semantic.interactive.padding-y'),
        gap: getTokenValue('spacing.semantic.interactive.gap'),
      },
      field: {
        paddingX: getTokenValue('spacing.semantic.field.padding-x'),
        paddingY: getTokenValue('spacing.semantic.field.padding-y'),
      },
      container: {
        padding: getTokenValue('spacing.semantic.container.padding'),
        gap: getTokenValue('spacing.semantic.container.gap'),
      },
    },
  },
  radius: {
    primitives: {
      xs: getTokenValue('radius.primitives.xs'),
      s: getTokenValue('radius.primitives.s'),
      m: getTokenValue('radius.primitives.m'),
      l: getTokenValue('radius.primitives.l'),
      xl: getTokenValue('radius.primitives.xl'),
      full: getTokenValue('radius.primitives.full'),
    },
    semantic: {
      interactive: {
        default: getTokenValue('radius.semantic.interactive.default'),
      },
      field: {
        default: getTokenValue('radius.semantic.field.default'),
      },
      surface: {
        default: getTokenValue('radius.semantic.surface.default'),
        large: getTokenValue('radius.semantic.surface.large'),
      },
    },
  },
  color: {
    primitives: {
      accent: {
        '500': getTokenValue('color.primitives.accent.500'),
        '600': getTokenValue('color.primitives.accent.600'),
        '700': getTokenValue('color.primitives.accent.700'),
      },
      neutral: {
        '50': getTokenValue('color.primitives.neutral.50'),
        '100': getTokenValue('color.primitives.neutral.100'),
        '300': getTokenValue('color.primitives.neutral.300'),
        '600': getTokenValue('color.primitives.neutral.600'),
        '900': getTokenValue('color.primitives.neutral.900'),
        white: getTokenValue('color.primitives.neutral.white'),
      },
      error: {
        '500': getTokenValue('color.primitives.error.500'),
        '600': getTokenValue('color.primitives.error.600'),
      },
    },
    semantic: {
      interactive: {
        accent: {
          default: getTokenValue('color.semantic.interactive.accent.default'),
          hover: getTokenValue('color.semantic.interactive.accent.hover'),
          press: getTokenValue('color.semantic.interactive.accent.press'),
          focusRing: getTokenValue('color.semantic.interactive.accent.focus-ring'),
          disabled: getTokenValue('color.semantic.interactive.accent.disabled'),
        },
        danger: {
          default: getTokenValue('color.semantic.interactive.danger.default'),
          hover: getTokenValue('color.semantic.interactive.danger.hover'),
        },
      },
      surface: {
        interactive: {
          default: getTokenValue('color.semantic.surface.interactive.default'),
          hover: getTokenValue('color.semantic.surface.interactive.hover'),
          disabled: getTokenValue('color.semantic.surface.interactive.disabled'),
        },
      },
      border: {
        interactive: {
          default: getTokenValue('color.semantic.border.interactive.default'),
          hover: getTokenValue('color.semantic.border.interactive.hover'),
          focus: getTokenValue('color.semantic.border.interactive.focus'),
          error: getTokenValue('color.semantic.border.interactive.error'),
        },
      },
      text: {
        onAccent: getTokenValue('color.semantic.text.on-accent'),
        onSurface: getTokenValue('color.semantic.text.on-surface'),
        onSurfaceSecondary: getTokenValue('color.semantic.text.on-surface-secondary'),
        onSurfaceDisabled: getTokenValue('color.semantic.text.on-surface-disabled'),
      },
    },
  },
  typography: {
    fontSize: {
      xs: getTokenValue('typography.fontSize.xs'),
      s: getTokenValue('typography.fontSize.s'),
      m: getTokenValue('typography.fontSize.m'),
      l: getTokenValue('typography.fontSize.l'),
      xl: getTokenValue('typography.fontSize.xl'),
      '2xl': getTokenValue('typography.fontSize.2xl'),
      '3xl': getTokenValue('typography.fontSize.3xl'),
    },
    fontWeight: {
      regular: getTokenValue('typography.fontWeight.regular'),
      medium: getTokenValue('typography.fontWeight.medium'),
      semibold: getTokenValue('typography.fontWeight.semibold'),
      bold: getTokenValue('typography.fontWeight.bold'),
    },
    lineHeight: {
      tight: getTokenValue('typography.lineHeight.tight'),
      normal: getTokenValue('typography.lineHeight.normal'),
      relaxed: getTokenValue('typography.lineHeight.relaxed'),
    },
  },
};

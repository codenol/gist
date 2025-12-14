import React from 'react';
import { loadDesignTokens, getTokenValue, getTokenInfo } from '../../../design-tokens/tokenParser';

export default {
  title: 'Будущее/Design System/All Tokens',
  parameters: {
    docs: {
      description: {
        component: 'Полный справочник всех дизайн-токенов с таблицами значений, CSS переменных и описаний.',
      },
    },
  },
};

const tokens = loadDesignTokens();

// Вспомогательная функция для получения CSS переменной из пути токена
const getCSSVariable = (tokenPath: string): string => {
  const parts = tokenPath.split('.');
  const lastPart = parts[parts.length - 1];
  
  // Преобразуем путь в CSS переменную
  // spacing.primitives.200 -> --spacing-primitive-200
  // spacing.semantic.interactive.padding-x -> --spacing-semantic-interactive-padding-x
  let cssVar = '--';
  for (let i = 0; i < parts.length; i++) {
    if (i === 0) {
      cssVar += parts[i];
    } else {
      cssVar += '-' + parts[i].replace(/_/g, '-');
    }
  }
  
  return cssVar;
};

// Компонент для отображения таблицы токенов
const TokenTable = ({ title, tokens, tokenPrefix }: { title: string; tokens: any; tokenPrefix: string }) => {
  const tokenEntries: Array<{ path: string; name: string; value: string; description: string; cssVar: string }> = [];
  
  const collectTokens = (obj: any, prefix: string, namePrefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('$')) continue; // Пропускаем мета-поля
      
      const currentPath = prefix ? `${prefix}.${key}` : key;
      const currentName = namePrefix ? `${namePrefix}.${key}` : key;
      
      if (value && typeof value === 'object' && 'value' in value) {
        const token = value as any;
        try {
          const resolvedValue = getTokenValue(`${tokenPrefix}.${currentPath}`);
          tokenEntries.push({
            path: `${tokenPrefix}.${currentPath}`,
            name: currentName,
            value: resolvedValue,
            description: token.$description || token.$comment || '',
            cssVar: getCSSVariable(`${tokenPrefix}.${currentPath}`),
          });
        } catch (e) {
          // Игнорируем ошибки
        }
      } else if (value && typeof value === 'object') {
        collectTokens(value, currentPath, currentName);
      }
    }
  };
  
  collectTokens(tokens, '', '');
  
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '1rem', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)' }}>
        {title}
      </h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          backgroundColor: 'var(--color-semantic-surface-interactive-default)',
          borderRadius: 'var(--radius-semantic-surface-default)',
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: 'var(--color-primitive-neutral-100)',
              borderBottom: '2px solid var(--color-primitive-neutral-300)',
            }}>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Токен</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>CSS Переменная</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Значение</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Описание</th>
            </tr>
          </thead>
          <tbody>
            {tokenEntries.map((token, index) => (
              <tr 
                key={token.path}
                style={{ 
                  borderBottom: '1px solid var(--color-primitive-neutral-300)',
                  backgroundColor: index % 2 === 0 
                    ? 'var(--color-semantic-surface-interactive-default)' 
                    : 'var(--color-primitive-neutral-50)',
                }}
              >
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-semantic-text-on-surface)',
                }}>
                  {token.name}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-primitive-accent-600)',
                }}>
                  {token.cssVar}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-semantic-text-on-surface)',
                }}>
                  {token.value}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-semantic-text-on-surface-secondary)',
                }}>
                  {token.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Spacing Primitives
export const SpacingPrimitives = () => (
  <TokenTable 
    title="Spacing Primitives" 
    tokens={tokens.spacing.primitives} 
    tokenPrefix="spacing.primitives"
  />
);

// Spacing Semantic
export const SpacingSemantic = () => (
  <TokenTable 
    title="Spacing Semantic" 
    tokens={tokens.spacing.semantic} 
    tokenPrefix="spacing.semantic"
  />
);

// Radius Primitives
export const RadiusPrimitives = () => (
  <TokenTable 
    title="Radius Primitives" 
    tokens={tokens.radius.primitives} 
    tokenPrefix="radius.primitives"
  />
);

// Radius Semantic
export const RadiusSemantic = () => (
  <TokenTable 
    title="Radius Semantic" 
    tokens={tokens.radius.semantic} 
    tokenPrefix="radius.semantic"
  />
);

// Typography Font Size
export const TypographyFontSize = () => (
  <TokenTable 
    title="Typography Font Size" 
    tokens={tokens.typography.fontSize} 
    tokenPrefix="typography.fontSize"
  />
);

// Typography Font Weight
export const TypographyFontWeight = () => (
  <TokenTable 
    title="Typography Font Weight" 
    tokens={tokens.typography.fontWeight} 
    tokenPrefix="typography.fontWeight"
  />
);

// Typography Line Height
export const TypographyLineHeight = () => (
  <TokenTable 
    title="Typography Line Height" 
    tokens={tokens.typography.lineHeight} 
    tokenPrefix="typography.lineHeight"
  />
);

// Color Primitives
export const ColorPrimitives = () => {
  const colorEntries: Array<{ path: string; name: string; value: string; description: string; cssVar: string }> = [];
  
  const collectColorTokens = (obj: any, prefix: string, namePrefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('$')) continue;
      
      const currentPath = prefix ? `${prefix}.${key}` : key;
      const currentName = namePrefix ? `${namePrefix}.${key}` : key;
      
      if (value && typeof value === 'object' && 'value' in value) {
        const token = value as any;
        try {
          const resolvedValue = getTokenValue(`color.primitives.${currentPath}`);
          colorEntries.push({
            path: `color.primitives.${currentPath}`,
            name: currentName,
            value: resolvedValue,
            description: token.$description || token.$comment || '',
            cssVar: getCSSVariable(`color.primitives.${currentPath}`),
          });
        } catch (e) {
          // Игнорируем ошибки
        }
      } else if (value && typeof value === 'object') {
        collectColorTokens(value, currentPath, currentName);
      }
    }
  };
  
  collectColorTokens(tokens.color.primitives, '', '');
  
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '1rem', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)' }}>
        Color Primitives
      </h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          backgroundColor: 'var(--color-semantic-surface-interactive-default)',
          borderRadius: 'var(--radius-semantic-surface-default)',
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: 'var(--color-primitive-neutral-100)',
              borderBottom: '2px solid var(--color-primitive-neutral-300)',
            }}>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Токен</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>CSS Переменная</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Значение</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Цвет</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Описание</th>
            </tr>
          </thead>
          <tbody>
            {colorEntries.map((token, index) => (
              <tr 
                key={token.path}
                style={{ 
                  borderBottom: '1px solid var(--color-primitive-neutral-300)',
                  backgroundColor: index % 2 === 0 
                    ? 'var(--color-semantic-surface-interactive-default)' 
                    : 'var(--color-primitive-neutral-50)',
                }}
              >
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-semantic-text-on-surface)',
                }}>
                  {token.name}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-primitive-accent-600)',
                }}>
                  {token.cssVar}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-semantic-text-on-surface)',
                }}>
                  {token.value}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: token.value,
                    border: '1px solid var(--color-primitive-neutral-300)',
                    borderRadius: 'var(--radius-primitive-s)',
                  }} />
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-semantic-text-on-surface-secondary)',
                }}>
                  {token.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Color Semantic
export const ColorSemantic = () => {
  const colorEntries: Array<{ path: string; name: string; value: string; description: string; cssVar: string }> = [];
  
  const collectColorTokens = (obj: any, prefix: string, namePrefix: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('$')) continue;
      
      const currentPath = prefix ? `${prefix}.${key}` : key;
      const currentName = namePrefix ? `${namePrefix}.${key}` : key;
      
      if (value && typeof value === 'object' && 'value' in value) {
        const token = value as any;
        try {
          const resolvedValue = getTokenValue(`color.semantic.${currentPath}`);
          colorEntries.push({
            path: `color.semantic.${currentPath}`,
            name: currentName,
            value: resolvedValue,
            description: token.$description || token.$comment || '',
            cssVar: getCSSVariable(`color.semantic.${currentPath}`),
          });
        } catch (e) {
          // Игнорируем ошибки
        }
      } else if (value && typeof value === 'object') {
        collectColorTokens(value, currentPath, currentName);
      }
    }
  };
  
  collectColorTokens(tokens.color.semantic, '', '');
  
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '1rem', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-semibold)' }}>
        Color Semantic
      </h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          backgroundColor: 'var(--color-semantic-surface-interactive-default)',
          borderRadius: 'var(--radius-semantic-surface-default)',
        }}>
          <thead>
            <tr style={{ 
              backgroundColor: 'var(--color-primitive-neutral-100)',
              borderBottom: '2px solid var(--color-primitive-neutral-300)',
            }}>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Токен</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>CSS Переменная</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Значение</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Цвет</th>
              <th style={{ 
                padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                textAlign: 'left',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-m)',
              }}>Описание</th>
            </tr>
          </thead>
          <tbody>
            {colorEntries.map((token, index) => (
              <tr 
                key={token.path}
                style={{ 
                  borderBottom: '1px solid var(--color-primitive-neutral-300)',
                  backgroundColor: index % 2 === 0 
                    ? 'var(--color-semantic-surface-interactive-default)' 
                    : 'var(--color-primitive-neutral-50)',
                }}
              >
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-semantic-text-on-surface)',
                }}>
                  {token.name}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-primitive-accent-600)',
                }}>
                  {token.cssVar}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-size-s)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-semantic-text-on-surface)',
                }}>
                  {token.value}
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: token.value,
                    border: '1px solid var(--color-primitive-neutral-300)',
                    borderRadius: 'var(--radius-primitive-s)',
                  }} />
                </td>
                <td style={{ 
                  padding: 'var(--spacing-semantic-field-padding-y) var(--spacing-semantic-field-padding-x)',
                  fontSize: 'var(--font-size-s)',
                  color: 'var(--color-semantic-text-on-surface-secondary)',
                }}>
                  {token.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


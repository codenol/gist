import React from 'react';
import { Grid } from 'uikit-main/Grid';
import '../design-system.scss';
import 'uikit-main/Grid/grid.scss';

/**
 * Компонент: Grid
 * 
 * Простой компонент сетки для списков.
 */

export default {
    title: 'Настоящее/Grid',
    component: Grid,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Простой компонент сетки для списков.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <Grid>
                <div style={{ padding: '20px', border: '1px solid #ccc', margin: '5px' }}>Элемент 1</div>
                <div style={{ padding: '20px', border: '1px solid #ccc', margin: '5px' }}>Элемент 2</div>
                <div style={{ padding: '20px', border: '1px solid #ccc', margin: '5px' }}>Элемент 3</div>
                <div style={{ padding: '20px', border: '1px solid #ccc', margin: '5px' }}>Элемент 4</div>
            </Grid>
        </div>
    )
};


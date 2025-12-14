import React, { useState } from 'react';
import CustomPaginator from 'uikit-main/Paginator';
import '../design-system.scss';
import 'uikit-main/Paginator/paginator.scss';

/**
 * Компонент: Paginator
 * 
 * Обёртка над Paginator из PrimeReact с кастомными стилями.
 */

export default {
    title: 'Настоящее/Paginator',
    component: CustomPaginator,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Обёртка над Paginator из PrimeReact с кастомными стилями.'
            }
        }
    },
    tags: ['autodocs'],
};

export const Default = {
    render: () => {
        const [first, setFirst] = useState(0);
        const [rows, setRows] = useState(10);
        const totalRecords = 100;

        return (
            <div style={{ padding: '20px' }}>
                <CustomPaginator
                    first={first}
                    rows={rows}
                    totalRecords={totalRecords}
                    onPageChange={(e) => {
                        setFirst(e.first);
                        setRows(e.rows);
                    }}
                />
            </div>
        );
    }
};

export const WithRowsPerPageOptions = {
    render: () => {
        const [first, setFirst] = useState(0);
        const [rows, setRows] = useState(10);
        const totalRecords = 100;

        return (
            <div style={{ padding: '20px' }}>
                <CustomPaginator
                    first={first}
                    rows={rows}
                    totalRecords={totalRecords}
                    rowsPerPageOptions={[10, 20, 50]}
                    onPageChange={(e) => {
                        setFirst(e.first);
                        setRows(e.rows);
                    }}
                />
            </div>
        );
    }
};


import React, { useState } from 'react';
import { Tree } from 'uikit-main/Tree';
import type { TreeNode } from 'primereact/treenode';
import '../design-system.scss';
import 'uikit-main/Tree/tree.scss';

/**
 * Компонент: Tree
 * 
 * Обёртка над Tree из PrimeReact с расширенной фильтрацией
 * и поддержкой отображаемых нод.
 */

export default {
    title: 'Настоящее/Tree',
    component: Tree,
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Обёртка над Tree из PrimeReact с расширенной фильтрацией и поддержкой отображаемых нод.'
            }
        }
    },
    tags: ['autodocs'],
};

const treeData: TreeNode[] = [
    {
        key: '0',
        label: 'Корневая папка',
        children: [
            {
                key: '0-0',
                label: 'Папка 1',
                children: [
                    { key: '0-0-0', label: 'Файл 1.1' },
                    { key: '0-0-1', label: 'Файл 1.2' },
                ],
            },
            {
                key: '0-1',
                label: 'Папка 2',
                children: [
                    { key: '0-1-0', label: 'Файл 2.1' },
                    { key: '0-1-1', label: 'Файл 2.2' },
                ],
            },
        ],
    },
];

export const Default = {
    render: () => {
        const [selectedKeys, setSelectedKeys] = useState({});
        return (
            <div style={{ padding: '20px', maxWidth: '400px' }}>
                <Tree
                    value={treeData}
                    selectionMode="checkbox"
                    selectionKeys={selectedKeys}
                    onSelectionChange={(e) => setSelectedKeys(e.value)}
                />
            </div>
        );
    }
};

export const WithFilter = {
    render: () => {
        const [selectedKeys, setSelectedKeys] = useState({});
        return (
            <div style={{ padding: '20px', maxWidth: '400px' }}>
                <Tree
                    value={treeData}
                    selectionMode="checkbox"
                    selectionKeys={selectedKeys}
                    onSelectionChange={(e) => setSelectedKeys(e.value)}
                    filter={true}
                    filterPlaceholder="Поиск..."
                />
            </div>
        );
    }
};

export const SingleSelection = {
    render: () => {
        const [selectedKeys, setSelectedKeys] = useState(null);
        return (
            <div style={{ padding: '20px', maxWidth: '400px' }}>
                <Tree
                    value={treeData}
                    selectionMode="single"
                    selectionKeys={selectedKeys}
                    onSelectionChange={(e) => setSelectedKeys(e.value)}
                />
            </div>
        );
    }
};


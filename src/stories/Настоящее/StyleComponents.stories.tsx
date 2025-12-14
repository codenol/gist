import React from 'react';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber } from 'primereact/inputnumber';
import { InputSwitch } from 'primereact/inputswitch';
import { Panel } from 'primereact/panel';
import { Password } from 'primereact/password';
import { RadioButton } from 'primereact/radiobutton';
import { Slider } from 'primereact/slider';
import { Steps } from 'primereact/steps';
import { TabView, TabPanel } from 'primereact/tabview';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import '../design-system.scss';

// Импорты стилей
import 'uikit-main/Badge/badge.scss';
import 'uikit-main/Button/button.scss';
import 'uikit-main/Calendar/calendar.scss';
import 'uikit-main/Card/card.scss';
import 'uikit-main/Divider/divider.scss';
import 'uikit-main/FileUpload/index.scss';
import 'uikit-main/InputNumber/inputNumber.scss';
import 'uikit-main/InputSwitch/index.scss';
import 'uikit-main/Panel/panel.scss';
import 'uikit-main/Password/password.scss';
import 'uikit-main/RadioButton/radioButton.scss';
import 'uikit-main/Slider/slider.scss';
import 'uikit-main/Steps/steps.scss';
import 'uikit-main/TabView/tabview.scss';
import 'uikit-main/TreeTable/treeTable.scss';

/**
 * Стилевые компоненты UIKit
 * 
 * Эти компоненты предоставляют только стили для компонентов PrimeReact.
 */

export default {
    title: 'Настоящее/Style Components',
    parameters: {
        viewMode: 'docs',
        docs: {
            description: {
                component: 'Стилевые компоненты UIKit - предоставляют только стили для компонентов PrimeReact.'
            }
        }
    },
    tags: ['autodocs'],
};

export const BadgeStyles = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>Badge Styles</h3>
            <Button label="Уведомления">
                <Badge value="5" />
            </Button>
        </div>
    )
};

export const ButtonStyles = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>Button Styles</h3>
            <Button label="Кнопка с стилями UIKit" />
        </div>
    )
};

export const CalendarStyles = {
    render: () => {
        const [date, setDate] = React.useState(null);
        return (
            <div style={{ padding: '20px' }}>
                <h3>Calendar Styles</h3>
                <Calendar value={date} onChange={(e) => setDate(e.value)} />
            </div>
        );
    }
};

export const CardStyles = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>Card Styles</h3>
            <Card title="Заголовок карточки">
                <p>Содержимое карточки с стилями UIKit</p>
            </Card>
        </div>
    )
};

export const DividerStyles = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>Divider Styles</h3>
            <p>Текст сверху</p>
            <Divider />
            <p>Текст снизу</p>
        </div>
    )
};

export const FileUploadStyles = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>FileUpload Styles</h3>
            <FileUpload mode="basic" />
        </div>
    )
};

export const InputNumberStyles = {
    render: () => {
        const [value, setValue] = React.useState(0);
        return (
            <div style={{ padding: '20px' }}>
                <h3>InputNumber Styles</h3>
                <InputNumber value={value} onValueChange={(e) => setValue(e.value)} />
            </div>
        );
    }
};

export const InputSwitchStyles = {
    render: () => {
        const [checked, setChecked] = React.useState(false);
        return (
            <div style={{ padding: '20px' }}>
                <h3>InputSwitch Styles</h3>
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
        );
    }
};

export const PanelStyles = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>Panel Styles</h3>
            <Panel header="Заголовок панели">
                <p>Содержимое панели с стилями UIKit</p>
            </Panel>
        </div>
    )
};

export const PasswordStyles = {
    render: () => {
        const [value, setValue] = React.useState('');
        return (
            <div style={{ padding: '20px' }}>
                <h3>Password Styles</h3>
                <Password value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        );
    }
};

export const RadioButtonStyles = {
    render: () => {
        const [selected, setSelected] = React.useState('option1');
        return (
            <div style={{ padding: '20px' }}>
                <h3>RadioButton Styles</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                        <RadioButton inputId="option1" name="option" value="option1" checked={selected === 'option1'} onChange={(e) => setSelected(e.value)} />
                        <label htmlFor="option1" style={{ marginLeft: '10px' }}>Опция 1</label>
                    </div>
                    <div>
                        <RadioButton inputId="option2" name="option" value="option2" checked={selected === 'option2'} onChange={(e) => setSelected(e.value)} />
                        <label htmlFor="option2" style={{ marginLeft: '10px' }}>Опция 2</label>
                    </div>
                </div>
            </div>
        );
    }
};

export const SliderStyles = {
    render: () => {
        const [value, setValue] = React.useState(50);
        return (
            <div style={{ padding: '20px' }}>
                <h3>Slider Styles</h3>
                <Slider value={value} onChange={(e) => setValue(e.value)} />
            </div>
        );
    }
};

export const StepsStyles = {
    render: () => {
        const [activeIndex, setActiveIndex] = React.useState(0);
        const items = [
            { label: 'Шаг 1' },
            { label: 'Шаг 2' },
            { label: 'Шаг 3' },
        ];
        return (
            <div style={{ padding: '20px' }}>
                <h3>Steps Styles</h3>
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} />
            </div>
        );
    }
};

export const TabViewStyles = {
    render: () => (
        <div style={{ padding: '20px' }}>
            <h3>TabView Styles</h3>
            <TabView>
                <TabPanel header="Вкладка 1">
                    <p>Содержимое первой вкладки</p>
                </TabPanel>
                <TabPanel header="Вкладка 2">
                    <p>Содержимое второй вкладки</p>
                </TabPanel>
            </TabView>
        </div>
    )
};

export const TreeTableStyles = {
    render: () => {
        const nodes = [
            {
                key: '0',
                data: { name: 'Корневая папка' },
                children: [
                    {
                        key: '0-0',
                        data: { name: 'Папка 1' },
                    },
                ],
            },
        ];
        return (
            <div style={{ padding: '20px' }}>
                <h3>TreeTable Styles</h3>
                <TreeTable value={nodes}>
                    <Column field="name" header="Название" expander />
                </TreeTable>
            </div>
        );
    }
};


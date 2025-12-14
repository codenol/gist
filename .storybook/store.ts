import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';

/**
 * Минимальный мок Redux store для Storybook
 * Использует простые stub reducers без зависимостей
 */
const settingsPageSlice = createSlice({
    name: 'settingsPage',
    initialState: {
        theme: 'light',
        layoutMode: 'standard',
        formatDate: false,
        visionStatus: false,
        overviewObjectId: '',
        menuExpandedItems: [],
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLayoutMode: (state, action) => {
            state.layoutMode = action.payload;
        },
        setFormatDate: (state, action) => {
            state.formatDate = action.payload;
        },
        setVisionStatus: (state, action) => {
            state.visionStatus = action.payload;
        },
        setIsOverviewObjectId: (state, action) => {
            state.overviewObjectId = action.payload;
        },
        setMenuExpandedItems: (state, action) => {
            state.menuExpandedItems = action.payload;
        },
    },
});

const rootReducer = combineReducers({
    settingsPage: settingsPageSlice.reducer,
    // Добавляем пустые reducers для остальных частей состояния
    tableFiltration: (state = {}) => state,
    alert: (state = {
        alertSettings: { alertOnAppStart: false },
        lastNotificationsFetchTimestamp: null,
        lastNotificationsViewedTimestamps: {},
        unviewedNotificationStatuses: {},
        alertTriggers: [],
    }) => state,
    tableSettings: (state = {}) => state,
    dynamicId: (state = {}) => state,
    metric: (state = {}) => state,
    user: (state = {
        policies: {},
        isAuthEnabled: false,
        authStatus: false,
        info: null,
        isUserSchemeLoaded: false,
        productType: 'genom',
    }) => state,
    console: (state = {}) => state,
    commands: (state = {}) => state,
    rolesTable: (state = {}) => state,
    diagnosticMetric: (state = {}) => state,
});

export const mockStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Отключаем для упрощения в Storybook
        }),
    preloadedState: {
        settingsPage: {
            theme: 'light',
            layoutMode: 'standard',
            formatDate: false,
            visionStatus: false,
            overviewObjectId: '',
            menuExpandedItems: [],
        },
    },
});

export type RootState = ReturnType<typeof mockStore.getState>;
export type AppDispatch = typeof mockStore.dispatch;


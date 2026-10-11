const STORAGE_KEY = 'catalinaXVConfirmaciones';
const SHEET_URL_KEY = 'catalinaXVSheetApiUrl';
const DEFAULT_SHEET_URL = 'https://script.google.com/macros/s/AKfycbx6j_jcZFHgqG1VQ-LDfiJ8HSXpJ__eAQHXKjzwa58UKNhQIBBLV4fIc3d2yF5hkkbz/exec';
const LEGACY_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxCO-RYlS0zyePyXC9mYuSBLq5JAqTUDeaIlW_qqX4rr6UWbpv0h2BxF96CJBsNg7EnCQ/exec';
let currentRenderedConfirmations = [];

function readConfirmations() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error('No se pudo leer la lista de confirmaciones:', error);
        return [];
    }
}

function renderTable(confirmations) {
    const tbody = document.getElementById('confirmationTableBody');
    const emptyMsg = document.getElementById('emptyListMsg');
    if (!tbody || !emptyMsg) return;

    currentRenderedConfirmations = Array.isArray(confirmations) ? confirmations : [];
    tbody.innerHTML = '';

    if (!currentRenderedConfirmations.length) {
        emptyMsg.style.display = 'block';
        return;
    }

    emptyMsg.style.display = 'none';

    currentRenderedConfirmations
        .slice()
        .reverse()
        .forEach((item) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.createdAt || '-'}</td>
                <td>${item.name || '-'}</td>
                <td>${item.attendance || '-'}</td>
                <td>${item.guests || '-'}</td>
                <td>${item.companionNames || '-'}</td>
                <td>${item.songSuggestion || '-'}</td>
                <td>${item.message || '-'}</td>
            `;
            tbody.appendChild(tr);
        });
}

async function readSharedConfirmations(sheetUrl) {
    if (!sheetUrl) return null;
    try {
        const separator = sheetUrl.includes('?') ? '&' : '?';
        const response = await fetch(`${sheetUrl}${separator}mode=list`, { method: 'GET' });
        if (!response.ok) return null;

        const data = await response.json();
        if (Array.isArray(data)) return data;
        if (Array.isArray(data.rows)) return data.rows;
        return null;
    } catch (error) {
        console.error('No se pudo leer la lista compartida:', error);
        return null;
    }
}

function saveSheetUrl(url) {
    const trimmed = (url || '').trim();
    if (!trimmed) {
        localStorage.removeItem(SHEET_URL_KEY);
        return;
    }
    localStorage.setItem(SHEET_URL_KEY, trimmed);
}

function getSheetUrl() {
    const saved = (localStorage.getItem(SHEET_URL_KEY) || '').trim();
    if (saved === LEGACY_SHEET_URL) {
        localStorage.setItem(SHEET_URL_KEY, DEFAULT_SHEET_URL);
        return DEFAULT_SHEET_URL;
    }
    return saved || DEFAULT_SHEET_URL;
}

function setSourceInfo(text) {
    const sourceInfo = document.getElementById('listSourceInfo');
    if (sourceInfo) sourceInfo.textContent = text;
}

function exportCsv() {
    const confirmations = currentRenderedConfirmations;
    if (!confirmations.length) return;

    const header = ['Fecha', 'Nombre', 'Asistencia', 'Personas', 'Acompanantes', 'Cancion', 'Mensaje'];
    const rows = confirmations.map((item) => [
        item.createdAt || '',
        item.name || '',
        item.attendance || '',
        item.guests || '',
        item.companionNames || '',
        item.songSuggestion || '',
        item.message || ''
    ]);

    const csv = [header, ...rows]
        .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'confirmaciones-catalina-xv.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function clearList() {
    const confirmation = window.confirm('¿Seguro que querés borrar todas las confirmaciones guardadas?');
    if (!confirmation) return;
    localStorage.removeItem(STORAGE_KEY);
    hydrateList();
}

document.addEventListener('DOMContentLoaded', () => {
    const sheetUrlInput = document.getElementById('sheetUrlInput');
    const saveSheetUrlBtn = document.getElementById('saveSheetUrlBtn');

    const exportBtn = document.getElementById('exportCsvBtn');
    const clearBtn = document.getElementById('clearListBtn');

    const existingSheetUrl = getSheetUrl();
    if (sheetUrlInput && existingSheetUrl) {
        sheetUrlInput.value = existingSheetUrl;
    }

    if (saveSheetUrlBtn && sheetUrlInput) {
        saveSheetUrlBtn.addEventListener('click', async () => {
            saveSheetUrl(sheetUrlInput.value);
            await hydrateList();
        });
    }

    if (exportBtn) exportBtn.addEventListener('click', exportCsv);
    if (clearBtn) clearBtn.addEventListener('click', clearList);

    hydrateList();
});

async function hydrateList() {
    const sheetUrl = getSheetUrl();
    const sharedList = await readSharedConfirmations(sheetUrl);

    if (sharedList !== null) {
        renderTable(sharedList);
        setSourceInfo('Fuente: hoja compartida de Google Sheets.');
        return;
    }

    const localList = readConfirmations();
    renderTable(localList);
    if (sheetUrl) {
        setSourceInfo('Fuente: lista local de respaldo (no se pudo leer la hoja compartida).');
    } else {
        setSourceInfo('Fuente: lista local de respaldo.');
    }
}
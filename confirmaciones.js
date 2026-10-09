const STORAGE_KEY = 'catalinaXVConfirmaciones';

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

function renderTable() {
    const tbody = document.getElementById('confirmationTableBody');
    const emptyMsg = document.getElementById('emptyListMsg');
    if (!tbody || !emptyMsg) return;

    const confirmations = readConfirmations();
    tbody.innerHTML = '';

    if (!confirmations.length) {
        emptyMsg.style.display = 'block';
        return;
    }

    emptyMsg.style.display = 'none';

    confirmations
        .slice()
        .reverse()
        .forEach((item) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.createdAt || '-'}</td>
                <td>${item.name || '-'}</td>
                <td>${item.attendance || '-'}</td>
                <td>${item.guests || '-'}</td>
                <td>${item.songSuggestion || '-'}</td>
                <td>${item.message || '-'}</td>
            `;
            tbody.appendChild(tr);
        });
}

function exportCsv() {
    const confirmations = readConfirmations();
    if (!confirmations.length) return;

    const header = ['Fecha', 'Nombre', 'Asistencia', 'Personas', 'Cancion', 'Mensaje'];
    const rows = confirmations.map((item) => [
        item.createdAt || '',
        item.name || '',
        item.attendance || '',
        item.guests || '',
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
    renderTable();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable();

    const exportBtn = document.getElementById('exportCsvBtn');
    const clearBtn = document.getElementById('clearListBtn');

    if (exportBtn) exportBtn.addEventListener('click', exportCsv);
    if (clearBtn) clearBtn.addEventListener('click', clearList);
});
function renderTechnologyStats(technologyStats, container) {
    const renderRow = ({os, newDevices, totalDevices}) => 
        `<div class="analytics-row">
            <span>${os}</span>
            <span>${newDevices}</span>
            <span>${totalDevices}</span>
        </div>`

    const rows = technologyStats.map(renderRow).join('');
    container.innerHTML = rows;
}
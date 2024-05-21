function renderTechnologyStats(technologyStats, container) {
    const renderRow = ({os, newDevices, totalDevices}) => 
        `<div class="analytics-row">
            <span class="analytics-box-text-span">${os}</span>
            <span class="analytics-box-number">${newDevices}</span>
            <span class="analytics-box-number">${totalDevices}</span>
        </div>`

    const rows = technologyStats.map(renderRow).join('');
    container.innerHTML = rows;
}
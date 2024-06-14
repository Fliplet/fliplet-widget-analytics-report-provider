const formatters = {
  number: (num) => (+num).toLocaleString(),
  round: (num) => formatters.number(Math.round(+num)),
  time: function (time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = Math.floor(time % 60);

    // with leading zeros
    return [hours, minutes, seconds].map((time) => `${time}`.padStart(2, "0")).join(":");
  },
};

const renderMetricRow = ({ title, prior, current }) =>
  `<div class="analytics-row">
        <span class="analytics-box-text-span">${title}</span>
        <span class="analytics-box-number-prior">${prior}</span>
        <span class="analytics-box-number">${current}</span>
    </div>`;

function renderAppMetrics({ container, appMetrics }) {
  const node = container.querySelector(".analytics-row-wrapper-app-metrics");
  if (!appMetrics) {
    node.innerHTML = '<div class="analytics-row">No data available</div>';
    return;
  }

  const appMetricTitles = {
    activeDevices: "Active devices",
    newDevices: "New devices",
    returningDevices: "Returning devices",
    interactions: "Interactions",
  };

  const entriesToRender = Object.entries(appMetricTitles).map(
    ([key, title]) => {
      const [prior, current] = appMetrics[key] || [0, 0];

      return { title, prior: formatters.number(prior), current: formatters.number(current) }; 
    }
  );

  node.innerHTML = entriesToRender.map(renderMetricRow).join("");
}

function renderSessionMetrics({ container, sessionMetrics }) {
  const node = container.querySelector(".analytics-row-wrapper-session-metrics");

  if (!sessionMetrics) {
    node.innerHTML = '<div class="analytics-row">No data available</div>';
    return;
  }

  const sessionMetricTitles = {
    sessions: "Sessions",
    screenViews: "Screen views",
    avgScreenPerSession: "Avg. screens per session",
    avgSessionDuration: "Avg. session duration",
  };

  const entriesToRender = Object.entries(sessionMetricTitles).map(
    ([key, title]) => {
      const [prior, current] = sessionMetrics[key] || [0, 0];

      const formatter = {
        avgSessionDuration: formatters.time,
        avgScreenPerSession: formatters.round,
      }[key] || formatters.number;

      return { title, prior: formatter(prior), current: formatter(current) };
    }
  );

  node.innerHTML = entriesToRender.map(renderMetricRow).join("");
}
function renderTechnologyStats(technologyStats, container) {
    if (!technologyStats || !technologyStats.length) {
        container.innerHTML = '<div class="analytics-row">No data available</div>';
        return;
    }

    const renderRow = ({os, newDevices, totalDevices}) => 
        `<div class="analytics-row">
            <span class="analytics-box-text-span">${os}</span>
            <span class="analytics-box-number">${newDevices}</span>
            <span class="analytics-box-number">${totalDevices}</span>
        </div>`

    const rows = technologyStats.map(renderRow).join('');
    container.innerHTML = rows;
}

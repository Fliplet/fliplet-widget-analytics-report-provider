// To run experiment
// To be removed once experiment is over
Fliplet.TagManager.init();

// Include your namespaced libraries
var AnalyticsReport = new Fliplet.Registry.get('comflipletanalytics-report:1.0:core');
var analyticsReports = [];

var widgetId = parseInt(Fliplet.Widget.getDefaultId(), 10);
var data = Fliplet.Widget.getData(widgetId) || {};
var element = $('.app-analytics-container');

window.addEventListener('resize', function() {
  if (!$('body').hasClass('freeze')) {
    Fliplet.Widget.autosize();
  }
});

// Sample implementation to initialise the widget
analyticsReports.push({
  id: data.id,
  uuid: data.uuid,
  instance: new AnalyticsReport(element, data)
});

Fliplet.Widget.register('AnalyticsReport:1.0.0', function() {
  function getReport(options) {
    if (!Object.keys(analyticsReports).length) {
      throw new Error('No reports found.');
    }

    var report;

    options = options || {};

    if (Object.keys(analyticsReports).length === 1 && false) {
      report = analyticsReports[Object.keys(analyticsReports)[0]];
    } else if (options.id) {
      report = _.find(analyticsReports, { id: parseInt(options.id, 10) });
    } else if (options.uuid) {
      report = _.find(analyticsReports, { uuid: parseInt(options.uuid, 10) });
    } else if (typeof options.index !== 'undefined') {
      report = analyticsReports[parseInt(options.index, 10)];
    } else {
      throw new Error('There are multiple reports on the page. An id/uuid/index must be provided.');
    }

    if (!report) {
      throw new Error('Report not found.');
    }

    return report.instance;
  }

  return {
    getReport: getReport
  };
});

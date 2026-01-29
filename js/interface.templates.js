this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.interface.active-user"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n  <div class=\"analytics-row\">\n    <div class=\"analytics-row-name\">\n      <p>{{userEmail}}</p>\n    </div>\n    <div class=\"analytics-row-score\">\n      <p>{{formatNumber count}}</p>\n    </div>\n  </div>\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.interface.communication"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n  <div class=\"analytics-row\">\n    <div class=\"analytics-row-name\">\n      <p>{{ Title }}</p>\n    </div>\n    <div class=\"analytics-row-score\">\n      <p>{{formatNumber count}}</p>\n    </div>\n  </div>\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.interface.popular-screen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\n  <div class=\"analytics-row\">\n    <div class=\"analytics-row-name\">\n      <p>{{ pageTitle }}</p>\n    </div>\n    <div class=\"analytics-row-score\">\n      <p>{{formatNumber count}}</p>\n    </div>\n  </div>\n{{/each}}";
},"useData":true});
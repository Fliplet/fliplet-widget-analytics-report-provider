this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.interface.active-user"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\r\n  <div class=\"analytics-row\">\r\n    <div class=\"analytics-row-name\">\r\n      <p>{{userEmail}}</p>\r\n    </div>\r\n    <div class=\"analytics-row-score\">\r\n      <p>{{formatNumber count}}</p>\r\n    </div>\r\n  </div>\r\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.interface.app-metrics"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\r\n  <div class=\"analytics-row\">    \r\n    <span class=\"analytics-box-text-span\">{{[Title]}}</span>\r\n    <span class=\"analytics-box-number-prior\" id=\"metric-active-users-prior\">{{formatNumber [Prior period]}}</span>\r\n    <span class=\"analytics-box-number\" id=\"metric-active-users\">{{formatNumber [Selected period]}}</span>\r\n  </div>\r\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.interface.popular-screen"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\r\n  <div class=\"analytics-row\">\r\n    <div class=\"analytics-row-name\">\r\n      <p>{{ pageTitle }}</p>\r\n    </div>\r\n    <div class=\"analytics-row-score\">\r\n      <p>{{formatNumber count}}</p>\r\n    </div>\r\n  </div>\r\n{{/each}}";
},"useData":true});
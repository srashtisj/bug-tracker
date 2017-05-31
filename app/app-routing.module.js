"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var demo_component_1 = require("./demo/demo.component");
var ticket_component_1 = require("./ticket/ticket.component");
var comment_component_1 = require("./comment/comment.component");
var worklog_component_1 = require("./worklog/worklog.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var profile_component_1 = require("./profile/profile.component");
var welcome_component_1 = require("./welcome/welcome.component");
var routes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: 'ticket', component: ticket_component_1.TicketComponent },
            { path: 'comment', component: comment_component_1.CommentComponent },
            { path: 'worklog', component: worklog_component_1.WorklogComponent },
            { path: '', redirectTo: 'ticket', pathMatch: "full" },
        ]
    },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'demo', component: demo_component_1.DemoComponent },
    { path: '', redirectTo: "welcome", pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: "full" }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes, { useHash: true })
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
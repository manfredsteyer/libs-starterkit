import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogMonitorComponent
  ],
  exports: [
    LogMonitorComponent
  ]
})
export class LoggerModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
  entryComponents: [TestComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(TestComponent, { injector });
    customElements.define('app-test', el);
  }

  ngDoBootstrap() {}
}

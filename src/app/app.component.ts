import { Component, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const textElement = document.getElementById('text');
    const toggleElement = document.getElementById('toggle');
    const outputElement = document.getElementById('output');
    if (!textElement || !toggleElement || !outputElement) {
      throw new Error('required elements not found');
    }
    var enabled = true;

    toggleElement.onclick = () => {
      enabled = !enabled;
      const element = textElement as any;
      element['disabled'] = !enabled;
    }

    const observer = new MutationObserver((a) => {
      outputElement.innerText += 'mutation\n';
    });

    observer.observe(textElement, { attributeFilter: ['disabled'] });
  }
}
angular.module('myApp').directive('appRoot', downgradeComponent({ component: AppComponent }));

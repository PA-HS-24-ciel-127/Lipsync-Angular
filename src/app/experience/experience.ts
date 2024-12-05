import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtsOrbitControls } from 'angular-three-soba/controls';
import { NgtsEnvironment } from 'angular-three-soba/staging';
import { Avatar } from './avatar';

@Component({
  standalone: true,
  template: `
    <app-avatar [options]="{ position: [-0.06, -0.985, 2], scale: 0.641 }" />

    <ngts-environment [options]="{ preset: 'sunset' }" />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Avatar, NgtsEnvironment, NgtsOrbitControls],
})
export class Experience { }

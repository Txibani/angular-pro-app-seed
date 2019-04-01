import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'schedule-controls',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-controls.component.scss'],
    template: `
        <div class="controls">
            
            <button
                type="button">
                <img src="/img/chevron-left.svg"
                (click)="moveDate(offset - 1)">
            </button>
            <p>{{ selected | date:'yMMMMd' }}</p>
            <button
                type="button">
                <img src="/img/chevron-right.svg"
                (click)="moveDate(offset + 1)">
            </button>

        </div>
    `
})

export class ScheduleControlsComponent {

    @Input()
    selected: Date;

    @Output()
    move = new EventEmitter<number>();

    offset = 0;

    moveDate(offset: number) {
        this.offset = offset;
        this.move.emit(offset);
    }

}
import { Component, ChangeDetectorRef, Inject } from '@angular/core'
import e from '../event-bus'

@Component({
  selector: 'AngularApp',
  template: `
		<div style="margin-top: 100px;">
      <h1>Angular APP</h1>
      <button (click)="sendMesssaggToReactApp()">Send Message to React</button>
      <p>{{message}}</p>
		</div>
	`,
})
export default class AngularApp {
  message: string = "Message from React should appear here"

  constructor(@Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef) {}

  ngAfterContentInit() {
    e.on('message', message => {
      this.message = message.text
      this.changeDetector.detectChanges()
      this.returnMessageToReactWhenReceived()
    })
  }

  sendMesssaggToReactApp() {
    e.emit('angToReact', { text: 'data passed from angular application.' })
  }
  returnMessageToReactWhenReceived() {
    e.emit('received', { text: 'Hello from Angular!' })
  }
}

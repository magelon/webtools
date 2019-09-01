import { Component, OnInit } from '@angular/core';

import * as ping from 'web-pingjs'

@Component({
  selector: 'app-ping-tool',
  templateUrl: './ping-tool.component.html',
  styleUrls: ['./ping-tool.component.sass']
})
export class PingToolComponent implements OnInit {

  ms
  ip='google.com'

  constructor() { }

  ngOnInit() {
    ping(this.ip).then(delta=>{
      console.log('Ping time was '+String(delta)+'ms')
      this.ms=delta;
    }).catch(err=>{
      console.log(err)
    })
  }

}

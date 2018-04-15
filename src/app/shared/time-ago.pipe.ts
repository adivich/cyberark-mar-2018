import {OnDestroy, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false   //run on each change detection
})
export class TimeAgoPipe implements PipeTransform , OnDestroy{
  currentDate : any = new Date();
  interval;
  transform(value: any, args?: any): any {
    const timeAgoInSeconds: any = (this.currentDate - value) / 1000;


    let result = "";
    if (timeAgoInSeconds < 60){
      result = Math.round(timeAgoInSeconds) + " seconds ago"
    } else if (timeAgoInSeconds < 3600){
      result = Math.round(timeAgoInSeconds / 60) + " minutes ago"
    } else {
      result = Math.round(timeAgoInSeconds / 3600 ) + " hours ago"
    }
    return result;
  }

  constructor() {
    this.interval = setInterval(() => {
      this.currentDate =  new Date();
    }, 1000)
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }

  }

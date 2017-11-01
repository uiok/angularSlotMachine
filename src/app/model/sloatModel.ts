/**
 *區塊物件
 */
// import { sloatOperator } from '../../assets/javascripts/jquery.spritely.js';
declare var $: any;

export class Card {
  private targetHtml: any;
  private maxSpeed: number;
  private increaseRate: number;
  private timer: any;
  constructor(htmlObj: any, maxSpeed: number, increaseRate: number) {
    this.targetHtml = htmlObj;
    this.maxSpeed = maxSpeed;
    this.increaseRate = increaseRate;
    $(this.targetHtml).pan({
      fps: 30,
      dir: 'down'
    });
    $(this.targetHtml).spStop();

  }


  startRoll() {
    $(this.targetHtml).addClass('motion');
    $(this.targetHtml).spStart();
    this.timer = setInterval(function () {
      if (this.speed < this.maxSpeed) {
        this.speed += this.increaseRate;
        $(this.targetHtml).spSpeed(this.speed);
      }
    }, 500);
  }

  stopRoll() {
    clearInterval(this.timer);
  }


}

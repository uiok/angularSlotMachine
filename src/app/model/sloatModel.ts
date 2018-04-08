/**
 *區塊物件
 */
// import { sloatOperator } from '../../assets/javascripts/jquery.spritely.js';
declare var $: any;

export class Sloat {
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
    debugger;
    clearInterval(this.timer);
        this.timer = setInterval(function() {
            if(this.speed > 100) {
                this.speed -= this.step;
                $(this.targetHtml).spSpeed(this.speed);
            }
            if(this.speed <= 100) {
                this.finalPos(this.el);
                $(this.targetHtml).spSpeed(0);
                $(this.targetHtml).spStop();
                clearInterval(this.timer);
                $(this.targetHtml).removeClass('motion');
                this.speed = 0;
            }
        }, 500);
  }


}

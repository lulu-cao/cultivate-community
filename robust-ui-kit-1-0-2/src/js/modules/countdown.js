const selectors = {
  countdown: '.js-countdown',
  days: '.js-days',
  hours: '.js-hours',
  minutes: '.js-minutes',
  seconds: '.js-seconds'
}

export default class Countdown {
  constructor(element, deadline) {
    this.deadline = deadline;

    // Get all elements from the DOm
    this.days = element.querySelector(selectors.days);
    this.hours = element.querySelector(selectors.hours);
    this.minutes = element.querySelector(selectors.minutes);
    this.seconds = element.querySelector(selectors.seconds);

    // Start countdown
    this.updateCountdown();
    this.timeInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  /*
   * updateCountdown
   * Updates the countdown DOM element
   */
  updateCountdown() {
    const remainingTime = this.getTimeRemaining();

    this.days.innerHTML = remainingTime.days;
    this.hours.innerHTML = ('0' + remainingTime.hours).slice(-2);
    this.minutes.innerHTML = ('0' + remainingTime.minutes).slice(-2);
    this.seconds.innerHTML = ('0' + remainingTime.seconds).slice(-2);

    if (remainingTime.total <= 0) {
      clearInterval(this.timeInterval);
    }
  }

  /*
   * getTimeRemaining
   * Get remaining time of countdown
   */
  getTimeRemaining() {
    const remainingTime = Date.parse(this.deadline) - Date.parse(new Date());
    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    return {
      'total': remainingTime,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
}

/*
 * Create a new instance for each countdown on current page
 */
const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

$(selectors.countdown).each(function() {
  new Countdown(this, deadline);
});

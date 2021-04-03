'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        
        if(!id) {
            throw new Error('Будильник не найден. Введите id')
        }

        try {
            if (this.alarmCollection.find(item => item.id === id)) {
                throw new Error('Будильник с таким id уже есть')
            }
            this.alarmCollection.push({id: id, time: time, callback: callback});
        } catch (e) {
            console.error('Будильник с таким id уже есть')
        }
    }

    removeClock(id) {
        const before = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        console.log(before.length > this.alarmCollection.length);
        //  здесь должна быть проверка об успешности/провале удаления объекта звонка из общего массива
    }

    getCurrentFormattedTime() {
        let date = new Date;
        let hours, min;
        
        if (date.getHours() < 10) {
            hours = `0${date.getHours()}`
        } else {
            hours = date.getHours()
        }

        if (date.getMinutes() < 10) {
            min = `0${date.getMinutes()}`
        } else {
            min = date.getMinutes()
        }
        const currentTime = `${hours}:${min}`;
        console.log(currentTime)
        return currentTime
    }

    start() {
        const checkClock = (element) => {
            if(this.getCurrentFormattedTime() === element.time) {
                return element.callback()
              }
        }
                
        if(!this.timerId) {
            const startAllCalls = () => {
            this.alarmCollection.forEach(element => checkClock(element))
            }
            this.timerId = setInterval(startAllCalls, 1000);
        }        
    }
        

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id}, заведен на${ element.time}`))
    }

    clearAlarms() {
        this.alarmCollection.forEach(element => clearInterval(element.id));
        this.alarmCollection = []
    }
}

function testCase() {
    const myAlarmClock = new AlarmClock();
    myAlarmClock.addClock('21:29',() => {console.log('Вставай'); console.log('Вставай'); console.log('Вставай')}, 1);
    myAlarmClock.addClock('13:12',() => {console.log('Вставай, уже');
    myAlarmClock.removeClock(2)}, 2);  
    //myAlarmClock.addClock('13:13', () => console.log('Вставай, все проспишь'));
    myAlarmClock.addClock('13:13', () => {
        console.log('Вставай, все проспишь');
        myAlarmClock.clearAlarms();
        myAlarmClock.printAlarms()}, 3);
    myAlarmClock.addClock('13:13',() => console.log('Вставай'), 1)
    myAlarmClock.printAlarms();
    myAlarmClock.start();
    console.log(myAlarmClock)
}

testCase()
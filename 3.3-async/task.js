'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.timerId
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
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        //  здесь должна быть проверка об успешности/провале удаления объекта звонка из общего массива
    }

    getCurrentFormattedTime() {
        let date = new Date;
        const currentTime = `${date.getHours()}:${date.getMinutes()}`;
        return currentTime
    }

    start() {
        function checkClock(element) {
            if(getCurrentFormattedTime() === element.time) {
                element.callback()
              }
        }
                
        if(!this.timerId) {
            const startAllCalls = function() {
            this.alarmCollection.forEach(element => checkClock(element))
            }
            this.timerId = setInterval(startAllCalls, 0);
        }        
    }
        

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            delete this.timerId;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id}, заведен на${element.time}`))
    }

    clearAlarms() {
        this.alarmCollection.forEach(element => clearInterval(element.id))
    }
}

function testCase() {
    const myAlarmClock = new AlarmClock();
    myAlarmClock.addClock('14:11',() => {console.log('Вставай'); console.log('Вставай'); console.log('Вставай')}, 1);
    // myAlarmClock.addClock('13:12',() => {
    //     console.log('Вставай, уже');
    //     myAlarmClock.removeClock(2)}, 2);  
    // myAlarmClock.addClock('13:13', () => console.log('Вставай, все проспишь'));
    // myAlarmClock.addClock('13:13', () => {
    //     console.log('Вставай, все проспишь');
    //     myAlarmClock.clearAlarms();
    //     myAlarmClock.printAlarms()}, 3);
    // myAlarmClock.addClock('13:13',() => console.log('Вставай'), 1)
    // myAlarmClock.printAlarms();
    myAlarmClock.start()
}

testCase()
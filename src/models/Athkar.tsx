import AthkarInterface, { AthkarTypes } from './interfaces/Athkar';
import Reminder from './interfaces/Reminder';
import Schedule from "./interfaces/Schedule";
import adhan from 'adhan';
import { Plugins } from '@capacitor/core';

class Athkar implements AthkarInterface {
    name: string = "Athkar";
    reminders: Reminder[];
    type: AthkarTypes;

    constructor (reminders: Reminder[], type: AthkarTypes) {
        this.reminders = reminders;
        this.type = type;
    }

    // async getSchedule (): Schedule {
    //     const position = await Plugins.Geolocation.getCurrentPosition();
    //     const prayerTimes = new adhan.PrayerTimes({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //     }, new Date(), adhan.CalculationMethod.MuslimWorldLeague());
    //     switch (this.type) {
    //         case AthkarTypes.Morning:
                
    //     }
    // }
}
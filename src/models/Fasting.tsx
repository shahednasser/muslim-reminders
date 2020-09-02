import ReminderType from "./interfaces/ReminderType";
import Schedule from "./interfaces/Schedule";
import Reminder from "./interfaces/Reminder";

class Fasting implements ReminderType {
    name: string = 'Fasting';
    reminders: Reminder[];

    constructor (reminders: Reminder[]) {
        this.reminders = reminders;
    }

    getSchedule (): Schedule {
        return {
            at: new Date()
        }
    }
}

export default Fasting;
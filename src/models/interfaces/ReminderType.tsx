import Reminder from './Reminder';
import Schedule from './Schedule';

interface ReminderType {
    name: string;
    reminders: Reminder[];
    getSchedule: () => Schedule;
};

export default ReminderType;
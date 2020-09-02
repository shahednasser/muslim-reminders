import ReminderType from "./ReminderType";

interface MonthlyReminder {
    month: number;
    reminderTypes: ReminderType[];
};

export default MonthlyReminder;
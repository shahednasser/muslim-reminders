import ReminderType from "./ReminderType";

export enum AthkarTypes {
    Morning = "morning",
    Evening = "evening"
};

interface Athkar extends ReminderType {
    type: AthkarTypes;
}

export default Athkar;
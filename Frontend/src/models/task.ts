export const validPriorities = ['LOW', 'MEDIUM', 'HIGH'] as const;

type Priority = typeof validPriorities[number];

export const validStatuses = ['COMPLETE', 'INPROGRESS', 'BACKLOG'] as const;

type Status = typeof validStatuses[number];

export interface ITask {
    Name: string;
    Description?: string;
    Deadline?: Date;
    Priority: Priority;
    CreatedAt?: Date;
    Status: Status;
}
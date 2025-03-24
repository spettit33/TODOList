export const validPriorities = ['LOW', 'MEDIUM', 'HIGH'] as const;

export type Priority = typeof validPriorities[number];

export const validStatuses = ['COMPLETE', 'INPROGRESS', 'BACKLOG'] as const;

export type Status = typeof validStatuses[number];

export interface ITask {
    Id: string;
    Name: string;
    Description?: string;
    Deadline?: Date;
    Priority: Priority;
    CreatedAt?: Date;
    Status: Status;
}

export const colorMap: Map<Priority, string> = new Map([["LOW","text-green-500"], ["MEDIUM", "text-yellow-500"], ["HIGH", "text-red-500"]]);
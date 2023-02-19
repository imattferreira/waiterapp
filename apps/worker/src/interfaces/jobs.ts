export type JobFn = <T>(data: T) => Promise<void>;

export interface AvailableJobs {
  [job: string]: JobFn;
}

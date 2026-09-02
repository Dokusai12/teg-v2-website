import type { CareerJob } from "./types";
import { enterpriseAccountExecutive } from "./enterpriseAe";
import { bdmNorthAmerica, bdmUk } from "./businessDevelopmentManager";
import { refundSpecialist } from "./refundSpecialist";
import { salesDevelopmentRepresentative } from "./salesDevelopmentRepresentative";

export type { CareerJob, JobBlock } from "./types";

export const CAREER_JOBS: CareerJob[] = [
  enterpriseAccountExecutive,
  bdmUk,
  bdmNorthAmerica,
  refundSpecialist,
  salesDevelopmentRepresentative,
];

export function getCareerJob(id: string): CareerJob | undefined {
  return CAREER_JOBS.find((j) => j.id === id);
}

// TODO improve
// TODO add database statistics
// TODO add fs statistics
// TODO add cpu percentage
import os from "node:os";
import AppError from "../../../../errors/app-error";
import Either, { Right } from "../../../../errors/either";
import type { HttpBodyResponse } from "../../../../infra/http/interfaces";
import healthPresentation, {
  IHealthPresentation,
} from "../../presentations/health";

type HealthUseCaseOutput = HttpBodyResponse<IHealthPresentation>;

class HealthUseCase {
  async execute(): Promise<Either<AppError, HealthUseCaseOutput>> {
    const memory = process.memoryUsage();

    const cpu = os.cpus()[0];
    const cpuUsage =
      Object.values(process.cpuUsage()).reduce((acc, curr) => acc + curr, 0) *
      100;
    const cpuTotal = Object.values(cpu.times).reduce(
      (acc, curr) => acc + curr,
      0
    );

    return Right.commit({
      _self: null,
      data: healthPresentation({ cpuUsage, cpuTotal, memory }),
    });
  }
}

export default HealthUseCase;

// TODO improve
// TODO add read/write in presentation
interface HearthInput {
  cpuUsage: number;
  cpuTotal: number;
  memory: NodeJS.MemoryUsage;
}

export interface IHealthPresentation {
  cpu: {
    total: number;
    usage: number;
  };
  memory: {
    heap: {
      total: number;
      usage: number;
      percentage: string;
    };
    buffers: number;
    external: number;
    rss: number;
  };
}

function healthPresentation({
  cpuTotal,
  cpuUsage,
  memory,
}: HearthInput): IHealthPresentation {
  return {
    cpu: {
      total: cpuTotal,
      usage: cpuUsage,
    },
    memory: {
      heap: {
        total: memory.heapTotal,
        usage: memory.heapUsed,
        percentage: ((memory.heapUsed / memory.heapTotal) * 100).toFixed(2),
      },
      buffers: memory.arrayBuffers,
      external: memory.external,
      rss: memory.rss,
    },
  };
}

export default healthPresentation;

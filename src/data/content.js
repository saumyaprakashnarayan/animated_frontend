export const SERVICES = [
  {
    id: "hpc",
    title: "HPC Solutions",
    description: "Build out HPC solutions both on-premises, in co-lo’s and in cloud/hybrid architectures. We are vendor agnostic – choosing the best components.",
    metrics: ["On-Premises", "Co-Lo", "Cloud"]
  },
  {
    id: "quantum",
    title: "Quantum Computing",
    description: "The future of accelerated computing. Make a step-change in processing power for simulations, encryption and parallel computation applications.",
    metrics: ["Qubits", "Simulators", "Hybrid"]
  },
  {
    id: "data",
    title: "Data Storage & Management",
    description: "Simplify the complexity of data storage. Achieve a better balance of capacity, performance and cost tailored to fit your exact needs.",
    metrics: ["Storage", "Backup", "Scale"]
  },
  {
    id: "cloud",
    title: "Trayaksh.ai Cloud",
    description: "A best-of-breed solution framework bringing the benefits of cloud computing to HPC with an extra layer of flexibility and support.",
    metrics: ["Cloud HPC", "Hybrid", "Managed"]
  },
  {
    id: "hft",
    title: "eXtreme HFT Servers",
    description: "Create rock solid trading infrastructure. Overclocked servers rigorously tested to deliver the promised speed day in day out for years.",
    metrics: ["Trading", "HFT", "Overclocked"]
  },
  {
    id: "bespoke",
    title: "Bespoke Servers",
    description: "A personal approach to each build, balancing power and heat demands to deliver a system that is reliable, durable, and tailored to you.",
    metrics: ["Custom Builds", "Workstations", "Reliable"]
  },
  {
    id: "data-ai",
    title: "Data and AI Solutions",
    description: "Custom designed to cater towards specific project requirements to establish optimisation and achieve maximum scalability and efficiency.",
    metrics: ["Big Data", "Analytics", "Scalability"]
  },
  {
    id: "network",
    title: "Networking",
    description: "Ethernet and InfiniBand solutions for software defined networking and Open Network protocols, ensuring lowest latency and highest through-put.",
    metrics: ["Ethernet", "InfiniBand", "Low Latency"]
  },
  {
    id: "ai-ds",
    title: "AI for Data Scientists",
    description: "Dedicated GPU accelerated hardware for compute-intensive Deep Learning and Machine Learning models to help you apply models in the wild.",
    metrics: ["GPU Accelerated", "Workstations", "Compute"]
  },
  {
    id: "scale",
    title: "Scaling AI Infrastructure",
    description: "Take your organization from cloud POC to workstations and small teams, to full clustered architectures with planned growth in resources.",
    metrics: ["Clusters", "SuperPODs", "Growth"]
  },
  {
    id: "xpu",
    title: "xPU (CPU, DPU, GPU, IPU)",
    description: "Trayaksh.ai supplies a range of the latest processor unit types designed specifically for the applications and data types involved.",
    metrics: ["Processors", "Compute", "AI/ML"]
  },
  {
    id: "storage",
    title: "Storage Solutions",
    description: "Storage is at the core of an effective IT infrastructure. From small 10TB to 40+ PB, each solution is tailored to your requirements.",
    metrics: ["File/Block/Object", "Resilience", "Scale"]
  }
];

export const TECH_STACK = {
  hardware: ["NVIDIA H100", "NVIDIA A100", "AMD MI300X", "Supermicro", "Intel Xeon"],
  networking: ["InfiniBand NDR", "RoCE v2", "Cisco Nexus", "NVIDIA Spectrum-X"],
  software: ["Kubernetes", "Slurm", "Ray", "PyTorch", "JAX"],
  data: ["Weka", "DDN", "Vast Data", "Snowflake", "Databricks"]
};

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Scoping",
    description: "Deep-dive sessions to understand your business, data landscape, and success criteria. We define scope, feasibility, and expected ROI before a single line of code is written."
  },
  {
    step: "02",
    title: "Proof of Concept",
    description: "Rapid prototyping to validate technical assumptions and demonstrate value. Typical delivery in 2–3 weeks with real data and measurable baseline metrics you can present to leadership."
  },
  {
    step: "03",
    title: "Build & Iterate",
    description: "Agile development with weekly demos and feedback loops. We engineer for performance, reliability, and scalability from day one — not as an afterthought when problems arise."
  },
  {
    step: "04",
    title: "Deploy & Support",
    description: "Production deployment with full monitoring, documentation, and team enablement. Optional ongoing support packages ensure your AI systems keep improving after launch."
  }
];

export const PARTNERS = [
  "Nvidia", "AMD", "Weka", "DDN", "Supermicro", "Intel", "Vast Data", "Cisco"
];

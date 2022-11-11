export const configTiers = [
  {
    id: 1,
    tier: 'SILVER',
    color: '#6c7c85',
    capacity: '18 hrs',
    perfomance: 'Low',
    cost: 'Low',
    costValue: 30,
    cpu: '2',
    memory: '8',
    storage: '100',
    info: 'You are unfamiliar with the OHDSI Lab and want to give it a try or you already know how OHDSI Lab works and don’t have computation intensive tasks for it. This is a great point to start with',
  },
  {
    id: 2,
    tier: 'GOLD',
    color: '#ffa500',
    capacity: '12 hrs',
    perfomance: 'Medium',
    cost: 'Medium',
    costValue: 45,
    cpu: '4',
    memory: '16',
    storage: '100',
    info: 'This is the default OHDSI Lab configuration - an equilibrium between computational performance and operational costs. We recommend it when you got familiar with the technology and ready to research',
  },
  {
    id: 3,
    tier: 'PLATINUM',
    color: '#838383',
    capacity: '8 hrs',
    perfomance: 'High',
    cost: 'High',
    costValue: 60,
    cpu: '8',
    memory: '32',
    storage: '100',
    info: 'You require a research environment with demanding requirements on memory and computational resources. This variant is recommended for the users to get the results in the most efficient way',
  },
];

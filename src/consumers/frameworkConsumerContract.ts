export const createFrameworkConsumerContractError = (consumerName: string): Error => {
  return new Error(
    `${consumerName} is a render-coupled consumer helper and has no shared runtime implementation. ` +
      `Inject the framework-specific ${consumerName} implementation instead of calling the shared fallback export.`
  );
};
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("RequirementEngineering", {
    contract: "RequirementEngineering",
    from: deployer,
    args: [], // The message value in the function constructor
    log: true, // Logs statements to console
  });
};
module.exports.tags = ["RequirementEngineering"];

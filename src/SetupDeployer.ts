const execa = require('execa');
const core = require('@actions/core');

interface DeployerOptions {
    deployerVersion?: string,
    deployerRecipes?: boolean,
    skipDeployerInstall?: string,
}

export default async (options: DeployerOptions): Promise<void> => {
    if (options.skipDeployerInstall) return;

    const deployerPackage = options.deployerVersion
        ? `deployer/deployer:${options.deployerVersion}`
        : 'deployer/deployer';
    const recipesPackage = options.deployerRecipes
        ? `deployer/recipes`
        : '';

    console.log(deployerPackage, recipesPackage);

    await execa('composer', ['global', 'require', deployerPackage, recipesPackage]);

    const installPath = (await execa('composer', ['global', 'config', 'home'])).stdout;
    core.addPath(`${installPath}/vendor/bin`);
};

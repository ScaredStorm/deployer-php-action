interface DeployerOptions {
    deployerVersion?: string;
    deployerRecipes?: boolean;
    skipDeployerInstall?: string;
}
declare const _default: (options: DeployerOptions) => Promise<void>;
export default _default;

import { Config } from "@remotion/cli/config";
import path from "path";

Config.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      alias: {
        ...(currentConfiguration.resolve?.alias ?? {}),
        "@": path.join(process.cwd()),
      },
    },
  };
});

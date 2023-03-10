import path from "path";

import { DefaultJobQueuePlugin, DefaultSearchPlugin } from "@vendure/core";
import { defaultEmailHandlers, EmailPlugin } from "@vendure/email-plugin";
import { AssetServerPlugin } from "@vendure/asset-server-plugin";
import { AdminUiPlugin } from "@vendure/admin-ui-plugin";

import { IngredientPlugin } from "./plugins/ingredients/ingredients.plugin";

const IS_DEV = process.env.APP_ENV === 'dev';

export default [
  IngredientPlugin,
  AssetServerPlugin.init({
    route: "assets",
    assetUploadDir: path.join(__dirname, "../static/assets"),
    // For local dev, the correct value for assetUrlPrefix should
    // be guessed correctly, but for production it will usually need
    // to be set manually to match your production url.
    assetUrlPrefix: IS_DEV ? undefined : "https://www.my-shop.com/assets",
  }),
  DefaultJobQueuePlugin.init({ useDatabaseForBuffer: true }),
  DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: true }),
  EmailPlugin.init({
    devMode: true,
    outputPath: path.join(__dirname, "../static/email/test-emails"),
    route: "mailbox",
    handlers: defaultEmailHandlers,
    templatePath: path.join(__dirname, "../static/email/templates"),
    globalTemplateVars: {
      // The following variables will change depending on your storefront implementation.
      // Here we are assuming a storefront running at http://localhost:8080.
      fromAddress: '"example" <noreply@example.com>',
      verifyEmailAddressUrl: "http://localhost:8080/verify",
      passwordResetUrl: "http://localhost:8080/password-reset",
      changeEmailAddressUrl:
        "http://localhost:8080/verify-email-address-change",
    },
  }),
  AdminUiPlugin.init({
    route: "admin",
    port: 3002,
  }),
];

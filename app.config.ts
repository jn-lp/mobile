import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: config.name ?? "mobile",
  description: "mobile description",
  slug: "mobile",
  owner: "lepeico",
  privacy: "hidden",
  version: "0.1.0",
  githubUrl: "https://github.com/jn-lp/mobile",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  backgroundColor: "#110D16",
  primaryColor: "#D2444A",
  icon: "./assets/lepico.png",
  notification: {
    color: "#110D16",
    iosDisplayInForeground: false,
    androidMode: "collapse",
    androidCollapsedTitle: "#{unread_notifications} new interactions"
  },
  ios: {
    bundleIdentifier: `${config._internal?.organizationIdentifier}.${config.name}`,
    isTabletOnly: false,
    requireFullScreen: false,
  }
});

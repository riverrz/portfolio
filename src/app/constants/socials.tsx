import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export const socialMediaData = {
  Twitter: {
    label: "Twitter",
    Icon: TwitterLogoIcon,
  },
  LinkedIn: {
    label: "LinkedIn",
    Icon: LinkedInLogoIcon,
  },
  Github: {
    label: "Github",
    Icon: GitHubLogoIcon,
  },
} as const;

export type SocialMediaPlatform = keyof typeof socialMediaData;

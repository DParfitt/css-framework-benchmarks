import { Box } from "../Box/Box";
import { Flex } from "../Flex/Flex";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import classNames from "classnames";
import Image from "next/image";

export type CTASectionProps = {
  media?: {
    src: string;

    alt: string;
  };
  align?: "left" | "center" | "right";
  cta?: {
    label: string;
  };
  description?: string;
  subtitle?: string;
  subtitleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  theme?: "primary" | "secondary" | "tertiary";
  title?: string;
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const baseSection =
  "relative overflow-hidden sm:py-7 md:py-7 lg:py-11 max-h-[390px]";

const primarySection = "bg-primary";
const secondarySection = "bg-accent";
const tertiarySection = "bg-grayLight";

const mediaContainer = "w-full h-full absolute inset-0 z-0";

const mediaStyles = "w-full h-full object-cover object-top opacity-50";

const container = "relative flex-col sm:p-large md:p-large lg:p-none";

const baseContentContainer =
  "justify-center mx-auto sm:max-w-full md:max-w-[796px] lg:max-w-[860px]";

const leftContentContainer = "items-start text-left";
const centerContentContainer = "items-center text-center";
const rightContentContainer = "items-end text-right";

const ctaStyles = "sm:mt-medium md:mt-large lg:mt-large";

export const CTASection = ({
  align = "center",
  media,
  cta,
  description,
  subtitle,
  subtitleLevel,
  theme = "primary",
  title,
  titleLevel,
}: CTASectionProps) => {
  return (
    <section
      className={classNames(baseSection, {
        [primarySection]: theme === "primary",
        [secondarySection]: theme === "secondary",
        [tertiarySection]: theme === "tertiary",
      })}
    >
      {media && (
        <Box className={mediaContainer}>
          <Image
            className={mediaStyles}
            src={media.src}
            alt={media?.alt}
            width={2880}
            height={1920}
            priority
          />
        </Box>
      )}
      <Flex className={container}>
        <Flex
          className={classNames(container, baseContentContainer, {
            [leftContentContainer]: align === "left",
            [centerContentContainer]: align === "center",
            [rightContentContainer]: align === "right",
          })}
        >
          {subtitle && (
            <Heading
              as={subtitleLevel || "h3"}
              variant="secondary"
              size={subtitleLevel}
              className={classNames({
                "text-white": theme === "primary" || theme === "secondary",
                "text-secondary": theme === "tertiary",
              })}
            >
              {subtitle}
            </Heading>
          )}
          {title && (
            <Heading
              as={titleLevel || "h2"}
              size={titleLevel}
              className={classNames({
                "text-white": theme === "primary" || theme === "secondary",
                "text-primary": theme === "tertiary",
              })}
            >
              {title}
            </Heading>
          )}
          {description && (
            <Box
              as="div"
              className={classNames(
                "sm:mt-3 md:mt-4 lg:mt-4 last-of-type:mb-0",
                {
                  "text-white": theme === "primary" || theme === "secondary",
                  "text-primary": theme === "tertiary",
                }
              )}
            >
              {description}
            </Box>
          )}
          {cta && (
            <Button variant="solid" className={ctaStyles}>
              {cta.label}
            </Button>
          )}
        </Flex>
      </Flex>
    </section>
  );
};

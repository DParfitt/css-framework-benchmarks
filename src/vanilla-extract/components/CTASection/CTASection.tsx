import { Box } from "../Box/Box";
import { Flex } from "../Flex/Flex";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import {
  section,
  container,
  media as mediaStyles,
  cta as ctaStyles,
  mediaContainer,
  contentContainer,
  title as titleStyles,
  description as descriptionStyles,
  subtitle as subtitleStyles,
} from "./CTASection.css";
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
    <section className={section[theme]}>
      {media && (
        <Box className={mediaContainer}>
          <Image
            width={2880}
            height={1920}
            className={mediaStyles}
            src={media.src}
            alt={media?.alt}
            priority
          />
        </Box>
      )}
      <Flex className={container} justifyContent="center">
        <Flex className={contentContainer[align]}>
          {subtitle && (
            <Heading
              as={subtitleLevel || "h3"}
              variant="secondary"
              size={subtitleLevel}
              className={subtitleStyles[theme]}
            >
              {subtitle}
            </Heading>
          )}
          {title && (
            <Heading
              as={titleLevel || "h2"}
              size={titleLevel}
              className={titleStyles[theme]}
            >
              {title}
            </Heading>
          )}
          {description && (
            <Box as="div" className={descriptionStyles[theme]}>
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

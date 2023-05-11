import { Box } from "../Box/Box";
import { Flex } from "../Flex/Flex";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";

import Image from "next/image";
import { css } from "@linaria/atomic";
import { cx } from "@linaria/core";

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

const baseSection = css`
  position: relative;
  overflow: hidden;
  max-height: 390px;
  @media (min-width: 640px) {
    padding-top: var(--space-7);
    padding-bottom: var(--space-7);
  }
  @media (min-width: 768px) {
    padding-top: var(--space-7);
    padding-bottom: var(--space-7);
  }
  @media (min-width: 1024px) {
    padding-top: var(--space-11);
    padding-bottom: var(--space-11);
  }
`;

const primarySection = css`
  background-color: var(--color-primary);
`;

const secondarySection = css`
  background-color: var(--color-accent);
`;

const tertiarySection = css`
  background-color: var(--color-grayLight);
`;

const mediaContainer = css`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const mediaStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  opacity: 0.5;
`;

const container = css`
  position: relative;
  flex-direction: column;
  @media (min-width: 640px) {
    padding: var(--space-large);
  }
  @media (min-width: 768px) {
    padding: var(--space-large);
  }
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const baseContentContainer = css`
  justify-content: center;
  margin: 0 auto;
  @media (min-width: 640px) {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 796px;
  }
  @media (min-width: 1024px) {
    max-width: 860px;
  }
`;

const leftContentContainer = css`
  align-items: flex-start;
  text-align: left;
`;

const centerContentContainer = css`
  align-items: center;
  text-align: center;
`;

const rightContentContainer = css`
  align-items: flex-end;
  text-align: right;
`;

const ctaStyles = css`
  @media (min-width: 640px) {
    margin-top: var(--space-medium);
  }
  @media (min-width: 768px) {
    margin-top: var(--space-large);
  }
  @media (min-width: 1024px) {
    margin-top: var(--space-large);
  }
`;

const titlePrimarySecondaryStyles = css`
  color: var(--color-white);
`;

const titleTertiaryStyles = css`
  color: var(--color-primary);
`;

const subtitlePrimarySecondaryStyles = css`
  color: var(--color-white);
`;

const subtitleTertiaryStyles = css`
  color: var(--color-secondary);
`;

const descriptionStyles = css`
  @media (min-width: 640px) {
    margin-top: var(--space-3);
  }
  @media (min-width: 768px) {
    margin-top: var(--space-4);
  }
  @media (min-width: 1024px) {
    margin-top: var(--space-4);
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const descriptionPrimarySecondaryStyles = css`
  color: var(--color-white);
`;

const descriptionTertiaryStyles = css`
  color: var(--color-primary);
`;

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
      className={cx(
        baseSection,
        theme === "primary" && primarySection,
        theme === "secondary" && secondarySection,
        theme === "tertiary" && tertiarySection
      )}
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
          className={cx(
            container,
            baseContentContainer,
            align === "left" && leftContentContainer,
            align === "center" && centerContentContainer,
            align === "right" && rightContentContainer
          )}
        >
          {subtitle && (
            <Heading
              as={subtitleLevel || "h3"}
              variant="secondary"
              size={subtitleLevel}
              className={cx(
                theme === "primary" || theme === "secondary"
                  ? titlePrimarySecondaryStyles
                  : titleTertiaryStyles
              )}
            >
              {subtitle}
            </Heading>
          )}
          {title && (
            <Heading
              as={titleLevel || "h2"}
              size={titleLevel}
              className={cx(
                theme === "primary" || theme === "secondary"
                  ? subtitlePrimarySecondaryStyles
                  : subtitleTertiaryStyles
              )}
            >
              {title}
            </Heading>
          )}
          {description && (
            <Box
              as="div"
              className={cx(
                descriptionStyles,
                theme === "primary" || theme === "secondary"
                  ? descriptionPrimarySecondaryStyles
                  : descriptionTertiaryStyles
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

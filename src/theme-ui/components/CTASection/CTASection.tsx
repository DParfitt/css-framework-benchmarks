import { Box } from "../Box/Box";
import { Flex } from "../Flex/Flex";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
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
    <Box
      as="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        paddingY: [7, 11],
        maxHeight: "390px",
        ...(theme === "primary" && {
          backgroundColor: "primary",
        }),
        ...(theme === "secondary" && {
          backgroundColor: "accent",
        }),
        ...(theme === "tertiary" && {
          backgroundColor: "grayLight",
        }),
      }}
    >
      {media && (
        <Box
          className="mediaContainer"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Box
            as={Image}
            className="mediaStyles"
            src={media.src}
            alt={media?.alt}
            width={2880}
            height={1920}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              opacity: 0.5,
            }}
          />
        </Box>
      )}
      <Flex
        className="container"
        sx={{
          position: "relative",
          flexDirection: "column",
          padding: [4, 4, 0],
          minHeight: [190, 190, 230],
          zIndex: 1,
        }}
      >
        <Flex
          className="contentContainer"
          sx={{
            position: "relative",
            flexDirection: "column",
            padding: [4, 4, 0],
            minHeight: [190, 190, 230],
            zIndex: 1,
            alignItems: "center",
            textAlign: "center",
            mx: "auto",
            maxWidth: ["100%", "796px", "860px"],
            ...(align === "left" && {
              alignItems: "flex-start",
              textAlign: "left",
            }),
            ...(align === "center" && {
              alignItems: "center",
              textAlign: "center",
            }),
            ...(align === "right" && {
              alignItems: "flex-end",
              textAlign: "right",
            }),
          }}
        >
          {subtitle && (
            <Heading
              as={subtitleLevel || "h3"}
              variant="secondary"
              size={subtitleLevel}
              sx={{
                ...(theme === "primary" && {
                  color: "white",
                }),
                ...(theme === "secondary" && {
                  color: "white",
                }),
                ...(theme === "tertiary" && {
                  color: "secondary",
                }),
              }}
            >
              {subtitle}
            </Heading>
          )}
          {title && (
            <Heading
              as={titleLevel || "h2"}
              size={titleLevel}
              sx={{
                ...(theme === "primary" && {
                  color: "white",
                }),
                ...(theme === "secondary" && {
                  color: "white",
                }),
                ...(theme === "tertiary" && {
                  color: "primary",
                }),
              }}
            >
              {title}
            </Heading>
          )}
          {description && (
            <Box
              as="div"
              sx={{
                mt: [3, 4, 4],
                "&:last-of-type": {
                  mb: 0,
                },
                ...(theme === "primary" && {
                  color: "white",
                }),
                ...(theme === "secondary" && {
                  color: "white",
                }),
                ...(theme === "tertiary" && {
                  color: "primary",
                }),
              }}
            >
              {description}
            </Box>
          )}
          {cta && (
            <Button
              sx={{
                mt: [3, 4, 4],
                mb: 0,
                zIndex: 1,
                maxWidth: "fit-content",
              }}
              variant="solid"
            >
              {cta.label}
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

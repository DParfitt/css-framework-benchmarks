import { CTASection } from "../theme-ui/components/CTASection/CTASection";

export default function Home() {
  return (
    <>
      <CTASection
        theme="primary"
        title="I like Bangkok"
        subtitle="It is a great city"
        description="Hey there"
        cta={{ label: "Hello world" }}
        align="center"
        media={{
          src: "https://fastly.picsum.photos/id/56/2880/1920.jpg?hmac=BIplhYgNZ9bsjPXYhD0xx6M1yPgmg4HtthKkCeJp6Fk",
          alt: "random picture",
        }}
      />
      <CTASection
        theme="secondary"
        title="I like Bangkok"
        subtitle="It is a great city"
        description="Hey there"
        cta={{ label: "Hello world" }}
        align="left"
        media={{
          src: "https://fastly.picsum.photos/id/56/2880/1920.jpg?hmac=BIplhYgNZ9bsjPXYhD0xx6M1yPgmg4HtthKkCeJp6Fk",
          alt: "random picture",
        }}
      />
      <CTASection
        theme="tertiary"
        title="I like Bangkok"
        subtitle="It is a great city"
        description="Hey there"
        cta={{ label: "Hello world" }}
        align="right"
        media={{
          src: "https://fastly.picsum.photos/id/56/2880/1920.jpg?hmac=BIplhYgNZ9bsjPXYhD0xx6M1yPgmg4HtthKkCeJp6Fk",
          alt: "random picture",
        }}
      />
    </>
  );
}

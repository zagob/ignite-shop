import Image from "next/image";
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

globalStyles();

import logoImg from "../assets/Logo.svg";
import { Container, Header } from "../styles/pages/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logoImg.src}
          height={logoImg.height}
          width={logoImg.width}
          alt=""
        />
      </Header>
      <Component {...pageProps} />;
    </Container>
  );
}

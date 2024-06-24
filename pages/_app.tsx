import type { AppProps } from "next/app";
import Modal from '@/components/Modal';
import Layout from '@/components/Layout';
import "@/styles/globals.css";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal />
      <Layout>  
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

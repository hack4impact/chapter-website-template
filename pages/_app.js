import React from "react";
import App, { Container } from "next/app";
import Head from "../components/head";
import Nav from "../components/nav";
import ErrorMessage from "../components/errorMessage";
import Footer from "../components/footer";
import { PageTransition } from "next-page-transitions";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Page Error Boundary: ", error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
        <PageTransition timeout={300} classNames="page-transition">
          {this.state.hasError ? (
            <ErrorMessage
              code="404"
              message="Something went Wrong. Are you logged in? Check logs as well"
            />
          ) : (
            <Component {...pageProps} />
          )}
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </div>
    );
  }
}

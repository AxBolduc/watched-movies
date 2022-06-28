import "../styles/globals.css";
import { AppType } from "next/dist/shared/lib/utils";
import { AppRouter } from "./api/trpc/[trpc]";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";

const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps}}) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default withTRPC<AppRouter>({
    config({ ctx }) {
        const url = process.env.NEXT_PUBLIC_URL
            ? `https://${process.env.NEXT_PUBLIC_URL}/api/trpc`
            : "http://localhost:3000/api/trpc";
        return {
            url,
        };
    },
    ssr: true,
})(MyApp);

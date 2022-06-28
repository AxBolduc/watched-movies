import "../styles/globals.css";
import { AppType } from "next/dist/shared/lib/utils";
import { AppRouter } from "./api/trpc/[trpc]";
import { withTRPC } from "@trpc/next";

const MyApp: AppType = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
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

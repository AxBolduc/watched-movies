import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export const Login: React.FC = () => {
    const { data: session } = useSession();

    return (
        <div>
            {!session ? (
                <button
                    onClick={() => signIn()}
                    className="bg-stone-500 rounded p-2 text-white font-bold"
                >
                    Login with Trakt
                </button>
            ) : (
                <div />
            )}
        </div>
    );
};

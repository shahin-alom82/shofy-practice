"use client"
import { store } from "@/constants/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const LayOut = ({ children }: { children: React.ReactNode }) => {
      return (

            <Provider store={store}>
                  <SessionProvider>
                        {children}
                  </SessionProvider>
            </Provider>

      );
};

export default LayOut;
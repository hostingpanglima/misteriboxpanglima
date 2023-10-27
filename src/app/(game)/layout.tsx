import TrpcProvider from "@/components/provider/TrpcProvider";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'Panglima79: Penjelajahan Misterius dalam Kotak Ajaib',
  description: 'Jelajahi Misteri dengan MisteriBox: Temukan Keajaiban di Setiap Kotak!',
}
const gameLayout = ({children}:PropsWithChildren) => {
  return (
    <TrpcProvider>
      {children}
      <Toaster />
    </TrpcProvider>
  );
}

export default gameLayout;
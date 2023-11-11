import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

import Header from "./Header";
import Loader from "./Loading";
import { AnimatePresence } from "framer-motion";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <AnimatePresence>
      <div className="grid h-screen  grid-rows-[auto_1fr_auto]">
        {isLoading && <Loader />}
        {/* {true && <Loader />} */}
        <Header />
        <div className="overflow-scroll">
          <main className="mx-auto max-w-4xl">{<Outlet />}</main>
        </div>
        <div>
          <CartOverview />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default AppLayout;

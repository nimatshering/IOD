// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DashboardPage from "../components/DashboardPage";
import { DashboardTasks } from "../components/DashboardPage";
import BitcoinRates from "../pages/BitcoinRatesPage";
import PageNotFound from "../pages/PageNotFound";
import LoginForm from "../pages/Login";

// child components using {...props}
function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      {/* nested routes, matches on /dash/messages etc */}
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="/login" element={<LoginForm {...props} />} />
      <Route path="/bitcoinrates" element={<BitcoinRates {...props} />} />
      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default AppRoutes;

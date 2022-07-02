import { Route, Routes } from "react-router-dom";
import CreateCustomer from "../create-customer/create-customer.route";
import CustomerProfile from "../customer-profile/customer-profile.route";
import CustomersList from "../customers-list/customers-list.route";

const Customers = () => {
  return (
    <Routes>
      <Route index element={<CustomersList />} />
      <Route path="/:id" element={<CustomerProfile />} />
      <Route path="/create" element={<CreateCustomer />} />
    </Routes>
  )
}

export default Customers;
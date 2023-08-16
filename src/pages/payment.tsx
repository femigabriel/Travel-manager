import { Layout } from "@/components/layout/Layout";
import { Payment } from "@/components/payment/Payment";


export default function payment() {
  return (
    <>
      <Layout
        title="Payment"
        description="Here's the history of payment"
      >
        <Payment />
      </Layout>
    </>
  );
}

import { Layout } from "@/components/layout/Layout";
import { Schedule } from "@/components/schedule/Schedule";

export default function schedule() {
  return (
    <>
      <Layout title="Add Appointment" description="Add a new Appointment here">
        <Schedule />
      </Layout>
    </>
  );
}

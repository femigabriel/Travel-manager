import { Layout } from "@/components/layout/Layout";
import { Workspace } from "@/components/workfpace/Workspace";

export default function dashboard() {
  return (
    <Layout title="Your Workface" description="Welcome, xxx">
      <div className="py-10 px-10 w-full">
        <Workspace />
      </div>
    </Layout>
  );
}

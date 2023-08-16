"use client";

import { Layout } from "@/components/layout/Layout";
import { ClientTable } from "@/components/clients/ClientsTable";

export default function clients() {
  return (
    <div>
      <Layout title="Clients" description="Here's the clients list">
        <ClientTable />
      </Layout>
    </div>
  );
}

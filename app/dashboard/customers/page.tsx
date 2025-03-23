import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage() {
  const customers = await fetchCustomers();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map((customers) => (
          <div
            key={customers.id}
            className="rounded-lg border p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={customers.image_url}
              alt={customers.name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{customers.name}</h2>
            <p className="text-gray-600">{customers.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
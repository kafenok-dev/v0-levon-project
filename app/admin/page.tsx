import { FileText, Calendar, Users, Trophy, Image, Video, MessageSquare, Mail, ShoppingCart, CreditCard } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { name: 'Content Blocks', count: 0, icon: FileText, href: '/admin/content-blocks' },
  { name: 'Events', count: 0, icon: Calendar, href: '/admin/events' },
  { name: 'Players', count: 0, icon: Users, href: '/admin/players' },
  { name: 'Gallery Items', count: 0, icon: Image, href: '/admin/gallery' },
  { name: 'Videos', count: 0, icon: Video, href: '/admin/videos' },
  { name: 'Reviews', count: 0, icon: MessageSquare, href: '/admin/reviews' },
  { name: 'Contacts', count: 0, icon: Mail, href: '/admin/contacts' },
  { name: 'Orders', count: 0, icon: ShoppingCart, href: '/admin/orders' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your poker platform content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.count}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/events"
            className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            Create New Event
          </Link>
          <Link
            href="/admin/players"
            className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
          >
            Add Player
          </Link>
          <Link
            href="/admin/content-blocks"
            className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center font-medium"
          >
            Edit Content
          </Link>
        </div>
      </div>
    </div>
  );
}

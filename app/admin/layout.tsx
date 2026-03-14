import Link from 'next/link';
import { LayoutDashboard, FileText, Calendar, Users, Trophy, Image, Video, MessageSquare, Mail, ShoppingCart, CreditCard, Settings } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Content Blocks', href: '/admin/content-blocks', icon: FileText },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Players', href: '/admin/players', icon: Users },
  { name: 'Rankings', href: '/admin/rankings', icon: Trophy },
  { name: 'Roles', href: '/admin/roles', icon: Settings },
  { name: 'Gallery', href: '/admin/gallery', icon: Image },
  { name: 'Videos', href: '/admin/videos', icon: Video },
  { name: 'Reviews', href: '/admin/reviews', icon: MessageSquare },
  { name: 'Contacts', href: '/admin/contacts', icon: Mail },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Payments', href: '/admin/payments', icon: CreditCard },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-sm text-gray-500 mt-1">Poker CMS</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

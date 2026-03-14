'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function RankingsPage() {
  const [activeTab, setActiveTab] = useState<'city' | 'sport' | 'monthly'>('city');

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rankings</h1>
          <p className="text-gray-600 mt-2">Manage player rankings across categories</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('city')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'city'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            City Rankings
          </button>
          <button
            onClick={() => setActiveTab('sport')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'sport'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Sport Rankings
          </button>
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Monthly Top Players
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500 mb-4">
          {activeTab === 'city' && 'Manage city-based player rankings'}
          {activeTab === 'sport' && 'Manage sport/format-based player rankings'}
          {activeTab === 'monthly' && 'Manage monthly top players showcase'}
        </p>
        <Link
          href={`/admin/rankings/${activeTab}/new`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Ranking
        </Link>
      </div>
    </div>
  );
}

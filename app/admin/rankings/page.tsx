'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2 } from 'lucide-react';

export default function RankingsPage() {
  const [activeTab, setActiveTab] = useState<'city' | 'sport' | 'monthly'>('city');
  const [rankings, setRankings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRankings();
  }, [activeTab]);

  const fetchRankings = async () => {
    setLoading(true);
    let table = activeTab === 'city' ? 'rankings_city' : activeTab === 'sport' ? 'rankings_sport' : 'top_players_month';
    const { data } = await supabase.from(table).select('*, players(name)').order('month', { ascending: false }).order('rank', { ascending: true });
    if (data) setRankings(data);
    setLoading(false);
  };

  const deleteRanking = async (id: string) => {
    if (!confirm('Delete this ranking?')) return;
    let table = activeTab === 'city' ? 'rankings_city' : activeTab === 'sport' ? 'rankings_sport' : 'top_players_month';
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (!error) fetchRankings();
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Rankings</h1>
        <p className="text-gray-600 mt-2">Manage player rankings across categories</p>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('city')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'city' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>City Rankings</button>
          <button onClick={() => setActiveTab('sport')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'sport' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>Sport Rankings</button>
          <button onClick={() => setActiveTab('monthly')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'monthly' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>Monthly Top Players</button>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center"><p className="text-gray-500">Loading...</p></div>
      ) : rankings.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center"><p className="text-gray-500">No rankings found</p></div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Player</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{activeTab === 'city' ? 'City' : activeTab === 'sport' ? 'Sport' : 'Earnings'}</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{activeTab === 'monthly' ? 'Wins' : 'Points'}</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rankings.map((r: any) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm font-medium text-gray-900">#{r.rank}</div></td>
                  <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{r.players?.name || 'N/A'}</div></td>
                  <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{r.city || r.sport || `$${r.earnings?.toFixed(2) || 0}`}</div></td>
                  <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{r.points || r.tournaments_won || 0}</div></td>
                  <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{r.month}</div></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right"><button onClick={() => deleteRanking(r.id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

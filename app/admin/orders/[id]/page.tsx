'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditOrderPage() {
  const router = useRouter();
  const params = useParams();
  const [players, setPlayers] = useState<Array<{id: string; name: string}>>([]);
  const [events, setEvents] = useState<Array<{id: string; title: string}>>([]);
  const [formData, setFormData] = useState({
    player_id: '',
    event_id: '',
    order_type: 'event_registration',
    amount: '',
    status: 'pending',
    details: '{}',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPlayers();
    fetchEvents();
    fetchOrder();
  }, []);

  const fetchPlayers = async () => {
    const { data } = await supabase.from('players').select('id, name').order('name');
    if (data) setPlayers(data);
  };

  const fetchEvents = async () => {
    const { data } = await supabase.from('events').select('id, title').order('event_date', { ascending: false });
    if (data) setEvents(data);
  };

  const fetchOrder = async () => {
    const { data, error } = await supabase.from('orders').select('*').eq('id', params.id).maybeSingle();
    if (!error && data) {
      setFormData({
        player_id: data.player_id || '',
        event_id: data.event_id || '',
        order_type: data.order_type,
        amount: data.amount.toString(),
        status: data.status,
        details: JSON.stringify(data.details, null, 2),
      });
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const detailsData = JSON.parse(formData.details);
      const { error } = await supabase.from('orders').update({
        player_id: formData.player_id || null,
        event_id: formData.event_id || null,
        order_type: formData.order_type,
        amount: parseFloat(formData.amount),
        status: formData.status,
        details: detailsData,
        updated_at: new Date().toISOString(),
      }).eq('id', params.id);
      if (!error) {
        router.push('/admin/orders');
      } else {
        alert('Error updating order: ' + error.message);
      }
    } catch (err) {
      alert('Invalid JSON in details field');
    }
    setSaving(false);
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/orders" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Order</h1>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Player</label>
            <select value={formData.player_id} onChange={(e) => setFormData({ ...formData, player_id: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Select player</option>
              {players.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event</label>
            <select value={formData.event_id} onChange={(e) => setFormData({ ...formData, event_id: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">Select event</option>
              {events.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Order Type *</label>
            <select value={formData.order_type} onChange={(e) => setFormData({ ...formData, order_type: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="event_registration">Event Registration</option>
              <option value="merchandise">Merchandise</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount *</label>
            <input type="number" step="0.01" required value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
              <option value="refunded">Refunded</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Details (JSON)</label>
            <textarea value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm" />
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400">{saving ? 'Saving...' : 'Save Changes'}</button>
            <Link href="/admin/orders" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditReviewPage() {
  const router = useRouter();
  const params = useParams();
  const [players, setPlayers] = useState<Array<{id: string; name: string}>>([]);
  const [formData, setFormData] = useState({
    player_id: '',
    rating: 5,
    title: '',
    content: '',
    featured: false,
    approved: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPlayers();
    fetchReview();
  }, []);

  const fetchPlayers = async () => {
    const { data } = await supabase.from('players').select('id, name').order('name');
    if (data) setPlayers(data);
  };

  const fetchReview = async () => {
    const { data, error } = await supabase.from('reviews').select('*').eq('id', params.id).maybeSingle();
    if (!error && data) {
      setFormData({
        player_id: data.player_id || '',
        rating: data.rating,
        title: data.title || '',
        content: data.content,
        featured: data.featured,
        approved: data.approved,
      });
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from('reviews').update({
      player_id: formData.player_id || null,
      rating: formData.rating,
      title: formData.title || null,
      content: formData.content,
      featured: formData.featured,
      approved: formData.approved,
      updated_at: new Date().toISOString(),
    }).eq('id', params.id);
    if (!error) {
      router.push('/admin/reviews');
    } else {
      alert('Error updating review: ' + error.message);
    }
    setSaving(false);
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/reviews" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Review</h1>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Player</label>
            <select value={formData.player_id} onChange={(e) => setFormData({ ...formData, player_id: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">None</option>
              {players.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
            <select value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
            <textarea required value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={6} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="featured" checked={formData.featured} onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} className="w-4 h-4" />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="approved" checked={formData.approved} onChange={(e) => setFormData({ ...formData, approved: e.target.checked })} className="w-4 h-4" />
              <label htmlFor="approved" className="text-sm font-medium text-gray-700">Approved</label>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400">{saving ? 'Saving...' : 'Save Changes'}</button>
            <Link href="/admin/reviews" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

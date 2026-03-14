'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditPlayerPage() {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    bio: '',
    avatar_url: '',
    city: '',
    country: '',
    experience_level: 'beginner',
    total_earnings: '',
    tournaments_played: '0',
    tournaments_won: '0',
    is_host: false,
    is_featured: false,
    social_links: '{}',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchPlayer();
  }, []);

  const fetchPlayer = async () => {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('id', params.id)
      .maybeSingle();

    if (!error && data) {
      setFormData({
        name: data.name,
        nickname: data.nickname || '',
        bio: data.bio || '',
        avatar_url: data.avatar_url || '',
        city: data.city || '',
        country: data.country || '',
        experience_level: data.experience_level,
        total_earnings: data.total_earnings?.toString() || '',
        tournaments_played: data.tournaments_played.toString(),
        tournaments_won: data.tournaments_won.toString(),
        is_host: data.is_host,
        is_featured: data.is_featured,
        social_links: JSON.stringify(data.social_links, null, 2),
      });
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const socialData = JSON.parse(formData.social_links);

      const { error } = await supabase
        .from('players')
        .update({
          name: formData.name,
          nickname: formData.nickname || null,
          bio: formData.bio || null,
          avatar_url: formData.avatar_url || null,
          city: formData.city || null,
          country: formData.country || null,
          experience_level: formData.experience_level,
          total_earnings: formData.total_earnings ? parseFloat(formData.total_earnings) : 0,
          tournaments_played: parseInt(formData.tournaments_played),
          tournaments_won: parseInt(formData.tournaments_won),
          is_host: formData.is_host,
          is_featured: formData.is_featured,
          social_links: socialData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', params.id);

      if (!error) {
        router.push('/admin/players');
      } else {
        alert('Error updating player: ' + error.message);
      }
    } catch (err) {
      alert('Invalid JSON in social links field');
    }

    setSaving(false);
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/players"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Players
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Player</h1>
        <p className="text-gray-600 mt-2">Update player profile</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nickname
              </label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Avatar URL
              </label>
              <input
                type="url"
                value={formData.avatar_url}
                onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level
              </label>
              <select
                value={formData.experience_level}
                onChange={(e) => setFormData({ ...formData, experience_level: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Earnings
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.total_earnings}
                onChange={(e) => setFormData({ ...formData, total_earnings: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tournaments Played
              </label>
              <input
                type="number"
                value={formData.tournaments_played}
                onChange={(e) => setFormData({ ...formData, tournaments_played: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tournaments Won
              </label>
              <input
                type="number"
                value={formData.tournaments_won}
                onChange={(e) => setFormData({ ...formData, tournaments_won: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Social Links (JSON)
              </label>
              <textarea
                value={formData.social_links}
                onChange={(e) => setFormData({ ...formData, social_links: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              />
            </div>

            <div className="col-span-2 flex gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_host"
                  checked={formData.is_host}
                  onChange={(e) => setFormData({ ...formData, is_host: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="is_host" className="text-sm font-medium text-gray-700">
                  Is Host
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_featured"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="is_featured" className="text-sm font-medium text-gray-700">
                  Is Featured
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <Link
              href="/admin/players"
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

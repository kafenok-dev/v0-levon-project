'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditVideoPage() {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    video_url: '',
    thumbnail_url: '',
    platform: 'youtube',
    duration: '',
    category: '',
    order: 0,
    published: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .eq('id', params.id)
      .maybeSingle();

    if (!error && data) {
      setFormData({
        title: data.title,
        description: data.description || '',
        video_url: data.video_url,
        thumbnail_url: data.thumbnail_url || '',
        platform: data.platform,
        duration: data.duration?.toString() || '',
        category: data.category || '',
        order: data.order,
        published: data.published,
      });
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase
      .from('videos')
      .update({
        title: formData.title,
        description: formData.description || null,
        video_url: formData.video_url,
        thumbnail_url: formData.thumbnail_url || null,
        platform: formData.platform,
        duration: formData.duration ? parseInt(formData.duration) : null,
        category: formData.category || null,
        order: formData.order,
        published: formData.published,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id);

    if (!error) {
      router.push('/admin/videos');
    } else {
      alert('Error updating video: ' + error.message);
    }

    setSaving(false);
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/videos" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Videos
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Edit Video</h1>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
            <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Video URL *</label>
            <input type="url" required value={formData.video_url} onChange={(e) => setFormData({ ...formData, video_url: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL</label>
            <input type="url" value={formData.thumbnail_url} onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
              <select value={formData.platform} onChange={(e) => setFormData({ ...formData, platform: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="youtube">YouTube</option>
                <option value="vimeo">Vimeo</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration (seconds)</label>
              <input type="number" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <input type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
              <input type="number" value={formData.order} onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="published" checked={formData.published} onChange={(e) => setFormData({ ...formData, published: e.target.checked })} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
            <label htmlFor="published" className="text-sm font-medium text-gray-700">Published</label>
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400">{saving ? 'Saving...' : 'Save Changes'}</button>
            <Link href="/admin/videos" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

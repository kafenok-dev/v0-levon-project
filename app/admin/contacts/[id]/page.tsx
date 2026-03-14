'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditContactPage() {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    status: 'new',
    notes: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    const { data, error } = await supabase.from('contacts').select('*').eq('id', params.id).maybeSingle();
    if (!error && data) {
      setFormData({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        subject: data.subject || '',
        message: data.message,
        status: data.status,
        notes: data.notes || '',
      });
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from('contacts').update({
      status: formData.status,
      notes: formData.notes || null,
      updated_at: new Date().toISOString(),
    }).eq('id', params.id);
    if (!error) {
      router.push('/admin/contacts');
    } else {
      alert('Error updating contact: ' + error.message);
    }
    setSaving(false);
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/contacts" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"><ArrowLeft className="w-4 h-4" />Back</Link>
        <h1 className="text-3xl font-bold text-gray-900">View Contact</h1>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" value={formData.name} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" value={formData.email} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="text" value={formData.phone} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" value={formData.subject} readOnly className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea value={formData.message} readOnly rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Add admin notes here..." />
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400">{saving ? 'Saving...' : 'Save Changes'}</button>
            <Link href="/admin/contacts" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

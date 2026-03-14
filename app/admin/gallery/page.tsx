'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

type GalleryItem = {
  id: string;
  title: string | null;
  image_url: string;
  category: string | null;
  order: number;
  published: boolean;
  created_at: string;
};

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('order', { ascending: true });

    if (!error && data) {
      setItems(data);
    }
    setLoading(false);
  };

  const deleteItem = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;

    const { error } = await supabase
      .from('gallery_items')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchItems();
    }
  };

  const togglePublished = async (id: string, published: boolean) => {
    const { error } = await supabase
      .from('gallery_items')
      .update({ published: !published, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (!error) {
      fetchItems();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-600 mt-2">Manage photo gallery items</p>
        </div>
        <Link
          href="/admin/gallery/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Item
        </Link>
      </div>

      {loading ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No gallery items found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title || 'Gallery item'}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">{item.title || 'Untitled'}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.category || 'Uncategorized'}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => togglePublished(item.id, item.published)}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      item.published
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {item.published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                    {item.published ? 'Published' : 'Draft'}
                  </button>
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/gallery/${item.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

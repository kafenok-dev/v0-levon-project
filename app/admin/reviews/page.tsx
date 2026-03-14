'use client';

import { useState, useEffect } from 'react';
import { Plus, CreditCard as Edit, Trash2, Star } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

type Review = {
  id: string;
  rating: number;
  title: string | null;
  content: string;
  featured: boolean;
  approved: boolean;
  created_at: string;
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
    setLoading(false);
  };

  const deleteReview = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchReviews();
    }
  };

  const toggleApproved = async (id: string, approved: boolean) => {
    const { error } = await supabase
      .from('reviews')
      .update({ approved: !approved, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (!error) {
      fetchReviews();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reviews</h1>
          <p className="text-gray-600 mt-2">Manage player testimonials and reviews</p>
        </div>
        <Link
          href="/admin/reviews/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Review
        </Link>
      </div>

      {loading ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : reviews.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No reviews found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    {review.featured && (
                      <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Featured
                      </span>
                    )}
                  </div>
                  {review.title && (
                    <h3 className="font-medium text-gray-900 mb-1">{review.title}</h3>
                  )}
                  <p className="text-sm text-gray-600">{review.content}</p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => toggleApproved(review.id, review.approved)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      review.approved
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {review.approved ? 'Approved' : 'Pending'}
                  </button>
                  <Link
                    href={`/admin/reviews/${review.id}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

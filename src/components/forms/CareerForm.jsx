import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import Button from '../common/Button';
import { mockSubmit } from '../../services/api';

export default function CareerForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await mockSubmit(data, 'Job Application');
      setSuccess(true);
      reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-200">
      <h3 className="font-serif text-2xl font-bold text-[#17344E] mb-2">
        Submit Your Application
      </h3>
      <p className="text-sm text-[#646B73] mb-6">
        Join our dedicated faculty of educators and administrative mentors at Stracey Memorial.
      </p>

      {success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold">Application received!</span> Thank you for your interest in teaching at Stracey. Our management committee will review your profile.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Applicant Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Dr. Jane Smith"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm"
            />
            {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="applicant@example.com"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm"
            />
            {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Contact Phone *
            </label>
            <input
              type="tel"
              placeholder="+91..."
              {...register('phone', { required: 'Phone is required' })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Applying Position *
            </label>
            <select
              {...register('position', { required: 'Position is required' })}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm bg-white"
            >
              <option value="PU Lecturer - Science">PU Lecturer — Science (Physics / Chem / Bio / Maths / CS)</option>
              <option value="PU Lecturer - Commerce">PU Lecturer — Commerce & Accountancy</option>
              <option value="High School Teacher">High School Teacher (Karnataka SSLC)</option>
              <option value="Primary School Teacher">Primary School Teacher</option>
              <option value="Physical Education">Physical Education & Sports Coach</option>
              <option value="Administration">Administrative & Support Staff</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
            Highest Academic Qualification & Experience *
          </label>
          <input
            type="text"
            placeholder="e.g. M.Sc. in Physics, B.Ed. with 5 years PU teaching experience"
            {...register('qualification', { required: 'Qualification is required' })}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
            Cover Letter / Teaching Philosophy
          </label>
          <textarea
            rows={4}
            placeholder="Describe your subject expertise and classroom methodology..."
            {...register('coverLetter')}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm"
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={loading}
          icon={loading ? Loader2 : Send}
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </Button>
      </form>
    </div>
  );
}

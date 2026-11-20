import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import Button from '../common/Button';
import { mockSubmit } from '../../services/api';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage('');
    try {
      await mockSubmit(data, 'Contact Enquiry');
      setSuccess(true);
      reset();
    } catch (err) {
      setErrorMessage('Could not send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-200">
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-[#17344E]">
          Send Us a Message
        </h3>
        <p className="text-sm text-[#646B73] mt-1">
          Have an administrative, academic, or general query? Send our campus team a message.
        </p>
      </div>

      {success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold">Message sent!</span> We will review your enquiry and get back to you shortly.
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-xs">{errorMessage}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="Full name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                errors.name ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              {...register('email', { required: 'Email is required' })}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
                errors.email ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91..."
              {...register('phone')}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
              Department
            </label>
            <select
              {...register('department')}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm bg-white"
            >
              <option value="General">General Inquiries</option>
              <option value="Admissions">Admissions Desk</option>
              <option value="PU College">PU College Office</option>
              <option value="High School">High School Office</option>
              <option value="Accounts">Accounts & Fees</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            placeholder="Brief subject of inquiry"
            {...register('subject', { required: 'Subject is required' })}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
              errors.subject ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.subject && <span className="text-xs text-red-500 mt-1">{errors.subject.message}</span>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-[#17344E] mb-1.5">
            Message *
          </label>
          <textarea
            rows={4}
            placeholder="Type your message here..."
            {...register('message', { required: 'Message is required' })}
            className={`w-full px-4 py-2.5 rounded-lg border text-sm ${
              errors.message ? 'border-red-400' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={loading}
          icon={loading ? Loader2 : Send}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import Button from '../common/Button';
import { mockSubmit } from '../../services/api';

export default function AdmissionEnquiryForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage('');
    try {
      await mockSubmit(data, 'Admission Enquiry');
      setSuccess(true);
      reset();
    } catch (err) {
      setErrorMessage('Failed to submit enquiry. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-200">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#17344E]">
          Online Admission Enquiry
        </h3>
        <p className="text-sm text-[#646B73] mt-2">
          Please fill in the details below. Our admissions coordinator will review and contact you with enrollment information.
        </p>
      </div>

      {success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Enquiry Submitted Successfully!</h4>
            <p className="text-xs text-emerald-700 mt-0.5">
              Thank you for your interest in Stracey Memorial Education Society. Our admissions team at St. Mark's Road will be in touch with you shortly.
            </p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-xs">{errorMessage}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Parent/Guardian Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
              Parent / Guardian Name *
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              {...register('parentName', { required: 'Parent name is required' })}
              className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.parentName ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-[#234E78]'
              }`}
            />
            {errors.parentName && (
              <span className="text-xs text-red-500 mt-1 block">{errors.parentName.message}</span>
            )}
          </div>

          {/* Student Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
              Student Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Daniel Doe"
              {...register('studentName', { required: 'Student name is required' })}
              className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.studentName ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-[#234E78]'
              }`}
            />
            {errors.studentName && (
              <span className="text-xs text-red-500 mt-1 block">{errors.studentName.message}</span>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="+91 98450 12345"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Please enter a valid phone number' }
              })}
              className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-[#234E78]'
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="parent@example.com"
              {...register('email', { 
                required: 'Email address is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Please enter a valid email address' }
              })}
              className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-[#234E78]'
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
            )}
          </div>

          {/* Applying Division/Class */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
              Applying For Division / Class *
            </label>
            <select
              {...register('applyingFor', { required: 'Please select a division or stream' })}
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-all focus:outline-none focus:ring-2 ${
                errors.applyingFor ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-[#234E78]'
              }`}
            >
              <option value="">Select Division</option>
              <option value="Nursery">Nursery / Kindergarten</option>
              <option value="Primary School (Class 1-7)">Primary School (Class 1 to 7)</option>
              <option value="High School (Class 8-10)">High School (Class 8 to 10 - SSLC)</option>
              <option value="PUC Science (PCMB)">I PUC Science — PCMB</option>
              <option value="PUC Science (PCMC)">I PUC Science — PCMC</option>
              <option value="PUC Commerce (CEBA)">I PUC Commerce — CEBA</option>
              <option value="PUC Commerce (HEBA)">I PUC Commerce — HEBA</option>
              <option value="PUC Commerce (SEBA)">I PUC Commerce — SEBA</option>
            </select>
            {errors.applyingFor && (
              <span className="text-xs text-red-500 mt-1 block">{errors.applyingFor.message}</span>
            )}
          </div>

          {/* Previous School */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
              Current / Previous School
            </label>
            <input
              type="text"
              placeholder="Name of school previously attended"
              {...register('currentSchool')}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#234E78]"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
            Residential Address in Bengaluru
          </label>
          <input
            type="text"
            placeholder="Area, Street, Pincode (e.g. Indiranagar, Bengaluru - 560038)"
            {...register('address')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#234E78]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#17344E] mb-2">
            Specific Questions or Special Requests
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about student interests, stream preferences, or specific queries..."
            {...register('message')}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#234E78]"
          ></textarea>
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            icon={loading ? Loader2 : Send}
            className="w-full sm:w-auto"
          >
            {loading ? 'Submitting Enquiry...' : 'Submit Admission Enquiry'}
          </Button>
        </div>
      </form>
    </div>
  );
}

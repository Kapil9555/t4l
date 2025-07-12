'use client';
import { useState } from 'react';
import Image from 'next/image';

/* Shared Input Class */
const baseInputClass =
  'w-full px-4 py-2 text-sm rounded-xl border bg-gray-50 text-gray-800 shadow-inner ' +
  'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ' +
  'hover:border-blue-400 transition-all duration-150';

/* Text Input */
export function TextInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  className = '',
}) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${baseInputClass} ${className}`}
      />
    </div>
  );
}

/* Textarea Input */
export function TextareaInput({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  className = '',
}) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={4}
        className={`${baseInputClass} resize-none ${className}`}
      />
    </div>
  );
}

/* Select Input */
export function SelectInput({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  className = '',
}) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseInputClass} ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

/* Image Input */
export function ImageInput({
  label,
  name,
  value,
  onChange,
  placeholder = 'Paste image URL',
  className = '',
}) {
  const [preview, setPreview] = useState(value || '');

  const handleChange = (e) => {
    const url = e.target.value;
    setPreview(url);
    onChange(e);
  };

  return (
    <div className="w-full space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${baseInputClass} ${className}`}
      />
      {preview && (
        <div className="mt-2 w-fit overflow-hidden rounded-xl border shadow-sm">
          <Image src={preview} alt="Preview" width={120} height={80} className="object-cover" />
        </div>
      )}
    </div>
  );
}


export function ImageUploadInput({
  label,
  name,
  onChange,
  className = '',
}) {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const imageFiles = newFiles.filter((file) => file.type.startsWith('image/'));

    const newPreviews = imageFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    // Append to existing previews
    setPreviews((prev) => [...prev, ...newPreviews]);

    // Pass full file list to parent (optional logic: accumulate in parent too)
    onChange({
      target: {
        name,
        files: [...(previews.map((p) => p.file)), ...imageFiles],
      },
    });
  };

  return (
    <div className="w-full space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-gray-600">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className={`block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 
          file:rounded-lg file:border-0 file:text-sm file:font-semibold 
          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
          ${className}`}
      />

      {previews.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {previews.map((img, idx) => (
            <div key={idx} className="w-28 h-20 overflow-hidden rounded-xl border shadow-sm">
              <img
                src={img.url}
                alt={`Preview ${idx}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
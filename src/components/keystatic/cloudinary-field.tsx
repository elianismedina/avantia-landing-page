import type { BasicFormField } from '@keystatic/core';
import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    cloudinary: any;
  }
}

export const cloudinaryImage = (options: { label: string; defaultValue?: string }): BasicFormField<string | null> => {
  return {
    kind: 'form',
    label: options.label,
    defaultValue() {
      return options.defaultValue ?? null;
    },
    parse(value) {
      if (value === undefined) return null;
      if (typeof value !== 'string') return null;
      return value;
    },
    serialize(value) {
      return { value: value ?? undefined };
    },
    validate(value) {
      if (value !== null && typeof value !== 'string') {
        throw new Error('Must be a string');
      }
      return value;
    },
    reader: {
      parse(value) {
        if (value === undefined) return null;
        if (typeof value !== 'string') return null;
        return value;
      },
    },
    Input(props) {
      const [scriptLoaded, setScriptLoaded] = useState(false);

      // Fetch environment variables from Astro / Vite
      const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || '';
      const uploadPreset = import.meta.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET || '';

      useEffect(() => {
        if (window.cloudinary) {
          setScriptLoaded(true);
          return;
        }

        const script = document.createElement('script');

        script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
      }, []);

      const openWidget = () => {
        if (!window.cloudinary) return;

        if (!cloudName || !uploadPreset || cloudName === 'your_cloud_name') {
          alert(
            'Cloudinary credentials are not configured.\nPlease set PUBLIC_CLOUDINARY_CLOUD_NAME and PUBLIC_CLOUDINARY_UPLOAD_PRESET in your .env file.'
          );
          return;
        }

        const widget = window.cloudinary.createUploadWidget(
          {
            cloudName,
            uploadPreset,
            sources: ['local', 'url', 'camera', 'image_search'],
            multiple: false,
          },
          (error: any, result: any) => {
            if (!error && result && result.event === 'success') {
              props.onChange(result.info.secure_url);
            }
          }
        );

        widget.open();
      };

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#111827' }}>
            {options.label}
          </span>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input
              type="text"
              value={props.value || ''}
              onChange={(e) => props.onChange(e.target.value)}
              placeholder="Cloudinary Image URL"
              style={{
                flex: 1,
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={openWidget}
              disabled={!scriptLoaded}
              style={{
                padding: '8px 16px',
                backgroundColor: scriptLoaded ? '#2563eb' : '#9ca3af',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: scriptLoaded ? 'pointer' : 'not-allowed',
              }}
            >
              Upload/Browse
            </button>
          </div>
          {props.value && (
            <div style={{ marginTop: '8px' }}>
              <img
                src={props.value}
                alt="Preview"
                style={{
                  maxWidth: '100%',
                  maxHeight: '160px',
                  borderRadius: '6px',
                  border: '1px solid #e5e7eb',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>
      );
    },
  };
};

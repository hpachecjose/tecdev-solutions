import React from 'react';

export const OperatingSystemIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const SoftwareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export const HardwareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.6C8.75 21.41 10.36 21.85 12.04 21.85C17.5 21.85 21.95 17.4 21.95 11.91C21.95 9.28 20.94 6.81 19.05 4.92C17.16 3.03 14.7 2 12.04 2M12.04 3.63C16.56 3.63 20.32 7.39 20.32 11.91C20.32 16.43 16.56 20.19 12.04 20.19C10.5 20.19 9.03 19.78 7.76 19.05L7.33 18.8L3.91 19.83L4.97 16.5L4.72 16.05C3.93 14.72 3.5 13.25 3.5 11.91C3.5 7.39 7.26 3.63 12.04 3.63M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.64 7.89 7 8.5 7 9.71C7 10.93 7.87 12.1 8 12.28C8.14 12.45 9.75 15.03 12.35 16.03C14.53 16.86 14.95 16.76 15.35 16.71C15.81 16.65 16.78 16.08 16.99 15.48C17.2 14.88 17.2 14.38 17.11 14.28C17.03 14.18 16.87 14.13 16.63 14C16.4 13.88 15.25 13.3 15.03 13.21C14.8 13.12 14.65 13.08 14.5 13.33C14.35 13.58 13.91 14.11 13.76 14.28C13.61 14.45 13.47 14.48 13.24 14.35C13 14.23 12.08 13.9 10.96 12.91C10.11 12.16 9.53 11.25 9.38 10.98C9.23 10.71 9.35 10.59 9.47 10.47C9.58 10.35 9.73 10.16 9.85 10C9.97 9.85 10.02 9.75 10.11 9.58C10.2 9.41 10.16 9.25 10.08 9.13C10 9.03 9.43 7.5 9.18 7.28C8.93 7.06 8.7 7.05 8.53 7.05V7.33Z" />
    </svg>
);
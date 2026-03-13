
import React from 'react';
import { Icons } from './figma/Icons';

interface ProfilePageProps {
    onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <div className="h-[60px] flex items-center px-6 gap-4 shrink-0" style={{ borderBottom: '1px solid var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}>
        <button
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
            <Icons.ArrowLeft />
        </button>
        <h1 className="text-[18px] font-bold" style={{ color: 'var(--text-bright)' }}>My Profile</h1>
      </div>

      {/* Content Scroll Area */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[800px] mx-auto flex flex-col gap-8">

            {/* User Header Card */}
            <div className="rounded-[8px] p-6 flex items-center gap-6 shadow-lg" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center text-[24px] font-bold text-white shadow-md" style={{ backgroundColor: 'var(--accent-blue)', border: '4px solid var(--bg-primary)' }}>
                    AB
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[24px] font-semibold" style={{ color: 'var(--text-bright)' }}>Alex Brown</h2>
                    <span className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Senior Operations Manager</span>
                    <span className="text-[12px] mt-1" style={{ color: 'var(--text-tertiary)' }}>ID: 882910</span>
                </div>
                <div className="ml-auto">
                    <button className="px-4 py-2 text-white rounded-[4px] text-[12px] font-bold uppercase tracking-wider transition-colors shadow-sm" style={{ backgroundColor: 'var(--accent-blue)' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-blue-hover)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent-blue)'}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Personal Information Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <h3 className="text-[14px] font-bold uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>Personal Information</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold" style={{ color: 'var(--text-secondary)' }}>First Name</label>
                        <div className="rounded-[4px] px-4 py-3 text-[14px]" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', color: 'var(--text-primary)' }}>
                            Alex
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold" style={{ color: 'var(--text-secondary)' }}>Last Name</label>
                        <div className="rounded-[4px] px-4 py-3 text-[14px]" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', color: 'var(--text-primary)' }}>
                            Brown
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold" style={{ color: 'var(--text-secondary)' }}>Email Address</label>
                        <div className="rounded-[4px] px-4 py-3 text-[14px]" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', color: 'var(--text-primary)' }}>
                            alex.brown@optibus.com
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold" style={{ color: 'var(--text-secondary)' }}>Phone Number</label>
                        <div className="rounded-[4px] px-4 py-3 text-[14px]" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)', color: 'var(--text-primary)' }}>
                            +44 7700 900077
                        </div>
                    </div>
                </div>
            </div>

            {/* Preferences Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2" style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <h3 className="text-[14px] font-bold uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>Preferences</h3>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Toggle Item */}
                    <div className="flex items-center justify-between p-4 rounded-[8px]" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-bold" style={{ color: 'var(--text-primary)' }}>Email Notifications</span>
                            <span className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>Receive daily summaries of schedule changes</span>
                        </div>
                        <div className="w-[40px] h-[20px] rounded-full relative cursor-pointer" style={{ backgroundColor: 'var(--accent-green)' }}>
                            <div className="absolute right-1 top-1 bottom-1 w-[18px] bg-white rounded-full shadow-sm"></div>
                        </div>
                    </div>

                    {/* Toggle Item */}
                    <div className="flex items-center justify-between p-4 rounded-[8px]" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-bold" style={{ color: 'var(--text-primary)' }}>Dark Mode</span>
                            <span className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>Use the system dark theme (Recommended)</span>
                        </div>
                        <div className="w-[40px] h-[20px] rounded-full relative cursor-pointer" style={{ backgroundColor: 'var(--accent-green)' }}>
                            <div className="absolute right-1 top-1 bottom-1 w-[18px] bg-white rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

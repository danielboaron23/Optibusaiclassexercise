
import React from 'react';
import { Icons } from './figma/Icons';

interface ProfilePageProps {
    onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  return (
    <div className="w-full h-full bg-[#282e36] text-[#dfe1e5] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="h-[60px] border-b border-[#464b59] flex items-center px-6 gap-4 shrink-0 bg-[#22272e]">
        <button 
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#303745] text-[#bdc1c9] transition-colors"
        >
            <Icons.ArrowLeft />
        </button>
        <h1 className="text-[18px] font-bold text-[#f2f3f5]">My Profile</h1>
      </div>

      {/* Content Scroll Area */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[800px] mx-auto flex flex-col gap-8">
            
            {/* User Header Card */}
            <div className="bg-[#303745] border border-[#464b59] rounded-[8px] p-6 flex items-center gap-6 shadow-lg">
                <div className="w-[80px] h-[80px] rounded-full bg-[#2868fc] flex items-center justify-center text-[24px] font-bold text-white border-4 border-[#282e36] shadow-md">
                    AB
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[24px] font-semibold text-[#f2f3f5]">Alex Brown</h2>
                    <span className="text-[14px] text-[#bdc1c9]">Senior Operations Manager</span>
                    <span className="text-[12px] text-[#adb1ba] mt-1">ID: 882910</span>
                </div>
                <div className="ml-auto">
                    <button className="px-4 py-2 bg-[#2868fc] hover:bg-[#1e54d6] text-white rounded-[4px] text-[12px] font-bold uppercase tracking-wider transition-colors shadow-sm">
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Personal Information Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[#464b59] pb-2">
                    <h3 className="text-[14px] font-bold text-[#dfe1e5] uppercase tracking-wide">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold text-[#bdc1c9]">First Name</label>
                        <div className="bg-[#22272e] border border-[#464b59] rounded-[4px] px-4 py-3 text-[14px] text-[#dfe1e5]">
                            Alex
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold text-[#bdc1c9]">Last Name</label>
                        <div className="bg-[#22272e] border border-[#464b59] rounded-[4px] px-4 py-3 text-[14px] text-[#dfe1e5]">
                            Brown
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold text-[#bdc1c9]">Email Address</label>
                        <div className="bg-[#22272e] border border-[#464b59] rounded-[4px] px-4 py-3 text-[14px] text-[#dfe1e5]">
                            alex.brown@optibus.com
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[12px] font-bold text-[#bdc1c9]">Phone Number</label>
                        <div className="bg-[#22272e] border border-[#464b59] rounded-[4px] px-4 py-3 text-[14px] text-[#dfe1e5]">
                            +44 7700 900077
                        </div>
                    </div>
                </div>
            </div>

            {/* Preferences Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[#464b59] pb-2">
                    <h3 className="text-[14px] font-bold text-[#dfe1e5] uppercase tracking-wide">Preferences</h3>
                </div>

                <div className="flex flex-col gap-3">
                    {/* Toggle Item */}
                    <div className="flex items-center justify-between p-4 bg-[#22272e] border border-[#464b59] rounded-[8px]">
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-bold text-[#dfe1e5]">Email Notifications</span>
                            <span className="text-[12px] text-[#bdc1c9]">Receive daily summaries of schedule changes</span>
                        </div>
                        <div className="w-[40px] h-[20px] bg-[#36cc68] rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 bottom-1 w-[18px] bg-white rounded-full shadow-sm"></div>
                        </div>
                    </div>

                    {/* Toggle Item */}
                    <div className="flex items-center justify-between p-4 bg-[#22272e] border border-[#464b59] rounded-[8px]">
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-bold text-[#dfe1e5]">Dark Mode</span>
                            <span className="text-[12px] text-[#bdc1c9]">Use the system dark theme (Recommended)</span>
                        </div>
                        <div className="w-[40px] h-[20px] bg-[#36cc68] rounded-full relative cursor-pointer">
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

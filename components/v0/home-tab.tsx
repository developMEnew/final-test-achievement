import React from 'react';

export function HomeTab() {
  return (
    <div className="p-4 space-y-4">
      <div className="bg-blue-500 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm opacity-80">LABEL</p>
            <p className="font-medium">Label</p>
          </div>
          <div>
            <p className="text-sm opacity-80">JAN</p>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">45,890</h1>
        <div className="flex justify-between items-center">
          <p>45,890</p>
          <p>100%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Available Working days</p>
          <p className="text-2xl font-semibold">22</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">percentage</p>
          <p className="text-2xl font-semibold">22.56%</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Daily</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-gray-600 text-sm mb-2">need for 100%</p>
            <p className="text-2xl font-semibold">6544</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-gray-600 text-sm mb-2">daily percentage</p>
            <p className="text-2xl font-semibold">67.56%</p>
          </div>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-4 rounded-xl font-medium">
        ADD NEW CLIP
      </button>
    </div>
  );
}
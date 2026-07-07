"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [animated, setAnimated] = useState(false);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Trigger animations
  useEffect(() => {
    setTimeout(() => setAnimated(true), 200);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  // Mock Data: User Profile
  const userProfile = {
    name: 'สมชาย รักสุขภาพ',
    weight: 70, // kg
    height: 175, // cm
  };

  // Mock Data: Calories & Macros
  const goal = 2000;
  const foodIn = 1250;
  const exerciseOut = 350;
  const net = foodIn - exerciseOut;
  const remaining = goal - net;

  const macros = {
    protein: { current: 60, target: 120, color: '#ef4444' }, // 50%
    carbs: { current: 150, target: 200, color: '#3b82f6' }, // 75%
    fat: { current: 30, target: 65, color: '#f59e0b' } // ~46%
  };

  return (
    <main style={{ padding: '2rem 1rem 6rem 1rem', display: 'flex', flex: '1', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
      
      {/* User Profile Section */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label style={{ cursor: 'pointer', position: 'relative', title: 'เปลี่ยนรูปโปรไฟล์' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', overflow: 'hidden' }}>
              {avatarUrl ? (
                <img src={avatarUrl} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                'ส'
              )}
            </div>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              style={{ display: 'none' }} 
            />
          </label>
          <div>
            <h1 style={{ fontSize: '1.125rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              สวัสดี, คุณ{userProfile.name}
              <span style={{ fontSize: '0.75rem', backgroundColor: '#fef08a', color: '#b45309', padding: '0.125rem 0.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: '600', opacity: animated ? 1 : 0, transform: animated ? 'scale(1)' : 'scale(0.8)', transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                🔥 5 วัน
              </span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              น้ำหนัก: {userProfile.weight} กก. | ส่วนสูง: {userProfile.height} ซม.
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.25rem' }}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </section>

      <header style={{ textAlign: 'center', marginTop: '0.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>สรุปข้อมูลประจำวัน</h2>
      </header>

      {/* Main Calorie Ring / Summary */}
      <section className="card" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--text-muted)', fontWeight: '500' }}>แคลอรี่ที่ทานได้อีก</h3>
        <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--foreground)', marginBottom: '1rem', opacity: animated ? 1 : 0, transform: animated ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.5s ease' }}>
          {remaining}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', opacity: animated ? 1 : 0, transition: 'all 0.5s ease 0.2s' }}>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>เป้าหมาย</div>
            <div style={{ fontWeight: '600' }}>{goal}</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>กินไปแล้ว</div>
            <div style={{ fontWeight: '600', color: 'var(--primary)' }}>{foodIn}</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>ออกกำลังกาย</div>
            <div style={{ fontWeight: '600', color: 'var(--success)' }}>{exerciseOut}</div>
          </div>
        </div>

        {/* Macros Section */}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', width: '40px', textAlign: 'left', fontWeight: '600' }}>โปรตีน</span>
            <div style={{ flex: 1, backgroundColor: 'var(--background)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: animated ? `${(macros.protein.current / macros.protein.target) * 100}%` : '0%', backgroundColor: macros.protein.color, height: '100%', borderRadius: '4px', transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s' }}></div>
            </div>
            <span style={{ fontSize: '0.75rem', width: '55px', textAlign: 'right', color: 'var(--text-muted)' }}>{macros.protein.current}/{macros.protein.target}g</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', width: '40px', textAlign: 'left', fontWeight: '600' }}>คาร์บ</span>
            <div style={{ flex: 1, backgroundColor: 'var(--background)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: animated ? `${(macros.carbs.current / macros.carbs.target) * 100}%` : '0%', backgroundColor: macros.carbs.color, height: '100%', borderRadius: '4px', transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s' }}></div>
            </div>
            <span style={{ fontSize: '0.75rem', width: '55px', textAlign: 'right', color: 'var(--text-muted)' }}>{macros.carbs.current}/{macros.carbs.target}g</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', width: '40px', textAlign: 'left', fontWeight: '600' }}>ไขมัน</span>
            <div style={{ flex: 1, backgroundColor: 'var(--background)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: animated ? `${(macros.fat.current / macros.fat.target) * 100}%` : '0%', backgroundColor: macros.fat.color, height: '100%', borderRadius: '4px', transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s' }}></div>
            </div>
            <span style={{ fontSize: '0.75rem', width: '55px', textAlign: 'right', color: 'var(--text-muted)' }}>{macros.fat.current}/{macros.fat.target}g</span>
          </div>
        </div>
      </section>

      {/* Food Activity */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', margin: 0 }}>มื้ออาหาร</h3>
          <Link href="/food" style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: '500' }}>ดูทั้งหมด</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500' }}>สลัดอกไก่</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>มื้อเที่ยง</div>
            </div>
            <div style={{ fontWeight: '600', color: 'var(--primary)' }}>350 kcal</div>
          </div>
        </div>
      </section>

      {/* Exercise Activity */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', margin: 0 }}>ออกกำลังกาย</h3>
            <span style={{ color: 'var(--success)', fontSize: '0.75rem', fontWeight: '500', backgroundColor: '#dcfce7', padding: '0.125rem 0.5rem', borderRadius: '9999px' }}>Strava ซิงค์แล้ว</span>
          </div>
          <Link href="/exercise" style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: '500' }}>ดูทั้งหมด</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500' }}>วิ่งตอนเช้า</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Strava</div>
            </div>
            <div style={{ fontWeight: '600', color: 'var(--success)' }}>-350 kcal</div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation Bar */}
      <nav style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '100%', 
        maxWidth: '480px', 
        backgroundColor: 'var(--card-bg)', 
        borderTop: '1px solid var(--border)',
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        padding: '0.75rem 0.5rem',
        boxShadow: '0 -4px 6px -1px rgb(0 0 0 / 0.05)',
        zIndex: 50
      }}>
        {/* Date Selector Tab */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: 'var(--background)', padding: '0.25rem 0.5rem', borderRadius: '16px' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.75rem' }}>&lt;</button>
            <input 
              type="date" 
              defaultValue="2026-07-07"
              style={{ border: 'none', background: 'transparent', fontWeight: '500', fontSize: '0.75rem', outline: 'none', cursor: 'pointer', color: 'var(--foreground)', padding: 0 }} 
            />
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.75rem' }} disabled>&gt;</button>
          </div>
          <span style={{ fontSize: '0.65rem', fontWeight: '500', color: 'var(--text-muted)' }}>เลือกวัน</span>
        </div>

        {/* Add Menu Tab */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--primary)', gap: '0.25rem', position: 'relative' }}>
          
          {/* Popup Menu */}
          {showAddMenu && (
            <div style={{
              position: 'absolute',
              bottom: '60px',
              backgroundColor: 'var(--card-bg)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              padding: '0.5rem',
              gap: '0.5rem',
              width: '200px',
              zIndex: 100
            }}>
              <Link href="/food" style={{ padding: '0.75rem', borderRadius: '8px', textAlign: 'center', backgroundColor: 'var(--background)', fontWeight: '500', color: 'var(--foreground)' }}>
                🍔 เพิ่มมื้ออาหาร
              </Link>
              <Link href="/exercise" style={{ padding: '0.75rem', borderRadius: '8px', textAlign: 'center', backgroundColor: 'var(--background)', fontWeight: '500', color: 'var(--foreground)' }}>
                🏃‍♂️ เพิ่มการออกกำลังกาย
              </Link>
            </div>
          )}

          <button 
            onClick={() => setShowAddMenu(!showAddMenu)}
            style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
            {showAddMenu ? '×' : '+'}
          </button>
          <span style={{ fontSize: '0.65rem', fontWeight: '600' }}>บันทึก</span>
        </div>

        {/* Sync Tab */}
        <Link href="/exercise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', gap: '0.25rem' }}>
          <div style={{ fontSize: '1.25rem' }}>🔄</div>
          <span style={{ fontSize: '0.65rem', fontWeight: '500' }}>ซิงค์กิจกรรม</span>
        </Link>

        {/* Settings/Profile Tab */}
        <Link href="/profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', gap: '0.25rem' }}>
          <div style={{ fontSize: '1.25rem' }}>👤</div>
          <span style={{ fontSize: '0.65rem', fontWeight: '500' }}>ตั้งค่า</span>
        </Link>
      </nav>

    </main>
  );
}

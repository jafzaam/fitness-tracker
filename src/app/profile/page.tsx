"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProfileSettings() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.2);
  
  const [goalType, setGoalType] = useState('tdee'); // 'tdee' or 'manual'
  const [manualGoal, setManualGoal] = useState(2000);

  // Calculations
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  // Mifflin-St Jeor Equation
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  if (gender === 'male') {
    bmr += 5;
  } else {
    bmr -= 161;
  }
  
  const tdee = Math.round(bmr * activity);

  let bmiStatus = '';
  let bmiColor = '';
  if (bmi < 18.5) { bmiStatus = 'น้ำหนักน้อย'; bmiColor = '#3b82f6'; }
  else if (bmi < 22.9) { bmiStatus = 'ปกติ'; bmiColor = '#10b981'; }
  else if (bmi < 24.9) { bmiStatus = 'ท้วม'; bmiColor = '#f59e0b'; }
  else if (bmi < 29.9) { bmiStatus = 'อ้วน'; bmiColor = '#ef4444'; }
  else { bmiStatus = 'อ้วนมาก'; bmiColor = '#b91c1c'; }

  return (
    <main style={{ padding: '2rem 1rem 6rem 1rem', display: 'flex', flex: '1', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
        <Link href="/" style={{ color: 'var(--primary)', fontWeight: '500' }}>
          &larr; กลับ
        </Link>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>ตั้งค่าโปรไฟล์ & ร่างกาย</h1>
      </header>

      <section>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
            ส
          </div>
          <button className="btn" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
            เปลี่ยนรูปโปรไฟล์
          </button>
        </div>

        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>ชื่อผู้ใช้งาน</label>
            <input 
              type="text" 
              defaultValue="สมชาย รักสุขภาพ" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)' }} 
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>เพศ</label>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
              >
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>อายุ (ปี)</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)' }} 
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>น้ำหนัก (กก.)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)' }} 
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>ส่วนสูง (ซม.)</label>
              <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)' }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>ระดับกิจกรรม (Activity Level)</label>
            <select 
              value={activity} 
              onChange={(e) => setActivity(Number(e.target.value))}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)' }}
            >
              <option value={1.2}>นั่งทำงานเป็นส่วนใหญ่ (ไม่ค่อยออกกำลัง)</option>
              <option value={1.375}>ออกกำลังกายเบาๆ (1-3 วัน/สัปดาห์)</option>
              <option value={1.55}>ออกกำลังกายปานกลาง (3-5 วัน/สัปดาห์)</option>
              <option value={1.725}>ออกกำลังกายหนัก (6-7 วัน/สัปดาห์)</option>
              <option value={1.9}>ออกกำลังกายหนักมาก (วันละ 2 ครั้ง)</option>
            </select>
          </div>

          {/* BMI & TDEE Results */}
          <div style={{ backgroundColor: 'var(--background)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', marginTop: '0.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>การประเมินร่างกาย</span>
              <span style={{ fontSize: '0.75rem', color: 'white', backgroundColor: bmiColor, padding: '0.125rem 0.5rem', borderRadius: '9999px' }}>{bmiStatus}</span>
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>ค่า BMI (ดัชนีมวลกาย)</span>
              <span style={{ fontWeight: '600' }}>{bmi.toFixed(1)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>BMR (เผาผลาญพื้นฐาน)</span>
              <span style={{ fontWeight: '600' }}>{Math.round(bmr)} kcal</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>TDEE (ใช้พลังงานรวม)</span>
              <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{tdee} kcal</span>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0.5rem 0' }} />

          {/* Goal Setting */}
          <div>
            <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '500' }}>เป้าหมายแคลอรี่ต่อวัน</label>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="goalType" 
                checked={goalType === 'tdee'} 
                onChange={() => setGoalType('tdee')} 
                style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
              />
              <div>
                <div style={{ fontWeight: '500' }}>ใช้ค่า TDEE เพื่อรักษาน้ำหนัก</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>แนะนำ {tdee} kcal/วัน</div>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input 
                type="radio" 
                name="goalType" 
                checked={goalType === 'manual'} 
                onChange={() => setGoalType('manual')} 
                style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500' }}>กำหนดเอง (สำหรับลด/เพิ่มน้ำหนัก)</div>
                {goalType === 'manual' && (
                  <input 
                    type="number" 
                    value={manualGoal}
                    onChange={(e) => setManualGoal(Number(e.target.value))}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)', marginTop: '0.5rem' }} 
                  />
                )}
              </div>
            </label>
          </div>

          <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            บันทึกการเปลี่ยนแปลง
          </button>
        </form>
      </section>

      <section style={{ marginTop: '1rem' }}>
        <button className="btn" style={{ width: '100%', backgroundColor: '#fee2e2', color: 'var(--danger)', border: '1px solid #fca5a5' }}>
          ออกจากระบบ
        </button>
      </section>
    </main>
  );
}

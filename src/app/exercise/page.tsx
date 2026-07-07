import Link from 'next/link';

export default function ExerciseDiary() {
  return (
    <main style={{ padding: '2rem 1rem', display: 'flex', flex: '1', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/" style={{ color: 'var(--primary)', fontWeight: '500' }}>
          &larr; กลับ
        </Link>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>บันทึกการออกกำลังกาย</h1>
      </header>

      <section>
        <button className="btn" style={{ width: '100%', backgroundColor: '#fc4c02', color: 'white', border: 'none', fontWeight: '600' }}>
          ซิงค์ข้อมูลจาก Strava
        </button>
        <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          อัปเดตล่าสุด: วันนี้ 08:30 น.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>เพิ่มการออกกำลังกายเอง (Custom)</h2>
        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>ชื่อกิจกรรม</label>
            <input 
              type="text" 
              placeholder="เช่น เดินชัน, โยคะ, เวทเทรนนิ่ง" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} 
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>ระยะเวลา (นาที)</label>
              <input 
                type="number" 
                placeholder="30" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} 
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>เผาผลาญ (kcal)</label>
              <input 
                type="number" 
                placeholder="200" 
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} 
              />
            </div>
          </div>
          <button type="button" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            บันทึกลงไดอารี่
          </button>
        </form>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>กิจกรรมล่าสุด</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500' }}>วิ่งตอนเช้า</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Strava (45 นาที)</div>
            </div>
            <span style={{ fontWeight: '600', color: 'var(--success)' }}>-350 kcal</span>
          </div>
          <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500' }}>เวทเทรนนิ่ง (แขน)</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>บันทึกเอง (30 นาที)</div>
            </div>
            <span style={{ fontWeight: '600', color: 'var(--success)' }}>-150 kcal</span>
          </div>
        </div>
      </section>
    </main>
  );
}

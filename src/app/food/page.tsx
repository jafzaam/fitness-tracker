import Link from 'next/link';

export default function FoodDiary() {
  return (
    <main style={{ padding: '2rem 1rem', display: 'flex', flex: '1', flexDirection: 'column', gap: '1.5rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link href="/" style={{ color: 'var(--primary)', fontWeight: '500' }}>
          &larr; กลับ
        </Link>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>บันทึกอาหาร</h1>
      </header>

      <section>
        <div style={{ position: 'relative' }}>
          <input 
            type="text" 
            placeholder="ค้นหาจากฐานข้อมูลอาหาร..." 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              borderRadius: 'var(--radius)', 
              border: '1px solid var(--border)',
              outline: 'none',
              fontSize: '1rem'
            }} 
          />
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>เพิ่มอาหารเอง (Custom)</h2>
        <form className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>ชื่ออาหาร</label>
            <input 
              type="text" 
              placeholder="เช่น ผัดไทยกุ้งสด" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>พลังงาน (kcal)</label>
            <input 
              type="number" 
              placeholder="450" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }} 
            />
          </div>
          <button type="button" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            บันทึกลงไดอารี่
          </button>
        </form>
      </section>

      <section>
        <h2 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>อาหารที่บันทึกล่าสุด</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>อกไก่ (100 กรัม)</span>
            <span style={{ fontWeight: '600' }}>165 kcal</span>
          </div>
          <div className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>ไข่ต้ม</span>
            <span style={{ fontWeight: '600' }}>78 kcal</span>
          </div>
        </div>
      </section>
    </main>
  );
}

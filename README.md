# 🏃‍♂️ Fitness Tracker (Gamified & Adaptive)

## 🎯 Project Vision
A modern fitness tracker built with Next.js, focusing on **Intelligent Data Harmonization** and **Gamification**. 
**Core Philosophy:**
- 🚫 **No "Simple Sync"**: Filter duplicated data (Deduplication).
- 🚫 **No "Logging Fatigue"**: Extremely easy & fast UI for input.
- 🚫 **No "Guilt-Driven"**: Adaptive Physiology Engine based on real readiness (RPE).

## 📊 Current Progress Roadmap (Save Point)

### ✅ Phase 1: Project Initialization & UI Base
- [x] Initialized Next.js project (App Router, Tailwind, TypeScript).
- [x] Set up basic pages (`/`, `/exercise`, `/food`, `/profile`).
- [x] Created mock UI for Dashboard and Calorie Tracking.
- [x] Configured AI Agent Skills (YAGNI, Token Saver, Agent Dev Thai, Pordee).

### ✅ Phase 2: Database Architecture
- [x] Installed `prisma@5` and `@prisma/client@5`.
- [x] Configured SQLite for local/offline-first storage (`dev.db`).
- [x] Designed YAGNI Schema: `User`, `CustomFood`, `Meal`, `Activity`, `Badge`, `UserBadge`.
- [x] Created and successfully ran `scripts/test-db.ts` to verify full CRUD and relationships.

### ⏳ Phase 3: UI & Server Actions (จุดเริ่มต้นสำหรับรอบหน้า)
- [ ] **[NEXT UP]** สร้างหน้าจอ (UI) สำหรับบันทึก Activity และ Meal ให้กรอกง่ายที่สุด (ลด Logging Fatigue ตามที่วางแผนไว้).
- [ ] เขียน Server Actions เพื่อบันทึกข้อมูลลงฐานข้อมูลจริง.
- [ ] เชื่อมต่อ Dashboard (`/`) กับ Database เพื่อดึงข้อมูล User และสถิติ PB.
- [ ] สร้างหน้าระบบเหรียญรางวัล (Gamification/Badges Showcase).

## 🚀 สำหรับนักพัฒนา (หรือ AI ในรอบถัดไป)
1. รัน `npm run dev` เพื่อเปิดหน้าเว็บ
2. รัน `npx prisma studio` เพื่อดูฐานข้อมูล
3. **คำสั่งเริ่มงาน:** "เริ่มทำ Phase 3 ต่อได้เลย (หน้าบันทึก Activity/Meal)"

---
*Last Updated: เสร็จสิ้น Phase 2 และหยุดพักการทำงานชั่วคราว*

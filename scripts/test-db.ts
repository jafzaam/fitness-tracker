import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing Database Connection and CRUD operations...');

  // 1. Create User
  const user = await prisma.user.create({
    data: {
      name: 'Test User',
      weight: 70,
      height: 175,
      calorieGoal: 2000,
    },
  });
  console.log('✅ Created User:', user.name);

  // 2. Create CustomFood
  const food = await prisma.customFood.create({
    data: {
      userId: user.id,
      name: 'Chicken Breast Salad',
      calories: 350,
      protein: 40,
      carbs: 10,
      fat: 15,
    },
  });
  console.log('✅ Created CustomFood:', food.name);

  // 3. Create Meal
  const meal = await prisma.meal.create({
    data: {
      userId: user.id,
      customFoodId: food.id,
      name: food.name,
      calories: food.calories,
      protein: food.protein,
      carbs: food.carbs,
      fat: food.fat,
      type: 'LUNCH',
      date: new Date(),
    },
  });
  console.log('✅ Created Meal:', meal.name);

  // 4. Create Activity
  const activity = await prisma.activity.create({
    data: {
      userId: user.id,
      type: 'RUNNING',
      distance: 5.0,
      duration: 1800,
      pace: 6.0,
      source: 'STRAVA',
      date: new Date(),
    },
  });
  console.log('✅ Created Activity:', activity.type, 'Distance:', activity.distance);

  // 5. Create Badge
  const badge = await prisma.badge.create({
    data: {
      name: 'Early Bird',
      description: 'Run between 05:00 and 08:00 AM for 7 consecutive days',
      icon: '🌅',
    },
  });
  console.log('✅ Created Badge:', badge.name);

  // 6. Create UserBadge
  const userBadge = await prisma.userBadge.create({
    data: {
      userId: user.id,
      badgeId: badge.id,
    },
  });
  console.log('✅ Created UserBadge relationship');

  // 7. Read Data back
  const fetchedUser = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      meals: true,
      activities: true,
      customFoods: true,
      userBadges: {
        include: { badge: true }
      }
    }
  });

  console.log('✅ Fetched User Data successfully. Meals:', fetchedUser?.meals.length, 'Activities:', fetchedUser?.activities.length, 'Badges:', fetchedUser?.userBadges.length);

  // 8. Clean up (Delete User - cascading deletes should handle the rest, but Badge needs separate delete)
  await prisma.user.delete({
    where: { id: user.id }
  });
  await prisma.badge.delete({
    where: { id: badge.id }
  });
  
  console.log('✅ Cleanup successful. All test data removed.');
  console.log('🎉 Database Testing Complete! All CRUD operations are working.');
}

main()
  .catch((e) => {
    console.error('❌ Error during testing:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

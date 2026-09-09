"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAchievements = seedAchievements;
exports.checkAndUnlockAchievements = checkAndUnlockAchievements;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const prisma_1 = require("../../lib/prisma");
const ACHIEVEMENTS = [
    {
        name: 'Century Focus',
        description: 'Reach 100 hours of total focus time',
        condition: 'total_hours_100',
        icon: '🥉',
        hours: 100,
        tier: 'Bronze',
        reward: 'Bronze profile badge, achievement certificate, and a celebratory animation.',
    },
    {
        name: 'Deep Worker',
        description: 'Reach 200 hours of total focus time',
        condition: 'total_hours_200',
        icon: '💎',
        hours: 200,
        tier: 'Sapphire',
        reward: 'Unlock exclusive Sapphire app theme + new focus soundscape.',
    },
    {
        name: 'Flow Finder',
        description: 'Reach 300 hours of total focus time',
        condition: 'total_hours_300',
        icon: '💚',
        hours: 300,
        tier: 'Emerald',
        reward: 'Unlock exclusive avatar/frame, Emerald badge, and motivational milestone card.',
    },
    {
        name: 'Half-K Legend',
        description: 'Reach 500 hours of total focus time',
        condition: 'total_hours_500',
        icon: '🥈',
        hours: 500,
        tier: 'Silver',
        reward: 'Unlock premium session statistics (longest streaks, best focus day, monthly insights).',
    },
    {
        name: 'Thousand Hour Club',
        description: 'Reach 1,000 hours of total focus time',
        condition: 'total_hours_1000',
        icon: '🥇',
        hours: 1000,
        tier: 'Gold',
        reward: 'Gold profile badge, exclusive app icon, and a shareable "1000 Hours" achievement card.',
    },
    {
        name: 'Relentless',
        description: 'Reach 2,000 hours of total focus time',
        condition: 'total_hours_2000',
        icon: '💠',
        hours: 2000,
        tier: 'Diamond',
        reward: 'Unlock Diamond theme, animated profile border, and exclusive ambient sounds.',
    },
    {
        name: 'Unstoppable Force',
        description: 'Reach 5,000 hours of total focus time',
        condition: 'total_hours_5000',
        icon: '⚪',
        hours: 5000,
        tier: 'Platinum',
        reward: 'Lifetime "Founder Elite" profile title, Platinum badge, and special confetti animation on milestones.',
    },
    {
        name: 'Ten Thousand Hours',
        description: 'Reach 10,000 hours of total focus time',
        condition: 'total_hours_10000',
        icon: '👑',
        hours: 10000,
        tier: 'Crown',
        reward: 'Crown profile frame, legendary app theme, personalized certificate, and featured placement on community leaderboard.',
    },
    {
        name: 'Transcendent',
        description: 'Reach 20,000 hours of total focus time',
        condition: 'total_hours_20000',
        icon: '⭐',
        hours: 20000,
        tier: 'Star',
        reward: 'Star aura animation, Hall of Fame profile, exclusive "Transcendent" title, and early access to future features.',
    },
];
async function seedAchievements() {
    console.log('Seeding achievements...');
    for (const a of ACHIEVEMENTS) {
        await prisma_1.prisma.achievement.upsert({
            where: { name: a.name },
            update: {
                description: a.description,
                condition: a.condition,
                icon: a.icon,
            },
            create: {
                name: a.name,
                description: a.description,
                condition: a.condition,
                icon: a.icon,
            },
        });
    }
    console.log(`Seeded ${ACHIEVEMENTS.length} achievements.`);
}
// Achievement check: run after a session ends
async function checkAndUnlockAchievements(userId) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { id: userId },
        select: { totalFocusSeconds: true },
    });
    if (!user)
        return [];
    const totalHours = user.totalFocusSeconds / 3600;
    // Get all achievements and user's unlocked ones
    const [allAchievements, userAchievements] = await Promise.all([
        prisma_1.prisma.achievement.findMany(),
        prisma_1.prisma.userAchievement.findMany({
            where: { userId },
            select: { achievementId: true },
        }),
    ]);
    const unlockedIds = new Set(userAchievements.map((ua) => ua.achievementId));
    const newlyUnlocked = [];
    for (const achievement of allAchievements) {
        if (unlockedIds.has(achievement.id))
            continue;
        // Extract hours threshold from condition
        const match = achievement.condition.match(/total_hours_(\d+)/);
        if (!match)
            continue;
        const requiredHours = parseInt(match[1], 10);
        if (totalHours >= requiredHours) {
            await prisma_1.prisma.userAchievement.create({
                data: { userId, achievementId: achievement.id },
            });
            newlyUnlocked.push(achievement.name);
        }
    }
    return newlyUnlocked;
}
// Run seed if called directly
if (require.main === module) {
    seedAchievements()
        .then(() => process.exit(0))
        .catch(e => { console.error(e); process.exit(1); });
}

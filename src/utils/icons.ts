/**
 * Unit Icons Configuration
 * 
 * Array of emoji icons used to visually represent different educational units.
 * Each icon is carefully selected to relate to common technology and education themes,
 * providing intuitive visual cues for different unit topics.
 * 
 * Icon Meanings:
 * 💡 - Ideas, concepts, innovation (Unit 1)
 * 🖥️ - Computers, desktop applications (Unit 2)
 * 🔢 - Numbers, mathematics, calculations (Unit 3)
 * ⚡ - Performance, optimization, power (Unit 4)
 * 🛠️ - Tools, development, configuration (Unit 5)
 * 🌐 - Web technologies, internet (Unit 6)
 * 📋 - Documentation, forms, data entry (Unit 7)
 * 🗄️ - Databases, data storage (Unit 8)
 * 👨‍💻 - Programming, development (Unit 9)
 * 🌍 - Global systems, networks (Unit 10)
 * 🤖 - Automation, artificial intelligence (Unit 11)
 * 💼 - Business applications, enterprise (Unit 12)
 * 🚀 - Advanced topics, deployment (Unit 13)
 * 📚 - Default fallback, general education (Unit 14+)
 */
const UNIT_ICONS = ['💡', '🖥️', '🔢', '⚡', '🛠️', '🌐', '📋', '🗄️', '👨‍💻', '🌍', '🤖', '💼', '🚀', '📚'];

/**
 * Get Unit Icon Function
 * 
 * Returns the appropriate emoji icon for a given unit number.
 * Provides consistent visual representation across the application
 * for unit identification and branding.
 * 
 * Features:
 * - Zero-indexed array access with 1-based unit numbers
 * - Fallback icon for units beyond the predefined range
 * - Consistent emoji style for cross-platform compatibility
 * 
 * Usage Examples:
 * - getUnitIcon(1) returns '💡' (first unit icon)
 * - getUnitIcon(8) returns '🗄️' (database unit)
 * - getUnitIcon(99) returns '📚' (fallback for high numbers)
 * 
 * @param unitNumber - The 1-based unit number (e.g., Unit 1, Unit 2, etc.)
 * @returns Emoji string representing the unit visually
 */
export const getUnitIcon = (unitNumber: number): string => {
  // Convert 1-based unit number to 0-based array index
  // Fallback to general education book icon if unit number exceeds array bounds
  return UNIT_ICONS[unitNumber - 1] || '📚';
};
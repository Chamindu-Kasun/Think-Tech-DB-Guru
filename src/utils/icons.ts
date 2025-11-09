const UNIT_ICONS = ['💡', '🖥️', '🔢', '⚡', '🛠️', '🌐', '📋', '🗄️', '👨‍💻', '🌍', '🤖', '💼', '🚀', '📚'];

export const getUnitIcon = (unitNumber: number): string => {
  return UNIT_ICONS[unitNumber - 1] || '📚';
};
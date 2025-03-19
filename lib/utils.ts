import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * ISO形式の日付文字列をyyyy.mm.dd形式に変換する
 * @param dateString ISO形式の日付文字列 (例: '2025-02-27T15:44:20+09:00')
 * @returns yyyy.mm.dd形式の日付文字列 (例: '2025.02.27')
 */
export function formatDateToYYYYMMDD(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}.${month}.${day}`;
}

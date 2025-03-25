// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ページ遷移のローディング状態管理のためのイベントエミッター
type LoadingEventType = 'start' | 'end';
type LoadingCallback = (type: LoadingEventType) => void;

class LoadingEventEmitter {
  private listeners: LoadingCallback[] = [];

  subscribe(callback: LoadingCallback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  emit(type: LoadingEventType) {
    this.listeners.forEach(listener => listener(type));
  }
}

export const loadingEmitter = new LoadingEventEmitter();

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

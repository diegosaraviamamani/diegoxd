export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact: {
        Row: {
          created_at: string | null
          email: string
          env: string | null
          id: number
          message: string
          name: string
        }
        Insert: {
          created_at?: string | null
          email: string
          env?: string | null
          id?: number
          message: string
          name: string
        }
        Update: {
          created_at?: string | null
          email?: string
          env?: string | null
          id?: number
          message?: string
          name?: string
        }
      }
      projects: {
        Row: {
          created_at: string | null
          group: string | null
          id: number
          imageKey: string
          link: string
          repo: string | null
          tags: string
          title: string
        }
        Insert: {
          created_at?: string | null
          group?: string | null
          id?: number
          imageKey: string
          link: string
          repo?: string | null
          tags: string
          title: string
        }
        Update: {
          created_at?: string | null
          group?: string | null
          id?: number
          imageKey?: string
          link?: string
          repo?: string | null
          tags?: string
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

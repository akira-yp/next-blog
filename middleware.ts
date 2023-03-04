// ユーザーのセッションを更新する
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from './utils/database.types'

export const middleware = async ( req: NextRequest ) => {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({req,res})

  const {
    data: { session },
  } = await supabase.auth.getSession()

  //　未認証状態で/admin以降に遷移した場合は、ログイン画面にリダイレクト
  if(!session && req.nextUrl.pathname.startsWith('/admin')) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}
